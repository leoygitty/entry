import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    /* ============================
       1️⃣ INTERNAL LEAD NOTIFICATION
    ============================ */
    await resend.emails.send({
      from: "Entry Solutions <leads@entrysolutionsllc.com>",
      to: [
        "entrysolutionllc@gmail.com",
        "tesoromanagements@gmail.com",
      ],
      subject: "🚪 New Door Installation Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <hr />
        <p>Submitted from Entry Solutions website</p>
      `,
    });

    /* ============================
       2️⃣ CUSTOMER AUTO-REPLY EMAIL
    ============================ */
    await resend.emails.send({
      from: "Entry Solutions <hello@entrysolutionsllc.com>",
      to: data.email,
      subject: "We Received Your Request — Entry Solutions LLC",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thanks for reaching out, ${data.name}!</h2>

          <p>
            We’ve received your request for a <strong>${data.service}</strong> project.
            A member of our team will review your details and reach out shortly.
          </p>

          <p>
            If you’d like immediate assistance, feel free to call us directly:
          </p>

          <p style="font-size: 18px; font-weight: bold;">
            📞 (267) 945-2247
          </p>

          <hr />

          <p style="font-size: 14px; color: #555;">
            Entry Solutions LLC<br />
            Professional Door Installation & Custom Projects
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to send lead" },
      { status: 500 }
    );
  }
}
