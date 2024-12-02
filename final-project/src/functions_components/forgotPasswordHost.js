// src/components/ForgotPasswordHost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../functions_css/forgotPasswordHost.css';

const ForgotPasswordHost = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const accounts = JSON.parse(localStorage.getItem('eventHostAccounts')) || [];
        const account = accounts.find(acc => acc.email === email);

        if (account) {
            account.password = newPassword; // Update the password
            localStorage.setItem('eventHostAccounts', JSON.stringify(accounts));
            setMessage('Password updated successfully!');
            setTimeout(() => navigate('/event-host'), 2000); // Redirect to login after 2 seconds
        } else {
            setMessage('Email not found.');
        }
    };

    return (
        <div className='forgot-password-host'>
            <div className='wrapper-forgot-password'>
            <h1 className='wrapper-forgot-password'>Reset Password for Event Host</h1>
            <form onSubmit={handleSubmit}>
                <input className='wrapper-forgot-password'
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input className='wrapper-forgot-password'
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button className='wrapper-forgot-password' type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPasswordHost;