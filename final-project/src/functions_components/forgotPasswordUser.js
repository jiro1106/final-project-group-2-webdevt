// src/components/ForgotPasswordUser .js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../functions_css/forgotPasswordUser.css';

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
        <div className='forgot-password-user'>
            <div className='wrapper-forgot-password-user'>
            <h1 className='wrapper-forgot-password-user'>Reset Password for User</h1>
            <form onSubmit={handleSubmit}>
                <input className='wrapper-forgot-password-user'
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input className='wrapper-forgot-password-user'
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button className='wrapper-forgot-password-user' type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPasswordUser ;