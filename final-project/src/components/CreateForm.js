import React, { useState } from 'react';
import '../css/CreateForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
    const navigate = useNavigate();
    const [IdPicture, setIdPicture] = useState(null);
    
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

        if (IdPicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const accounts = JSON.parse(localStorage.getItem('eventHostAccounts')) || [];
                const existingAccount = accounts.find(acc => acc.email === formData.email);

                if (existingAccount) {
                    setError('An account with this email already exists. Please use a different email.');
                    setTimeout(() => setError(''), 2000);
                    return;
                }

                // Save the account data along with the image
                accounts.push({ 
                    email: formData.email, 
                    password: formData.password, 
                    idPicture: reader.result // Save the image data
                });
                localStorage.setItem('eventHostAccounts', JSON.stringify(accounts));
                alert('Account created successfully!');
                navigate('/event-host');
            };
            reader.readAsDataURL(IdPicture); // Convert image to base64
        }
    };

    return (
        <div className='form-page'>
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

                    {error && <p className='error-message'>{error}</p>}

                    <div className='ID-picture'>
                        <label className='icon-create-user'>Upload any valid ID picture (required)</label>
                        <input 
                            type='file' 
                            accept='image/*' 
                            onChange={(e) => setIdPicture(e.target.files[0])}
                            required
                        />
                    </div>

                    <div className='checkbox-18above-create'>
                        <label>
                            <input type='checkbox' required />
                            18 years old and Above
                        </label>
                    </div>
                    <div className='checkbox-terms-create'>
                        <label>
                            <input type='checkbox' required />
                            Agree to terms and conditions
                        </label>
                    </div>

                    <button type='submit' className='create-account-form'>Create account</button>
                </form>
            </div>
        </div>
    );
}

export default CreateForm;