import React, { useState } from 'react';
import '../css/CreateForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

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

                // Save the account data along with the image and names
                accounts.push({ 
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email, 
                    password: formData.password, 
                    idPicture: reader.result // Save the image data
                });
                localStorage.setItem('eventHostAccounts', JSON.stringify(accounts));
                alert('Account created successfully!');
                navigate('/event-host');
            };
            reader.readAsDataURL(IdPicture); // Convert image to base64
        } else {
            const accounts = JSON.parse(localStorage.getItem('eventHostAccounts')) || [];
            const existingAccount = accounts.find(acc => acc.email === formData.email);

            if (existingAccount) {
                setError('An account with this email already exists. Please use a different email.');
                setTimeout(() => setError(''), 2000);
                return;
            }

            // Save the account data without the image
            accounts.push({ 
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email, 
                password: formData.password 
            });
            localStorage.setItem('eventHostAccounts', JSON.stringify(accounts));
            alert('Account created successfully!');
            navigate('/event-host');
        }
    };

    return (
        <div className='form-page'>
            <div className='wrapper-create'>
                <form onSubmit={handleSubmit}>
                    <h1>CREATE NEW EVENT HOST ACCOUNT</h1>
                    <h2 className="become-user-h2">Want to find events?<Link to="/CreateFormUser"><a className="host-shortcut-login"> Click here</a></Link></h2> 
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
                        <label className='icon-create'>Upload ID Picture:</label>
                        <input type='file' accept='image/*' onChange={(e) => setIdPicture(e.target.files[0])} required />
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
                    <p className="login-shortcut">Already have an account?<Link to="/event-host"><a className="link-login-shortcut"> Log In here</a></Link></p>
                    <button type='submit' className='create-account-form'>Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default CreateForm;