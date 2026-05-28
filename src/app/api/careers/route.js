import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, role, skills, why } = body;

    if (!name || !email || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <h2>New Team Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Role Applying For:</strong> ${role}</p>
      <p><strong>Core Skills:</strong> ${skills || 'N/A'}</p>
      <p><strong>Why Thiran:</strong><br/>${why || 'N/A'}</p>
    `;

    const result = await sendEmail({
      to: 'hrheadthiran@outlook.com',
      subject: `[Job Application] ${name} applied for ${role}`,
      html: htmlContent,
    });

    if (result.success) {
      return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
