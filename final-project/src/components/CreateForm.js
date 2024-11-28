import React from 'react';
import '../css/CreateForm.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser  } from "react-icons/fa";

const CreateForm = () => {
    return (
        <div className='wrapper-create'>
            <form action=''>
                <h1>CREATE NEW EVENT-HOST ACCOUNT</h1>
                
                <div className='input-box-create'>
                    <input type='text' placeholder='First Name' required />
                    <FaUser  className='icon-create' />
                </div>
                
                <div className='input-box-create'>
                    <input type='text' placeholder='Last Name' required />
                    <FaUser  className='icon-create' />
                </div>

                <div className='input-box-create'>
                    <input type='text' placeholder='Email' required />
                    <MdEmail className='icon-create' />
                </div>
                <div className='input-box-create'>
                    <input type='password' placeholder='Password' required />
                    <RiLockPasswordFill className='icon-create' />
                </div>
                <div className='input-box-create'>
                    <input type='password' placeholder='Confirm password' required />
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
    )
}

export default CreateForm;