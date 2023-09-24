"use client";
import React, { useState } from 'react'
import { changePassword } from '../actions/users/changePassword';

interface ChangePasswordFormProps {
    resetPasswordToken: string;
}

const ChangePasswordForm = ({resetPasswordToken}: ChangePasswordFormProps) => {

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [message, setMessage] = useState<string>("");

    const handleSubmit = async () => {
        if(password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        const message = await changePassword(resetPasswordToken, password);

        setMessage(message);
    }

  return (
    <div>
        <h1>Change Password</h1>
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>
            Change Password
        </button>
        <p>{message}</p>
    </div>
  )
}

export default ChangePasswordForm