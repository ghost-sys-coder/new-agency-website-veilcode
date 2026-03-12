export const adminLeadConfirmationTemplate = async ({
  name,
  email,
  company,
  service,
  budget,
  timeline,
  message,
  goals,
}: ContactFormProps) => {
  const goalsHTML =
    goals && goals.length > 0
      ? `
        <tr>
          <td style="padding: 20px 32px; border-bottom: 1px solid #f0f0f0;">
            <p style="margin: 0 0 12px; font-size: 11px; font-weight: 600;
              letter-spacing: 0.08em; text-transform: uppercase; color: #999;">
              Client Goals
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${goals
                .map(
                  (goal) => `
                <span style="display: inline-block; padding: 5px 12px;
                  background: #f5f3ff; border: 1px solid #ddd6fe;
                  border-radius: 999px; font-size: 12px;
                  font-weight: 500; color: #6d28d9;">
                  ${goal}
                </span>`
                )
                .join("")}
            </div>
          </td>
        </tr>`
      : "";

  const metaRow = (label: string, value: string) => `
    <tr>
      <td style="padding: 14px 32px; border-bottom: 1px solid #f0f0f0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
              text-transform: uppercase; color: #999; width: 110px; vertical-align: top;
              padding-top: 1px;">
              ${label}
            </td>
            <td style="font-size: 14px; color: #1a1a1a; font-weight: 500;">
              ${value}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — VeilCode</title>
</head>
<body style="margin: 0; padding: 0; background: #f4f4f5; font-family: 'Segoe UI', system-ui, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f4f4f5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="max-width: 600px; background: #ffffff;
            border-radius: 16px; overflow: hidden;
            border: 1px solid #e4e4e7;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background: #111111; padding: 28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 11px; font-weight: 600;
                      letter-spacing: 0.12em; text-transform: uppercase;
                      color: #888; margin-bottom: 6px;">
                      VeilCode Studio
                    </p>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700;
                      color: #ffffff; letter-spacing: -0.02em;">
                      New Enquiry Received
                    </h1>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; padding: 6px 14px;
                      background: #1a1a1a; border: 1px solid #333;
                      border-radius: 999px; font-size: 11px;
                      font-weight: 600; color: #a3e635;
                      letter-spacing: 0.05em;">
                      ● LIVE
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender highlight -->
          <tr>
            <td style="padding: 24px 32px; background: #fafafa; border-bottom: 1px solid #f0f0f0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <div style="width: 44px; height: 44px; border-radius: 999px;
                      background: #111; display: flex; align-items: center;
                      justify-content: center; font-size: 18px; font-weight: 700;
                      color: #fff; text-align: center; line-height: 44px;">
                      ${name.charAt(0).toUpperCase()}
                    </div>
                  </td>
                  <td style="padding-left: 14px; vertical-align: middle;">
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #111;">
                      ${name}
                    </p>
                    <p style="margin: 2px 0 0; font-size: 13px; color: #777;">
                      ${email ?? "No email provided"}
                      ${company ? `&nbsp;·&nbsp;<span style="color:#555;">${company}</span>` : ""}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Meta rows -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${metaRow("Service", service)}
                ${budget ? metaRow("Budget", budget) : ""}
                ${timeline ? metaRow("Timeline", timeline) : ""}
                ${goalsHTML}
              </table>
            </td>
          </tr>

          <!-- Message -->
          ${
            message
              ? `
          <tr>
            <td style="padding: 20px 32px 24px;">
              <p style="margin: 0 0 10px; font-size: 11px; font-weight: 600;
                letter-spacing: 0.08em; text-transform: uppercase; color: #999;">
                Message
              </p>
              <div style="background: #f8f8f8; border-left: 3px solid #111;
                border-radius: 0 8px 8px 0; padding: 16px 20px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.7;
                  color: #333; white-space: pre-wrap;">
                  ${message}
                </p>
              </div>
            </td>
          </tr>`
              : ""
          }

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background: #fafafa;
              border-top: 1px solid #f0f0f0; border-radius: 0 0 16px 16px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #aaa; line-height: 1.6;">
                      Reply directly to this email to respond to ${name},
                      or view the full submission in your admin dashboard.
                    </p>
                  </td>
                  <td align="right" style="white-space: nowrap; padding-left: 16px;">
                    <p style="margin: 0; font-size: 11px; color: #ccc;">
                      ${new Date().toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `;
};


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
    `;
};

export const clientContactFormTemplate = async ({
  name,
  service,
  budget,
  timeline,
  company,
}: ContactFormProps) => {
  const firstName = name.split(" ")[0];

  const metaRow = (label: string, value: string) => `
    <tr>
      <td style="padding: 13px 0; border-bottom: 1px solid #f0f0f0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
              text-transform: uppercase; color: #999; width: 100px; vertical-align: top;
              padding-top: 1px;">
              ${label}
            </td>
            <td style="font-size: 14px; color: #1a1a1a; font-weight: 500;">
              ${value}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your enquiry — VeilCode</title>
</head>
<body style="margin: 0; padding: 0; background: #f4f4f5;
  font-family: 'Segoe UI', system-ui, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0"
    style="background: #f4f4f5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="max-width: 600px; background: #ffffff; border-radius: 16px;
            overflow: hidden; border: 1px solid #e4e4e7;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background: #111111; padding: 36px 32px 32px;">
              <p style="margin: 0 0 10px; font-size: 11px; font-weight: 600;
                letter-spacing: 0.12em; text-transform: uppercase; color: #666;">
                VeilCode Studio
              </p>
              <h1 style="margin: 0 0 6px; font-size: 26px; font-weight: 700;
                color: #ffffff; letter-spacing: -0.02em; line-height: 1.2;">
                We&apos;ve got your message,<br />${firstName}.
              </h1>
              <p style="margin: 12px 0 0; font-size: 14px; color: #888; line-height: 1.6;">
                Thanks for reaching out. Your enquiry is in safe hands
                and we&apos;ll be in touch shortly.
              </p>
            </td>
          </tr>

          <!-- What happens next banner -->
          <tr>
            <td style="background: #f0fdf4; border-top: 1px solid #bbf7d0;
              border-bottom: 1px solid #bbf7d0; padding: 14px 32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 10px;
                    font-size: 18px; line-height: 1;">
                    ✅
                  </td>
                  <td style="font-size: 13px; color: #166534; font-weight: 500;">
                    Enquiry received — our team will respond within
                    <strong>1 business day</strong>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Submission summary -->
          <tr>
            <td style="padding: 28px 32px 8px;">
              <p style="margin: 0 0 16px; font-size: 11px; font-weight: 600;
                letter-spacing: 0.08em; text-transform: uppercase; color: #999;">
                Your Submission
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${metaRow("Service", service)}
                ${budget ? metaRow("Budget", budget) : ""}
                ${timeline ? metaRow("Timeline", timeline) : ""}
                ${company ? metaRow("Company", company) : ""}
              </table>
            </td>
          </tr>

          <!-- What happens next steps -->
          <tr>
            <td style="padding: 28px 32px;">
              <p style="margin: 0 0 16px; font-size: 11px; font-weight: 600;
                letter-spacing: 0.08em; text-transform: uppercase; color: #999;">
                What Happens Next
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="vertical-align: top; padding-bottom: 16px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 14px;">
                          <div style="width: 28px; height: 28px; border-radius: 999px;
                            background: #111; text-align: center; line-height: 28px;
                            font-size: 12px; font-weight: 700; color: #fff;">
                            1
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-top: 4px;">
                          <p style="margin: 0 0 2px; font-size: 14px; font-weight: 600;
                            color: #111;">
                            Review
                          </p>
                          <p style="margin: 0; font-size: 13px; color: #777; line-height: 1.5;">
                            Our team reviews your project details and goals.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="vertical-align: top; padding-bottom: 16px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 14px;">
                          <div style="width: 28px; height: 28px; border-radius: 999px;
                            background: #111; text-align: center; line-height: 28px;
                            font-size: 12px; font-weight: 700; color: #fff;">
                            2
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-top: 4px;">
                          <p style="margin: 0 0 2px; font-size: 14px; font-weight: 600;
                            color: #111;">
                            Discovery Call
                          </p>
                          <p style="margin: 0; font-size: 13px; color: #777; line-height: 1.5;">
                            We schedule a short call to align on scope, timeline, and outcomes.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="vertical-align: top;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 14px;">
                          <div style="width: 28px; height: 28px; border-radius: 999px;
                            background: #111; text-align: center; line-height: 28px;
                            font-size: 12px; font-weight: 700; color: #fff;">
                            3
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-top: 4px;">
                          <p style="margin: 0 0 2px; font-size: 14px; font-weight: 600;
                            color: #111;">
                            Proposal
                          </p>
                          <p style="margin: 0; font-size: 13px; color: #777; line-height: 1.5;">
                            You receive a tailored proposal with a clear roadmap and pricing.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px 28px; background: #fafafa;
              border-top: 1px solid #f0f0f0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 0 0 4px; font-size: 13px; font-weight: 600;
                      color: #111;">
                      VeilCode Studio
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #aaa; line-height: 1.6;">
                      Building purposeful digital experiences.<br />
                      <a href="https://veilcodestudio.vercel.app"
                        style="color: #555; text-decoration: underline;
                          text-underline-offset: 2px;">
                        veilcodestudio.vercel.app
                      </a>
                    </p>
                  </td>
                  <td align="right" style="vertical-align: bottom;">
                    <p style="margin: 0; font-size: 11px; color: #ccc;">
                      ${new Date().toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- Legal note -->
        <p style="margin: 16px 0 0; font-size: 11px; color: #bbb; text-align: center;">
          You&apos;re receiving this because you submitted an enquiry on VeilCode Studio.
        </p>

      </td>
    </tr>
  </table>

</body>
</html>
  `;
};

