import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

/* --------------------------------
   Lead Scoring Logic
-------------------------------- */
function scoreLead(data: {
  projectType?: string;
  service?: string;
  phone?: string;
  email?: string;
}) {
  let score = 0;

  const projectType = (data.projectType || "").toLowerCase();
  const service = (data.service || "").toLowerCase();

  // Project type weighting
  if (projectType.includes("custom")) score += 40;
  else if (projectType.includes("residential")) score += 25;
  else if (projectType.includes("commercial")) score += 20;

  // Service weighting
  if (service.includes("installation")) score += 15;
  if (service.includes("replacement")) score += 10;
  if (service.includes("custom")) score += 20;

  // Contact completeness
  const hasPhone = Boolean(data.phone?.trim());
  const hasEmail = Boolean(data.email?.trim());

  if (hasPhone && hasEmail) score += 20;
  if (!hasPhone) score -= 30;

  // Clamp score
  score = Math.max(0, Math.min(100, score));

  const band = score >= 80 ? "🔥 HOT" : score >= 50 ? "♨️ WARM" : "❄️ LOW";

  return { score, band };
}

/* --------------------------------
   POST Handler
-------------------------------- */
export async function POST(req: Request) {
  try {
    const raw = await req.json();

    // Normalize input (critical for stability)
    const data = {
      name: String(raw.name || "").trim(),
      phone: String(raw.phone || "").trim(),
      email: String(raw.email || "").trim(),
      projectType: raw.projectType || "",
      service: raw.service || "",

      // Tracking
      utm_source: raw.utm_source || "",
      utm_medium: raw.utm_medium || "",
      utm_campaign: raw.utm_campaign || "",
      utm_term: raw.utm_term || "",
      utm_content: raw.utm_content || "",
      gclid: raw.gclid || "",
      fbclid: raw.fbclid || "",
      page_url: raw.page_url || "",
      referrer: raw.referrer || "",
    };

    // Hard validation
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { score, band } = scoreLead(data);

    const apiKey = process.env.MAILERSEND_API_KEY;
    if (!apiKey) {
      throw new Error("MAILERSEND_API_KEY is not set");
    }

    const mailerSend = new MailerSend({ apiKey });

    const sentFrom = new Sender(
      process.env.MAIL_FROM_EMAIL || "leads@entrysolutionllc.com",
      process.env.MAIL_FROM_NAME || "Entry Solutions LLC"
    );

    /* --------------------------------
       1️⃣ ADMIN / INTERNAL EMAIL
    -------------------------------- */
    const adminEmail = new EmailParams()
  .setFrom(sentFrom)
  .setTo([new Recipient("entrysolutionllc@gmail.com", "Entry Solutions")])
  .setCc([new Recipient("tesoromanagements@gmail.com", "Tesoro Management")])  
       ])
      .setSubject(
        `${band} Lead (${score}/100) — ${data.projectType || "Unknown"} / ${data.service || "Unknown"}`
      )
      .setHtml(`
        <h2>🚪 New Website Lead</h2>

        <p><strong>Lead Priority:</strong> ${band}</p>
        <p><strong>Lead Score:</strong> ${score}/100</p>

        <hr />

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Type:</strong> ${data.projectType || "—"}</p>
        <p><strong>Service:</strong> ${data.service || "—"}</p>

        <hr />

        <h4>📊 Tracking</h4>
        <p><strong>UTM Source:</strong> ${data.utm_source || "—"}</p>
        <p><strong>UTM Medium:</strong> ${data.utm_medium || "—"}</p>
        <p><strong>UTM Campaign:</strong> ${data.utm_campaign || "—"}</p>
        <p><strong>UTM Term:</strong> ${data.utm_term || "—"}</p>
        <p><strong>UTM Content:</strong> ${data.utm_content || "—"}</p>
        <p><strong>GCLID:</strong> ${data.gclid || "—"}</p>
        <p><strong>FBCLID:</strong> ${data.fbclid || "—"}</p>

        <p><strong>Page URL:</strong> ${data.page_url || "—"}</p>
        <p><strong>Referrer:</strong> ${data.referrer || "—"}</p>

        <hr />

        <p>Submitted from EntrySolutionsLLC.com</p>
      `);

    await mailerSend.email.send(adminEmail);

    /* --------------------------------
       2️⃣ AUTO-REPLY TO LEAD
    -------------------------------- */
    const autoReply = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient(data.email, data.name)])
      .setSubject("✅ We Received Your Request — Entry Solutions LLC")
      .setHtml(`
        <h2>Thanks ${data.name}, we’ve got your request!</h2>

        <p>We received your inquiry for a <strong>${data.service || "door project"}</strong>.</p>

        <p>A member of our team will contact you shortly to discuss pricing,
        availability, and next steps.</p>

        <h4>What happens next?</h4>
        <ul>
          <li>📞 Quick phone call</li>
          <li>📐 Measurements if needed</li>
          <li>💰 Clear, upfront pricing</li>
        </ul>

        <p>If you need immediate assistance, call us at:</p>

        <p style="font-size:18px;"><strong>(267) 945-2247</strong></p>

        <p>— Entry Solutions LLC</p>
      `);

    await mailerSend.email.send(autoReply);

    /* --------------------------------
       ✅ RESPONSE
    -------------------------------- */
    return NextResponse.json({
      success: true,
      score,
      band,
    });
  } catch (error) {
    console.error("Lead API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
