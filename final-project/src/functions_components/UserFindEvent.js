import React, { useState, useEffect } from 'react';
import '../functions_css/UserFindEvent.css';
import UserMenu from './UserMenu';
import userThumbnail from '../assets/userthumbnail.jpeg';
import { Link } from 'react-scroll';

const UserFindEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const approvedEvents = JSON.parse(localStorage.getItem('approvedEvents')) || [];
    setEvents(approvedEvents); // Display all approved events
  }, []);

  const handleRegister = (event) => {
    const registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    const isAlreadyRegistered = registeredEvents.some((e) => e.title === event.title);

    if (isAlreadyRegistered) {
      alert(`You have already registered for the event: ${event.title}`);
      return;
    }

    const updatedRegisteredEvents = [...registeredEvents, event];
    localStorage.setItem('registeredEvents', JSON.stringify(updatedRegisteredEvents));

    alert(`You have registered for the event: ${event.title}`);
  };

  return (
    <div className="user-findEvent">
      <header className="App-header">
        <UserMenu />
      </header>
      <div className="thumbnail-section">
        <img src={userThumbnail} alt="thumbnail" className="user-thumbnail" />
        <div className="overlay-items">
          <h1 className="user-openingtext">BOOK NOW</h1>
          <Link
            activeClass="active"
            to="event-cards-container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
            className="btn-findEvent"
          >
            FIND EVENT
          </Link>
        </div>
      </div>
      <div className="user-mainTitle">
        <h2 className="user-mainText1">FIND</h2>
        <h2 className="user-mainText2">EVENTS</h2>
      </div>
      <div className="event-cards-container">
        {events.length === 0 ? (
          <p>No events available at the moment.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="event-card">
              <img
                src={event.photos[0] || 'https://via.placeholder.com/150'}
                alt={event.title}
                className="event-card-image"
                onError={(e) => e.target.src = 'https://via.placeholder.com/150'} // Handle broken image links
              />
              <div className="event-card-content">
                <h3 className="event-card-title">{event.title}</h3>
                <p>
                  <strong>Start:</strong> {event.startDate} {event.startTime}
                </p>
                <p>
                  <strong>End:</strong> {event.endDate} {event.endTime}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Price:</strong> ${event.price}
                </p>
                <button
                  className="event-card-button"
                  onClick={() => handleRegister(event)}
                >
                  Register
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserFindEvent;
