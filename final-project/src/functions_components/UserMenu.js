import React from 'react'
import '../functions_css/UserMenu.css';
import {useNavigate} from 'react-router-dom';

const UserMenu = () => {

    const navigate = useNavigate();

    const goToFindEvent = () => navigate('/findEvent');
    const goToViewUpcomingEvent = () => navigate('/viewUpcomingEvent');
    const goToPrevEvent = () => navigate('/viewPrevEvent');
    const goToUserAccDetails = () => navigate('/userAccDetails');
    

  return (
    <div className="user-menu">
        <h1 className="user-menu-h1">User Menu</h1>
        <div className="user-buttons">
            <button onClick ={goToFindEvent} className="findEvent-btn">Find Events</button>
            <button onClick ={goToViewUpcomingEvent} className="viewUpcomingEvent-btn">View My Upcoming Events</button>
            <button onClick ={goToPrevEvent} className="viewPrevEvent-btn">View Previous Events</button>
            <button onClick ={goToUserAccDetails} className="userAccDetails-btn">Account Details</button>
        </div>
    </div>
  )
}

export default UserMenu