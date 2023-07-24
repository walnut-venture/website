import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import z from "zod";

// validate data with zod
const validateData = (data: any) => {
  const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    message: z.string().min(10).max(1000)
  });

  return schema.safeParse(data);
};

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (validateData(data)) {
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
        from: (data as any).email,
        to: process.env.EMAIL_USERNAME,
        subject: "Message from: " + (data as any).name,
        text: "Phone: " + (data as any).phone + "\n" + (data as any).message
      };

      const emailRes = await transporter.sendMail(mailOptions);

      return NextResponse.json({ success: true, message: 'Email sent', data: emailRes });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid data' });
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, message: 'Error sending email', error: err.message });
  }
};
