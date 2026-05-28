import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, org, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <h2>New Partnership / Investment Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Organization:</strong> ${org || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    const result = await sendEmail({
      to: 'ceothiran@outlook.com',
      cc: 'coothiran@outlook.com',
      subject: `[Partnership Inquiry] ${name} from ${email}`,
      html: htmlContent,
    });

    if (result.success) {
      return NextResponse.json({ message: 'Inquiry sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
