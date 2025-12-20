// Auto-reply email to the lead
const autoReply = new EmailParams()
  .setFrom(sentFrom)
  .setTo([new Recipient(data.email, data.name)])
  .setSubject("✅ We Received Your Request — Entry Solutions LLC")
  .setHtml(`
    <h2>Thanks for reaching out, ${data.name}!</h2>

    <p>We've received your request for a <strong>${data.service}</strong>.</p>

    <p>A member of our team will be calling you shortly to discuss your project
    and provide next steps.</p>

    <p><strong>What happens next?</strong></p>
    <ul>
      <li>📞 Quick phone call to confirm details</li>
      <li>📐 Accurate measurements if needed</li>
      <li>💰 Clear, no-pressure pricing</li>
    </ul>

    <p>If you need immediate assistance, you can call us directly at:</p>

    <p style="font-size:18px;"><strong>(267) 945-2247</strong></p>

    <p>— Entry Solutions LLC</p>
  `);

await mailerSend.email.send(autoReply);
