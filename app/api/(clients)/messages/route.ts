import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { clientInquiries } from "@/db/schema";
import { resend } from "@/lib/resend";
import { adminLeadConfirmationTemplate, clientContactFormTemplate } from "@/lib/template";

export async function POST(req: NextRequest) {
    try {
        const { name, email, company, service, budget, timeline, message } = await req.json();

        if (!name || !email || !service || !message) {
            return NextResponse.json({
                success: false,
                message: "Name, email, service and message are required!"
            }, { status: 404 });
        }

        const [inquiry] = await db.insert(clientInquiries).values({
            name,
            email,
            service,
            message,
            budget,
            timeline,
            company
        }).returning();

        if (!inquiry.id) {
            return NextResponse.json({
                success: false,
                message: "Failed to submit data! Try again"
            }, { status: 409});
        }

        // send a confirmation to the client
        const { error: clientError } = await resend.emails.send({
            from: "VeilCode <onboarding@resend.dev>",
            to: [email],
            subject: "Thank you for reaching out - VeilCode",
            html: await clientContactFormTemplate({ name, service, budget, timeline, company })
        });

        if (clientError) {
            throw new Error("Failed to send client confirmation email!");
        }

        // send a lead email to the admin
        const { error: adminError } = await resend.emails.send({
            from: "VeilCode <onboarding@resend.dev>",
            to: ["juniorbeast177@gmail.com"],
            subject: `New Project Enquiry from ${name}`,
            html: await adminLeadConfirmationTemplate({ name, service, budget, timeline, company, email, message })
        });

        if (adminError) {
            throw new Error("Failed to send lead alert email!");
        }

        return NextResponse.json({
            success: true,
            message: "Check your email for more details!"
        }, { status: 201 });
    } catch (error) {
        console.error("Something went wrong: -route: api/messages", error);
        return NextResponse.json({
            success: false,
            mesage: (error as Error).message || "Something went wrong!"
        }, { status: 500 });
    }
}