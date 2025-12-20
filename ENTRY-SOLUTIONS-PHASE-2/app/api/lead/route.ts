import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!,
    });

    const sentFrom = new Sender(
      process.env.MAIL_FROM_EMAIL!,
      process.env.MAIL_FROM_NAME || "Entry Solutions LLC"
    );

    const recipients = [
      new Recipient("entrysolutionllc@gmail.com", "Entry Solutions"),
      new Recipient("tesoromanagements@gmail.com", "Tesoro Management"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("🚪 New Door Installation Lead")
      .setHtml(`
        <h2>New Website Lead</h2>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr />
        <p>This lead was submitted from the Entry Solutions website.</p>
      `);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MailerSend Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send lead" },
      { status: 500 }
    );
  }
}
