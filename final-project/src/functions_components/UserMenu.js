import React, { useState, useEffect } from 'react';
import '../functions_css/UserMenu.css';
import xtraIcon from '../assets/xtraIcon.png';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profilePicture, setprofilePicture] = useState('');

    useEffect(() => {
        const currentUserEmail = localStorage.getItem('currentUser Email'); // Ensure the key matches
        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const loggedInUser  = accounts.find(acc => acc.email === currentUserEmail); // Use the same key

        if (loggedInUser ) {
            setFullName(`${loggedInUser.firstName} ${loggedInUser.lastName}`);
            setprofilePicture(loggedInUser.profilePicture);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser Email'); // Clear the email on logout
        navigate('/'); // Redirect to the home page or login page after logout
    };

    const goToFindEvent = () => navigate('/findEvent');
    const goToViewUpcomingEvent = () => navigate('/viewUpcomingEvent');

    return (
        <div className="user-menu">
            <div className="user-navbar">
                <img src={xtraIcon} alt="" className="logo" />
                <p>XTRAVAGALA</p>
                <div className="user-menu-functions">
                    <ul className="user-menu-ul">
                        <li onClick={goToFindEvent} className="user-menu-li">Find Events</li>
                        <li onClick={goToViewUpcomingEvent} className="user-menu-li">View My Upcoming Events</li>
                    </ul>
                </div>
                <div className="right-section-user">
                    <div className="account-info-user" onClick={() => setDropdownOpen(prev => !prev)}>
                        <span>{fullName || "Guest"}</span>
                        {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture-menu-user" />}
                    </div>
                    {dropdownOpen && (
                        <div className="drop-content-user-menu">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserMenu;