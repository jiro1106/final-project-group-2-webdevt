import React from "react";
import '../css/Navbar.css';
import xtraIcon from '../assets/xtraIcon.png'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="navbar">
            <img src={xtraIcon} alt="" className="logo" />
            <p>XTRAVAGALA</p>
            <div className="right-section">
                <ul>
                    <li><Link to='/' className='hmtbn'>Home</Link></li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <div className="drop-down">
                    <button className="button-87">Log In</button>
                    <div className="drop-content">
                        <Link to="/user">
                            <div>User</div>
                        </Link>
                        <Link to="/event-host">
                            <div>Event Host</div>
                        </Link>
                        <Link to="/admin">
                            <div>Admin</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
