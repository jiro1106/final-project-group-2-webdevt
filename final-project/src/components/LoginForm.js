import React, { useState } from 'react';
import '../css/LoginForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google'
import xtraIcon from '../assets/xtraIcon.png'

const LoginForm = () => {

    const onSuccess = (response) => {
        console.log('Login Success: ', response.profileObj);
    };

    const onFailure = (response) => {
        console.log('Login Failed: ', response);
    };

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

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Check if email and password fields are not empty
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const account = accounts.find(acc => acc.email === email && acc.password === password);

        if (account) {
            // Store the email in localStorage
            localStorage.setItem('currentUser Email', account.email);
            navigate('/findEvent'); // Redirect to the desired page
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="user-login">
            <div className='wrapper'>
                <Link to="/" className="link-logo">
                <img src={xtraIcon} alt="" className="login-logo" />
                </Link>
                <form onSubmit={handleLogin}>
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
                     <GoogleOAuthProvider clientId='340850980431-0kiucffqabttr7l64uhu19e5750qdaj0.apps.googleusercontent.com'>
                        <GoogleLogin
                             buttonText="Continue with Google"
                             onSuccess={onSuccess}
                             onFailure={onFailure}
                             cookiePolicy={'single_host_origin'} 
                            />
                    </GoogleOAuthProvider>
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