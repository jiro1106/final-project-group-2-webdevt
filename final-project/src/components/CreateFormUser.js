import React, { useState } from 'react';
import '../css/CreateFormUser.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateFormUser  = () => {

    const navigate = useNavigate(); 
    const [profilePicture, setProfilePicture] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            setTimeout(() => setError(''), 2000);
            return;
        }

        if (profilePicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
            console.log(reader.result);
        };
        reader.readAsDataURL(profilePicture);
        }

        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const existingAccount = accounts.find(acc => acc.email === formData.email);

        if (existingAccount) {
            setError('An account with this email already exists. Please use a different email.');
            setTimeout(() => setError(''), 2000);
            return;
        }

        accounts.push({ email: formData.email, password: formData.password });
        localStorage.setItem('userAccounts', JSON.stringify(accounts));
        alert('Account created successfully!');
        navigate('/user');
    };

    return (
        <div className="user-form-page">
        <div className='wrapper-create-user'>
            <form onSubmit={handleSubmit}>
                <h1>CREATE NEW USER ACCOUNT</h1>
                
                <div className='input-box-create-user'>
                    <input type='text' name='firstName' placeholder='First Name' onChange={handleChange} required />
                    <FaUser  className='icon-create-user' />
                </div>
                
                <div className='input-box-create-user'>
                    <input type='text' name='lastName' placeholder='Last Name' onChange={handleChange} required />
                    <FaUser  className='icon-create-user' />
                </div>

                <div className='input-box-create-user'>
                    <input type='text' name='email' placeholder='Email' onChange={handleChange} required />
                    <MdEmail className='icon-create-user' />
                </div>
                <div className='input-box-create-user'>
                    <input type='password' name='password' placeholder='Password' onChange={handleChange} required />
                    <RiLockPasswordFill className='icon-create-user' />
                </div>
                <div className='input-box-create-user'>
                    <input type='password' name='confirmPassword' placeholder='Confirm password' onChange={handleChange} required />
                    <RiLockPasswordFill className='icon-create-user' />
                </div>

                {error && <p className='error-message'>{error}</p>}


                <div className='profile-picture'>
                <label className='icon-create-user'>Upload profile picture (optional)</label>
                    <input
                        type='file' 
                        accept='image/*' 
                        onChange={(e) => setProfilePicture(e.target.files[0])} 
                    />
                </div>

                <div className='checkbox-18above-create-user'>
                    <label>
                    <input type='checkbox' required />
                    18 years old and Above
                    </label>
                </div>
                <div className='checkbox-terms-create-user'>
                    <label>
                    <input type='checkbox' required />
                    Agree to terms and conditions
                    </label>
                </div>

                <button type='submit' className='create-account-form-user'>Create account</button>
            </form>
        </div>
        </div>
    );
}

export default CreateFormUser ;