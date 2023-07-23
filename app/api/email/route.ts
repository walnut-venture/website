import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const { body } = req;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: (body as any).email,
      to: process.env.EMAIL_USERNAME,
      subject: "Message from: " + (body as any).name,
      text: "Phone: " + (body as any).phone + "\n" + (body as any).message
    };

    const emailRes = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent', data: emailRes });
  } catch (err: any) {
    res.status(500).json({ success: false, message: 'Error sending email', error: err.message });
  }
};
