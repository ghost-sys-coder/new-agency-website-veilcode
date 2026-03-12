interface ContactFormProps {
    name: string;
    service: string;
    budget: string;
    timeline: string;
    company: string;
    email?: string;
    message?: string;
}
export const clientEmailTemplate = async (confirmUrl: string) => {
    return `
    <!DOCTYPE html>
                <html>
                <body style="margin:0;padding:0;background:#0a0a0a;font-family:sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
                    <tr>
                        <td align="center">
                        <table width="560" cellpadding="0" cellspacing="0"
                            style="background:#111;border:1px solid #222;border-radius:12px;padding:48px 40px;">
                            <tr>
                            <td>
                                <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;
                                text-transform:uppercase;color:#7c5cfc;font-family:monospace;">
                                VeilCode Newsletter
                                </p>
                                <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;
                                color:#f0f0f0;line-height:1.2;">
                                Confirm your subscription
                                </h1>
                                <p style="margin:0 0 32px;font-size:15px;color:#888;line-height:1.6;">
                                You're one click away from engineering deep-dives, design thinking,
                                and practical AI — written for builders who care about craft.
                                </p>
                                <a href="${confirmUrl}"
                                style="display:inline-block;padding:14px 32px;background:#7c5cfc;
                                color:#fff;font-size:14px;font-weight:600;border-radius:8px;
                                text-decoration:none;letter-spacing:0.3px;">
                                Confirm Subscription →
                                </a>
                                <p style="margin:32px 0 0;font-size:12px;color:#555;line-height:1.6;">
                                This link expires in <strong style="color:#888;">24 hours</strong>.
                                If you didn't request this, you can safely ignore this email.
                                </p>
                                <hr style="margin:32px 0;border:none;border-top:1px solid #222;" />
                                <p style="margin:0;font-size:11px;color:#444;">
                                © ${new Date().getFullYear()} VeilCode Digital Solutions
                                </p>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                    </table>
                </body>
                </html>
    `
}

// confirmation email to the client - from contact form
export const clientContactFormTemplate = async ({name, service, budget, timeline, company }: ContactFormProps) => {
    return `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
          <h1 style="color: #111; font-size: 24px; margin-bottom: 8px;">Thank you, ${name.split(" ")[0]}!</h1>
          <p style="color: #555; line-height: 1.6; margin-bottom: 24px;">
            We’ve received your project enquiry and are excited to learn more about what you’re building.
          </p>
          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <h3 style="margin: 0 0 12px; color: #333; font-size: 18px;">Your submission summary:</h3>
            <p style="margin: 8px 0; color: #444;">
              <strong>Service:</strong> ${service}<br>
              ${budget ? `<strong>Budget:</strong> ${budget}<br>` : ""}
              ${timeline ? `<strong>Timeline:</strong> ${timeline}<br>` : ""}
              ${company ? `<strong>Company:</strong> ${company}<br>` : ""}
            </p>
          </div>
          <p style="color: #555; line-height: 1.6; margin-bottom: 24px;">
            Our team will review your message and get back to you within <strong>one business day</strong>.
          </p>
          <p style="color: #777; font-size: 14px; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">
            VeilCode Agency<br>
            Building purposeful digital experiences<br>
            <a href="https://youragency.com" style="color: #0066cc; text-decoration: none;">youragency.com</a>
          </p>
        </div>
    `
}

// lead confirmation email to the admin
export const adminLeadConfirmationTemplate = async ({name, email, company, service, budget, timeline, message}: ContactFormProps) => {
    return `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
          <h1 style="color: #111; font-size: 24px;">New Enquiry Received</h1>
          <p style="color: #555; margin: 16px 0;">
            <strong>From:</strong> ${name} <${email}>
          </p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Service:</strong> ${service}</p>
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <h3 style="margin: 0 0 12px; color: #333;">Message:</h3>
            <p style="margin: 0; white-space: pre-wrap; color: #444;">${message}</p>
          </div>
          <p style="color: #777; font-size: 14px; margin-top: 32px;">
            View full details in admin dashboard or reply directly to this email.
          </p>
        </div>
    `
}

