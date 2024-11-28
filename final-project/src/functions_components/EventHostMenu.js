import React from 'react';
import '../functions_css/EventHostMenu.css';
import { useNavigate } from 'react-router-dom';

const EventHostMenu = () => {
    
    const navigate = useNavigate();

    const goToAdd = () => navigate('/addEvent');
    const goToManage = () => navigate('/manageEvent');

    return (
        <div className="host-menu">
            <h1 className="eventhost-menu-h1">Event Host Menu</h1>
            <div className="host-buttons">
                <button onClick={goToAdd} className="addEvent-btn">Add Event</button>
                <button onClick={goToManage} className="manageEvent-btn">Manage Events</button>
            </div>
        </div>
    );

    
};

export default EventHostMenu;
