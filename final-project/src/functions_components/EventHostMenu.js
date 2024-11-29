import React from 'react';
import '../functions_css/EventHostMenu.css';
import { useNavigate } from 'react-router-dom';
import xtraIcon from '../assets/xtraIcon.png'
import {Link} from 'react-router-dom';

const EventHostMenu = () => {
    
    const navigate = useNavigate();

    const goToAdd = () => navigate('/addEvent');
    const goToManage = () => navigate('/manageEvent');

    return (
        <div className="host-menu">
            <div className="host-navbar">
                <img src={xtraIcon} alt="" className="logo" />
                <p>XTRAVAGALA</p>
                <div className="host-menu-functions">
                    <ul className="host-menu-ul">
                    <li onClick={goToAdd} className="host-menu-li">Add Event</li>
                    <li onClick={goToManage} className="host-menu-li">Manage Events</li>
                    </ul>
                </div>
                <div className="right-section">
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
    </div>
    );

    
};

export default EventHostMenu;
