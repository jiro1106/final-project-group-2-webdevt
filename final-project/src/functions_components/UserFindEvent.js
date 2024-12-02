import React, { useState, useEffect } from 'react';
import '../functions_css/UserFindEvent.css';
import UserMenu from './UserMenu';
import userThumbnail from '../assets/userthumbnail.jpeg';

const UserFindEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const currentUserEmail = localStorage.getItem('currentUser Email');
    const approvedEvents = JSON.parse(localStorage.getItem('approvedEvents')) || [];
    const userApprovedEvents = approvedEvents.filter(
      (event) => event.accountId === currentUserEmail || event.createdBy.email === currentUserEmail
    );

    setEvents(userApprovedEvents); // Only set approved events for the current user
  }, []);

  const handleRegister = (event) => {
    // Retrieve the existing registered events from local storage
    const registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];

    // Check if the event is already registered
    const isAlreadyRegistered = registeredEvents.some((e) => e.title === event.title);

    if (isAlreadyRegistered) {
      alert(`You have already registered for the event: ${event.title}`);
      return;
    }

    // Add the new event to the registered events array
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
        <img src={userThumbnail} alt="thumbnail" className="user-thumbnail"/>
        <div className="overlay-items">
          <h1 className="user-openingtext">BOOK NOW</h1>
          <button className="btn-findEvent">FIND EVENTS</button>
        </div>
      </div>
      <h2 className="user-findEvent-h2">Manage Events</h2>
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
              />
              <div className="event-card-content">
                <h3 className="event-card-title">{event.title}</h3>
                <p>
                  <strong>Start:</strong> {event.startDate} {event.startTime}
                </p>
                <p>
                  <strong>End:</strong> {event.endDate} {event.endTime}
                </p>
                <button className="event-card-button" onClick={() => handleRegister(event)}>
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
