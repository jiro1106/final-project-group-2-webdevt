import React, { useState } from 'react';
import '../css/LoginForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate(); 


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
        setTimeout(() => setEmailError(false), 3000)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || emailError) {
            alert('Please fix the errors before submitting.');
            return;
        }
        alert('Form submitted successfully!');
        navigate('/user-menu'); 
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
                        {emailError && <span className="error">{emailError}</span>}
                    </div>
                    <div className='input-box'>
                        <input type='Password' placeholder='Password' required />
                        <RiLockPasswordFill className='icon' />
                    </div>

                    <div className='forgot'>
                        <a href='#/'>Forgot Password?</a>
                    </div>

                    <button type='submit' className='login'>Log-in to account</button>
                    <div className='google'>
                        <button type='button'>
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

                    <div className='user-click-login'>
                        <p>Want to host events? <a href='/event-host'>Click here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
