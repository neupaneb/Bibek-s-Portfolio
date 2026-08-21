import nodemailer from "nodemailer";

/* global process */

const isValidEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (!name || !isValidEmail(email) || !message) {
    return res.status(400).json({ error: "Please provide a valid name, email, and message." });
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: "One or more fields are too long." });
  }

  const recipient = process.env.MY_EMAIL;
  const appPassword = process.env.MY_PASS;

  if (!recipient || !appPassword) {
    return res.status(503).json({ error: "Email service is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: recipient, pass: appPassword },
    });

    await transporter.sendMail({
      from: `Bibek Neupane Portfolio <${recipient}>`,
      replyTo: email,
      to: recipient,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ message: "Your message has been delivered." });
  } catch (error) {
    console.error("Contact email failed:", error);
    return res.status(500).json({ error: "Message could not be sent automatically." });
  }
}
