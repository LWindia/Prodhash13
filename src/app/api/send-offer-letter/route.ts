// src/app/api/send-offer-letter/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, fullName, pdfBase64, instituteName, courseTitle } = body;

    if (!email || !fullName || !pdfBase64) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract the base64 PDF data correctly from the data URI
    // The data URI from jsPDF will be like: data:application/pdf;base64,JVBERi0xLjcKJ...
    const base64Data = pdfBase64.split(';base64,').pop();
    if (!base64Data) {
      return NextResponse.json(
        { error: 'Invalid PDF data' },
        { status: 400 }
      );
    }
    
    const pdfBuffer = Buffer.from(base64Data, 'base64');

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email template
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 1000px; margin: 0 auto;">
        <h2>Course Confirmation Letter</h2>
        <p>Dear ${fullName},</p>
        <p>Congratulations on your enrollment in the Summer Internship Program for ${courseTitle} at LinuxWorld Informatics Pvt. Ltd.</p>
        <p>Please find attached your official confirmation letter for your records.</p>
        <p>If you have any questions, please feel free to contact us.</p>
        <p>Best Regards,<br>LinuxWorld Informatics Pvt. Ltd.</p>
      </div>
    `;

    // Send email with attachment
    const info = await transporter.sendMail({
      from: `"LinuxWorld Informatics" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: `Course Confirmation Letter - ${courseTitle}`,
      html: emailContent,
      attachments: [
        {
          filename: `confirmation-letter-${fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: `Email sent successfully to ${email}` 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}