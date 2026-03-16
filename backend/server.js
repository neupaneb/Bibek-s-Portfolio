import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://bibek-s-portfolio-co55ut416-neupanebs-projects.vercel.app",
    "https://bibek-s-portfolio.vercel.app",
    "https://bibek-s-portfolio-xi.vercel.app",
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};


app.use(cors(corsOptions));
app.use(express.json());

// Enable preflight specifically for /contact
app.options("/contact", cors(corsOptions));

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: `New message from ${name}`,
      text: `Message: ${message}\nFrom: ${name} (${email})`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Message could not be sent." });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
