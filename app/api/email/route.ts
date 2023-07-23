import nodemailer from "nodemailer";

export async function POST(req, res) {
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
    from: body.email,
    to: process.env.EMAIL_USERNAME,
    subject: "Message from: " + body.name,
    text: "Phone: " + body.phone + "\n" + body.message
  };

  try {
    const emailRes = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent', data: emailRes });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error sending email', error: err.message });
  }
};
