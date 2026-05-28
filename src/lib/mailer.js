import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to 'outlook' or use SMTP host/port
  auth: {
    user: process.env.SMTP_USER, // Add your email in .env.local
    pass: process.env.SMTP_PASS, // Add your app password in .env.local
  },
});

export const sendEmail = async ({ to, cc, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Thiran Website" <${process.env.SMTP_USER}>`,
      to,
      cc,
      subject,
      text,
      html,
    });
    return { success: true, info };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
};
