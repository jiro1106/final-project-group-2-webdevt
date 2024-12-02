// src/components/ForgotPasswordUser .js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordUser  = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const account = accounts.find(acc => acc.email === email);

        if (account) {
            account.password = newPassword; // Update the password
            localStorage.setItem('userAccounts', JSON.stringify(accounts));
            setMessage('Password updated successfully!');
            setTimeout(() => navigate('/user'), 2000); // Redirect to login after 2 seconds
        } else {
            setMessage('Email not found.');
        }
    };

    return (
        <div>
            <h1>Reset Password for User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPasswordUser ;