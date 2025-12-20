import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "Entry Solutions <leads@yourdomain.com>",
      to: [
  "entrysolutionllc@gmail.com.com",
  "tesoromanagements@gmail.com"
]      subject: "🚪 New Door Installation Lead",
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Source:</strong> Website Quiz</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}
