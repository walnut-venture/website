import { NextResponse } from "next/server";
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
    const reqData = await req.json();

    if (validateData(reqData)) {
      let data = {
        sender: { name: reqData.name, email: reqData.email },
        to: [{ email: "julian.verocai@verocaiconsulting.com" }],
        subject: "Message from: " + reqData.name,
        textContent: `Phone number: ${reqData.phone} \n${reqData.message}`
      };

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "accept": "application/json",
          'api-key': process.env.NEXT_PUBLIC_BREVO_KEY!
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Response was not ok');
      }

      const responseData = await response.json();

      return NextResponse.json({ success: true, message: 'Email sent', data: responseData });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid data' });
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, message: 'Error sending email', error: err.message });
  }
};
