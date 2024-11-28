import React from 'react';
import '../css/EventHostLogin.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from 'react-router-dom';

const EventHostLogin = () => {

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add any validation logic here if needed
        navigate('/event-host-menu'); // Navigate to EventHostMenu
    };  


    return (
        <div className="host-login">
        <div className='wrapper'>
            <form onSubmit={handleLogin}>
            
                <h1>EVENT HOST LOGIN</h1>
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
                    <button type='button' className='create-acc'>Create New</button>
                </div>

                <div className='host-click-login'>
                    <p>Want to login as user? <a href='#/'>Click here</a></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default EventHostLogin;