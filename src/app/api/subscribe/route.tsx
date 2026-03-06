// app/api/subscribe/route.tsx 

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const smtpUser = process.env.SMTP_USER || "linuxworld.certificates@gmail.com";
const smtpPass = process.env.EMAIL_PASS || "vkaa fbfm qdfk whws";

export async function POST(req: Request) {
    try { 
        const {email} = await req.json();

        //Create transporter 
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: smtpUser, 
                pass:smtpPass,
            },
        });

        // Email Options 
        const mailOptions = {
            from: smtpUser, 
            to: 'chandak.preeti@gmail.com',
            subject: 'Hash13 Newsletter Data Received',
            text: `New subscription request from: ${email}`,
            html: `
            <h2>New Newsletter Subscription</h2>
            <p> A new user has subscribed to the newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            `,
        };
        //Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({success: true, message: 'Subscription successful'});
    } catch (error){
                console.error('Subscription error:', error);
                return NextResponse.json(
                    {success: false, message: 'Failed to subscribe'}, 
                    {status: 500}
                );
            }
        

    }
