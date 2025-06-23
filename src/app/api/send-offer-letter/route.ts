// src/app/api/send-offer-letter/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Add content-type check
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    // More robust JSON parsing
    let body;
    try {
      const text = await request.text();
      console.log('Raw request body:', text.substring(0, 200)); // Log first 200 chars for debugging
      body = JSON.parse(text);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { email, fullName, pdfBase64, instituteName, courseTitle } = body;

    // Validate required fields
    if (!email || !fullName || !pdfBase64) {
      return NextResponse.json(
        { error: 'Missing required fields: email, fullName, and pdfBase64 are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Extract and validate PDF data
    let base64Data;
    if (pdfBase64.startsWith('data:application/pdf;base64,')) {
      base64Data = pdfBase64.split(';base64,').pop();
    } else if (pdfBase64.startsWith('data:')) {
      // Handle other data URI formats
      base64Data = pdfBase64.split(',').pop();
    } else {
      // Assume it's already base64 encoded
      base64Data = pdfBase64;
    }

    if (!base64Data) {
      return NextResponse.json(
        { error: 'Invalid PDF data format' },
        { status: 400 }
      );
    }

    // Validate base64 format
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
    if (!base64Regex.test(base64Data)) {
      return NextResponse.json(
        { error: 'Invalid base64 PDF data' },
        { status: 400 }
      );
    }
    
    let pdfBuffer;
    try {
      pdfBuffer = Buffer.from(base64Data, 'base64');
    } catch (bufferError) {
      console.error('Buffer creation error:', bufferError);
      return NextResponse.json(
        { error: 'Failed to process PDF data' },
        { status: 400 }
      );
    }

    // Validate environment variables
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM_EMAIL'];
    const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Configure email transporter with better error handling
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Add timeout settings
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,   // 30 seconds
      socketTimeout: 60000,     // 60 seconds
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Email template
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 1000px; margin: 0 auto;">
        <h2>Course Confirmation Letter</h2>
        <p>Dear ${fullName},</p>
        <p>Congratulations on your enrollment in the Summer Internship Program for ${courseTitle || 'the selected course'} at LinuxWorld Informatics Pvt. Ltd.</p>
        <p>Please find attached your official confirmation letter for your records.</p>
        <p>If you have any questions, please feel free to contact us.</p>
        <p>Best Regards,<br>LinuxWorld Informatics Pvt. Ltd.</p>
      </div>
    `;

    // Generate safe filename
    const safeFileName = `confirmation-letter-${fullName
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()}.pdf`;

    // Send email with attachment
    const info = await transporter.sendMail({
      from: `"LinuxWorld Informatics" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: `Course Confirmation Letter${courseTitle ? ` - ${courseTitle}` : ''}`,
      html: emailContent,
      attachments: [
        {
          filename: safeFileName,
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
    
    // More detailed error response
    let errorMessage = 'Failed to send email';
    let statusCode = 500;
    
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication failed';
      } else if (error.message.includes('ECONNECTION')) {
        errorMessage = 'Failed to connect to email server';
      } else if (error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Email server timeout';
      } else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : error) : undefined
      },
      { status: statusCode }
    );
  }
}