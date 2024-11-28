import React, { useState } from 'react';
import '../css/CreateForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";

const CreateForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            // Save to localStorage
            const accounts = JSON.parse(localStorage.getItem('eventHostAccounts')) || [];
            accounts.push({ email: formData.email, password: formData.password });
            localStorage.setItem('eventHostAccounts', JSON.stringify(accounts));
            alert('Account created successfully!');
            // Optionally redirect to login page
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div className='wrapper-create'>
            <form onSubmit={handleSubmit}>
                <h1>CREATE NEW EVENT-HOST ACCOUNT</h1>
                
                <div className='input-box-create'>
                    <input type='text' name='firstName' placeholder='First Name' onChange={handleChange} required />
                    <FaUser  className='icon-create' />
                </div>
                
                <div className='input-box-create'>
                    <input type='text' name='lastName' placeholder='Last Name' onChange={handleChange} required />
                    <FaUser  className='icon-create' />
                </div>

                <div className='input-box-create'>
                    <input type='text' name='email' placeholder='Email' onChange={handleChange} required />
                    <MdEmail className='icon-create' />
                </div>
                <div className='input-box-create'>
                    <input type='password' name='password' placeholder='Password' onChange={handleChange} required />
                    <RiLockPasswordFill className='icon-create' />
                </div>
                <div className='input-box-create'>
                    <input type='password' name='confirmPassword' placeholder='Confirm password' onChange={handleChange} required />
                    <RiLockPasswordFill className='icon-create' />
                </div>

                <div className='checkbox-18above-create'>
                    <label>
                    <input type='checkbox'  required />
                    above 18 years old
                    </label>
                </div>
                <div className='checkbox-terms-create'>
                    <label>
                    <input type='checkbox' required />
                    agree to terms and conditions
                    </label>
                </div>

                <button type='submit' className='create-account-form'>Create account</button>
            </form>
        </div>
    );
};

export default CreateForm;