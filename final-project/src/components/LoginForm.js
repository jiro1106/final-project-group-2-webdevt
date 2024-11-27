import React from 'react';
import '../css/LoginForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



const LoginForm = () => {
    return (
        <div className="user-login">
        <div className='wrapper'>
            <form action="">
                <h1>USER LOGIN</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Email' required />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input type='Password' placeholder='Password' required />
                    <RiLockPasswordFill className='icon' />
                </div>

                <div className='forgot'>
                    <a href='#/'>Forgot Password?</a>
                </div>

                <button type='submit' className='login'>Log-in to account</button>
                <div className='google' >
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

                <div className='user-click-login'>
                    <p>Want to host events? <a href='#/'>Click here</a></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;