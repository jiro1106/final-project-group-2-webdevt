import React from 'react'
import '../functions_css/UserMenu.css';
import xtraIcon from '../assets/xtraIcon.png'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
 
const UserMenu = () => {

    const navigate = useNavigate();

    const goToFindEvent = () => navigate('/findEvent');
    const goToViewUpcomingEvent = () => navigate('/viewUpcomingEvent');
    const goToPrevEvent = () => navigate('/viewPrevEvent');
    const goToUserAccDetails = () => navigate('/userAccDetails');
    

  return (
    <div className="user-menu">
        <div className="user-navbar">
            <img src={xtraIcon} alt="" className="logo" />
            <p>XTRAVAGALA</p>
            <div className="user-menu-functions">
                <ul className="user-menu-ul">
                <li onClick ={goToFindEvent} className="user-menu-li">Find Events</li>
                <li onClick ={goToViewUpcomingEvent} className="user-menu-li">View My Upcoming Events</li>
                <li onClick ={goToPrevEvent} className="user-menu-li">View Previous Events</li>
                <li onClick ={goToUserAccDetails} className="user-menu-li">Account Details</li>
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
  )
}

export default UserMenu