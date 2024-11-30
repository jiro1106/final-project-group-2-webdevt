import React, { useState } from 'react';
import '../css/EventHostLogin.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EventHostLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setTimeout(() => setError(''), 2000);
            return;
        }

        const accounts = JSON.parse(localStorage.getItem('eventHostAccounts')) || [];
        const account = accounts.find(acc => acc.email === email && acc.password === password);

        if (account) {
            localStorage.setItem('currentUser Email', account.email); // Store the email of the logged-in user
            navigate('/addEvent');
        } else {
            setError('Invalid email or password. Please try again.');
        }
        setTimeout(() => setError(''), 2000);
    };

    return (
        <div className="host-login">
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h1>EVENT HOST LOGIN</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <MdEmail className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='Password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <RiLockPasswordFill className='icon' />
                    </div>

                    <div className='forgot'>
                        <a href='#/'>Forgot Password?</a>
                    </div>

                    {error && <p className='error-message'>{error}</p>}
                    <button type='submit' className='login'>Login</button>
                    
                    <div className='google'>
                        <button type='button' href='#gmail.com'>
                            <FcGoogle className='googleicon' />
                            Continue with Google
                        </button>
                    </div>

                    <div className='register-link'>
                        <p>Don't have an account? </p>
                        <Link to="/CreateForm">
                            <button type='button' className='create-acc'>Create New</button>
                        </Link>
                    </div>

                    <div className='host-click-login'>
                        <p>Want to login as user? <a href='/user'>Click here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventHostLogin;