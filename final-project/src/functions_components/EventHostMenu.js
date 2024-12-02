import React, { useState, useEffect } from 'react';
import '../functions_css/EventHostMenu.css';
import { useNavigate } from 'react-router-dom';
import xtraIcon from '../assets/xtraIcon.png';

const EventHostMenu = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [idPicture, setIdPicture] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const currentUserEmail = localStorage.getItem('currentUser Email');
        const accounts = JSON.parse(localStorage.getItem('eventHostAccounts')) || [];
        const currentAccount = accounts.find(acc => acc.email === currentUserEmail);

        if (currentAccount) {
            setFullName(`${currentAccount.firstName} ${currentAccount.lastName}`);
            setIdPicture(currentAccount.idPicture);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser Email');
        navigate('/event-host');
    };

    return (
        <div className="host-menu">
            <div className="host-navbar">
                <img src={xtraIcon} alt="" className="logo" />
                <p>XTRAVAGALA</p>
                <div className="host-menu-functions">
                    <ul className="host-menu-ul">
                        <li onClick={() => navigate('/addEvent')} className="host-menu-li">Add Event</li>
                        <li onClick={() => navigate('/manageEvent')} className="host-menu-li">Manage Events</li>
                    </ul>
                </div>
                <div className="right-section">
                    <div className="account-info" onClick={() => setDropdownOpen(prev => !prev)}>
                        <span>{fullName || "Guest"}</span>
                        {idPicture && <img src={idPicture} alt="Profile" className="profile-picture-menu" />}
                    </div>
                    {dropdownOpen && (
                        <div className="drop-content-event-host">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventHostMenu;