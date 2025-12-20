import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!,
    });

    // FROM address (domain must be verified)
    const sentFrom = new Sender(
      process.env.MAIL_FROM_EMAIL || "leads@entrysolutionllc.com",
      process.env.MAIL_FROM_NAME || "Entry Solutions LLC"
    );

    /* -----------------------------------
       1️⃣ ADMIN / INTERNAL LEAD EMAIL
    ----------------------------------- */
    const adminRecipients = [
      new Recipient("entrysolutionllc@gmail.com", "Entry Solutions"),
      new Recipient("tesoromanagements@gmail.com", "Tesoro Management"),
    ];

    const adminEmail = new EmailParams()
      .setFrom(sentFrom)
      .setTo(adminRecipients)
      .setSubject("🚪 New Door Installation Lead")
      .setHtml(`
        <h2>New Website Lead</h2>
        <p><strong>Project Type:</strong> ${data.projectType || "—"}</p>
        <p><strong>Service:</strong> ${data.service || "—"}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr />
        <p>This lead was submitted from the Entry Solutions website.</p>
      `);

    await mailerSend.email.send(adminEmail);

    /* -----------------------------------
       2️⃣ AUTO-REPLY TO LEAD
    ----------------------------------- */
    const autoReply = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient(data.email, data.name)])
      .setSubject("✅ We Received Your Request — Entry Solutions LLC")
      .setHtml(`
        <h2>Thanks for reaching out, ${data.name}!</h2>

        <p>We've received your request for a <strong>${data.service || "door project"}</strong>.</p>

        <p>A member of our team will be calling or texting you shortly to discuss
        your project and provide next steps.</p>

        <p><strong>What happens next?</strong></p>
        <ul>
          <li>📞 Quick call to confirm details</li>
          <li>📐 Accurate measurements if needed</li>
          <li>💰 Clear, no-pressure pricing</li>
        </ul>

        <p>If you need immediate assistance, call us at:</p>

        <p style="font-size:18px;"><strong>(267) 945-2247</strong></p>

        <p>— Entry Solutions LLC</p>
      `);

    await mailerSend.email.send(autoReply);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("MailerSend Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send lead" },
      { status: 500 }
    );
  }
}
