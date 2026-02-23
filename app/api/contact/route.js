import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // <- wichtig: testet Login direkt
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,   // wichtig
      replyTo: email,                 // damit du auf den Absender antworten kannst
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return Response.json(
      { success: false, error: err?.message || String(err) },
      { status: 500 }
    );
  }
}