import * as React from 'react';

interface VerifyEmailEmailTemplateProps {
    email: string;
    emailVerificationToken: string;
}

export const VerifyEmailEmailTemplate: React.FC<Readonly<VerifyEmailEmailTemplateProps>> = ({ email, emailVerificationToken }) => (
    <div>
        <h1>Verify email for <b>{email}</b></h1>
        <p>
            To verify your email, click on this link:
        </p>
        <a href={`http://localhost:3000/auth/verify-email?token=${emailVerificationToken}`}>
            Click here to verify your email
        </a>
    </div>
);
