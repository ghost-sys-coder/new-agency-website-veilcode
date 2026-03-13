import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/db/drizzle";
import { newsletterSubscriptionTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { clientEmailTemplate } from "@/lib/template";
import { resend } from "@/lib/resend";

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({
                success: false,
                message: "Email is missing!"
            }, { status: 404 });
        }

        // check if the user is already subscribed
        const [existing] = await db.select()
            .from(newsletterSubscriptionTable)
            .where(eq(newsletterSubscriptionTable.email, email));
        
        if (existing?.subscribed) {
            return NextResponse.json({
                success: false,
                message: "Already subscribed!"
            }, { status: 409 }); 
        }

        // Generate a secure token that expires in 24 hours
        const confirmToken = crypto.randomBytes(32).toString("hex");
        const confirmTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

        // Upsert — handles the case where someone re-requests confirmation
        const [result] = existing ?
            await db.update(newsletterSubscriptionTable)
                .set({ confirmToken, confirmTokenExpiresAt })
                .where(eq(newsletterSubscriptionTable.email, email)).returning()
            : await db.insert(newsletterSubscriptionTable)
                .values({ confirmToken, confirmTokenExpiresAt, email }).returning();
        
        if (!result?.id) {
            return NextResponse.json({
                success: true,
                message: "Subscription failed. Try again!"
            }, { status: 400 });
        }

        // send confirmation email 
        const confirmUrl = `${process.env.FRONTEND_URL}/api/newsletter/confirm?token=${confirmToken}`;

        const { error } = await resend.emails.send({
            from: "VeilCode <hello@veilcode.studio>",
            to: email,
            subject: "Confirm your VeilCode Newsletter subscription",
            html: await clientEmailTemplate(confirmUrl)
        });

        if (error) {
            console.log("Resend Error:", error);
            return NextResponse.json({
                success: false,
                message: (error as Error).message || "Failed to send confirmation email! Try again."
            }, { status: 500});
        }

        return NextResponse.json({
            success: true,
            message: "Check your email for confirmation"
        }, { status: 201});

    } catch (error) {
        console.error("Something went wrong: - newsletter-subscription-route", error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message || "Something went wrong!"
        })
    }
}