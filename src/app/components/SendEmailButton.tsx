'use client';
import React from 'react';
import { sendEmail } from '../actions/emails/sendEmail';
import EmailTemplate from '@/emails/test-email-template';

interface SendEmailButtonProps {
    emailTo: string;
}

const SendEmailButton = ({emailTo}: SendEmailButtonProps) => {
    const handleSubmit = async () => {
        await sendEmail({
            from: "Modern Web Development <no-reply@modernwebdevelopment.net>",
            to: [emailTo],
            subject: "You Clicked It!",
            react: EmailTemplate({ firstName: "John" })
        });
    }

    return (
        <button onClick={handleSubmit} className="bg-slate-200 p-2 rounded-xl">
            Send Email
        </button>
    );
};

export default SendEmailButton;
