import { db } from "@/db/drizzle";
import { newsletterSubscriptionTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = req.nextUrl.searchParams.get("token");

        if (!token) {
            return NextResponse.redirect(
                new URL("/newsletter/invalid", req.nextUrl.origin)
            );
        }

        const [subscription] = await db.select()
            .from(newsletterSubscriptionTable)
            .where(eq(newsletterSubscriptionTable.confirmToken, token));
        
        if (!subscription) {
            return NextResponse.redirect(
                new URL("/newsletter/invalid", req.nextUrl.origin)
            );
        }

        // check if token is expired
        const isTokenExpired = !subscription.confirmTokenExpiresAt || subscription.confirmTokenExpiresAt < new Date();

        if (isTokenExpired) {
            return NextResponse.redirect(
                new URL("/newsletter/expired", req.nextUrl.origin)
            );
        }

        // CHECK IF THE USER IS ALREADY SUBSCRIBED
        if (subscription.subscribed) {
            return NextResponse.redirect(
                new URL("/newsletter/confirmed", req.nextUrl.origin)
            );
        }

        // Activate subscription and clear token
        await db.update(newsletterSubscriptionTable).set({
            subscribed: true,
            confirmToken: null,
            confirmTokenExpiresAt: null
        }).where(eq(newsletterSubscriptionTable.confirmToken, token));

        return NextResponse.redirect(new URL("/newsletter/confirmed", req.nextUrl.origin));
  } catch (error) {
    console.error(
      "Something went wrong: - newsletter-confirmation-route",
      error,
    );
    return NextResponse.json({
      success: false,
      message: (error as Error).message || "Something went wrong!",
    });
  }
}
