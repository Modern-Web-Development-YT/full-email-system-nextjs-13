import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate = ({ firstName }: EmailTemplateProps) => (
    <div>
        <h1>Hey, {firstName}!</h1>
    </div>
);

export default EmailTemplate;
