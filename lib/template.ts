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