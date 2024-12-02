import React, { useState } from 'react';
import '../css/CreateFormUser.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

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
    
        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const existingAccount = accounts.find(acc => acc.email === formData.email);
    
        if (existingAccount) {
            setError('An account with this email already exists. Please use a different email.');
            setTimeout(() => setError(''), 2000);
            return;
        }
    
        // Create the account object to store in local storage
        const newAccount = { 
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email, 
            password: formData.password 
        };
    
        // If there's a profile picture, handle it
        if (profilePicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAccount.profilePicture = reader.result; // Add profile picture to the account object
                accounts.push(newAccount);
                localStorage.setItem('userAccounts', JSON.stringify(accounts));
                alert('Account created successfully!');
                navigate('/user');
            };
            reader.readAsDataURL(profilePicture);
        } else {
            // If no profile picture, just store the account
            accounts.push(newAccount);
            localStorage.setItem('userAccounts', JSON.stringify(accounts));
            alert('Account created successfully!');
            navigate('/user');
        }
    };

    return (
        <div className="user-form-page">
            <div className='wrapper-create-user'>
                <form onSubmit={handleSubmit}>
                    <h1>CREATE NEW USER ACCOUNT</h1>
                    <h2 className="become-host-h2">Want to host?<Link to="/CreateForm"><a className="host-shortcut-login"> Click here</a></Link></h2> 
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
                    <p className="login-shortcut">Already have an account?<Link to="/user"><a className="link-login-shortcut"> Log In here</a></Link></p>
                    <button type='submit' className='create-account-form-user'>Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default CreateFormUser ;