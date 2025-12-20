import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

/* -----------------------------------
   Helpers
----------------------------------- */

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function scoreLead(data: {
  projectType?: string;
  service?: string;
  name?: string;
  phone?: string;
  email?: string;
}) {
  let score = 0;

  const projectType = (data.projectType || "").toLowerCase();
  const service = (data.service || "").toLowerCase();

  if (projectType.includes("custom")) score += 40;
  else if (projectType.includes("residential")) score += 25;
  else if (projectType.includes("commercial")) score += 20;

  if (service.includes("installation")) score += 15;
  if (service.includes("replacement")) score += 10;
  if (service.includes("custom")) score += 20;

  const hasPhone = Boolean((data.phone || "").trim());
  const hasEmail = Boolean((data.email || "").trim());

  if (hasPhone && hasEmail) score += 20;
  if (!hasPhone) score -= 30;

  score = Math.max(0, Math.min(100, score));

  const band =
    score >= 80 ? "HOT 🔥" : score >= 50 ? "WARM ♨️" : "LOW ❄️";

  return { score, band };
}

/* -----------------------------------
   POST HANDLER
----------------------------------- */

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const receivedAt = new Date();
    const respondBy = new Date(receivedAt.getTime() + 5 * 60 * 1000);
    const { score, band } = scoreLead(data);

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!,
    });

    const sentFrom = new Sender(
      process.env.MAIL_FROM_EMAIL || "leads@entrysolutionllc.com",
      process.env.MAIL_FROM_NAME || "Entry Solutions LLC"
    );

    /* -----------------------------------
       1️⃣ ADMIN / INTERNAL EMAIL
    ----------------------------------- */

    const adminRecipients = [
      new Recipient("entrysolutionllc@gmail.com", "Entry Solutions"),
      new Recipient("tesoromanagements@gmail.com", "Tesoro Management"),
    ];

    const adminEmail = new EmailParams()
      .setFrom(sentFrom)
      .setTo(adminRecipients)
      .setSubject(
        `${band} Lead (${score}) — RESPOND BY ${formatTime(respondBy)}`
      )
      .setHtml(`
        <div style="
          background:#dc2626;
          color:white;
          padding:12px;
          font-size:16px;
          font-weight:bold;
          text-align:center;
          border-radius:6px;
        ">
          ⏱️ SPEED-TO-LEAD TARGET: Respond by ${formatTime(respondBy)}
        </div>

        <h2 style="margin-top:16px;">New Website Lead</h2>

        <p><strong>Priority:</strong> ${band}</p>
        <p><strong>Score:</strong> ${score}/100</p>

        <hr />

        <p><strong>Project Type:</strong> ${data.projectType || "—"}</p>
        <p><strong>Service:</strong> ${data.service || "—"}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>

        <hr />

        <p><strong>Lead Received:</strong> ${receivedAt.toLocaleString()}</p>
        <p><strong>Respond By:</strong> ${respondBy.toLocaleString()}</p>

        <p style="color:#666;">
          Submitted from the Entry Solutions website.
        </p>
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

        <p>
          We’ve received your request for a
          <strong>${data.service || "door project"}</strong>.
        </p>

        <p>
          A member of our team will be calling or texting you shortly
          to discuss your project and next steps.
        </p>

        <p><strong>What happens next?</strong></p>
        <ul>
          <li>📞 Quick call to confirm details</li>
          <li>📐 Accurate measurements if needed</li>
          <li>💰 Clear, no-pressure pricing</li>
        </ul>

        <p>
          Need immediate help? Call us directly:
        </p>

        <p style="font-size:18px;">
          <strong>(267) 945-2247</strong>
        </p>

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
