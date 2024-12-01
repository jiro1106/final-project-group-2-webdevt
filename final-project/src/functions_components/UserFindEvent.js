import React, { useState, useEffect } from 'react';
import '../functions_css/UserFindEvent.css';
import UserMenu from './UserMenu';

const UserFindEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const currentUserEmail = localStorage.getItem('currentUser  Email');
    const approvedEvents = JSON.parse(localStorage.getItem('approvedEvents')) || [];
    const userApprovedEvents = approvedEvents.filter(
      (event) => event.accountId === currentUserEmail || event.createdBy.email === currentUserEmail
    );

    setEvents(userApprovedEvents); // Only set approved events for the current user
  }, []);

  const handleRegister = (eventTitle) => {
    alert(`You have registered for the event: ${eventTitle}`);
  };

  return (
    <div className="user-findEvent">
      <header className="App-header">
        <UserMenu />
      </header>
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
                <button className="event-card-button" onClick={() => handleRegister(event.title)}>
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
