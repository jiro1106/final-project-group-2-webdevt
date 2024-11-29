import React, { useState } from 'react';
import '../css/LoginForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword (e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setTimeout(() => setError(''), 2000);
            return;
        }

        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const account = accounts.find(acc => acc.email === email && acc.password === password);

        if (account) {
            navigate('/user-menu');
        } else {
            setError('Invalid email or password. Please try again.');
            setTimeout(() => setError(''), 2000);
        }
    };

    return (
        <div className="user-login">
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>USER LOGIN</h1>
                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <MdEmail className='icon' />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <RiLockPasswordFill className='icon' />
                    </div>

                    <div className='forgot'>
                        <a href='#/'>Forgot Password?</a>
                    </div>

                    {error && <p className='error-message'>{error}</p>}
                    <button type='submit' className='login'>Log-in to account</button>
                    <div className='google'>
                        <button type='button'>
                            <FcGoogle className='googleicon' />
                            Continue with Google
                        </button>
                    </div>

                    <div className='register-link'>
                        <p>Don't have an account? </p>
                        <Link to="/CreateFormUser ">
                            <button type='button' className='create-acc'>Create New</button>
                        </Link>
                    </div>

                    <div className='user-click-login'>
                        <p>Want to host events? <a href='/event-host'>Click here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;