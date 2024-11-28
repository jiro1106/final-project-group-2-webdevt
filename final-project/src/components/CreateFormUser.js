import React from 'react';
import '../css/CreateFormUser.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";

const CreateFormUser = () => {
    return (
        <div className='wrapper-create-user'>
            <form action=''>
                <h1>CREATE NEW USER ACCOUNT</h1>
                
                <div className='input-box-create-user'>
                    <input type='text' placeholder='First Name' required />
                    <FaUser  className='icon-create-user' />
                </div>
                
                <div className='input-box-create-user'>
                    <input type='text' placeholder='Last Name' required />
                    <FaUser  className='icon-create-user' />
                </div>

                <div className='input-box-create-user'>
                    <input type='text' placeholder='Email' required />
                    <MdEmail className='icon-create-user' />
                </div>
                <div className='input-box-create-user'>
                    <input type='password' placeholder='Password' required />
                    <RiLockPasswordFill className='icon-create-user' />
                </div>
                <div className='input-box-create-user'>
                    <input type='password' placeholder='Confirm password' required />
                    <RiLockPasswordFill className='icon-create-user' />
                </div>

                <div className='checkbox-18above-create-user'>
                    <label>
                    <input type='checkbox'  required />
                    above 18 years old
                    </label>
                </div>
                <div className='checkbox-terms-create-user'>
                    <label>
                    <input type='checkbox' required />
                    agree to terms and conditions
                    </label>
                </div>

                <button type='submit' className='create-account-form-user'>Create account</button>
            </form>
        </div>
    )
}

export default CreateFormUser;