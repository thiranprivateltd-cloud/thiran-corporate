import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <h2>New General Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    const result = await sendEmail({
      to: 'thiranprivateltd@gmail.com',
      subject: `[General Enquiry] ${subject || 'New Message'} from ${name}`,
      html: htmlContent,
    });

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
