import React, { useState, useEffect } from 'react';
import '../functions_css/UserViewUpcomingEvent.css';
import UserMenu from './UserMenu';

const UserViewUpcomingEvents = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    // Fetch registered events from local storage
    const events = JSON.parse(localStorage.getItem('registeredEvents')) || [];
    setRegisteredEvents(events);
  }, [registeredEvents]); // Dependency array to re-run when registeredEvents changes

  return (
    <div className="user-upcoming-events">
      <header className="App-header">
        <UserMenu />
      </header>
      <h2 className="user-upcoming-events-h2">My Upcoming Events</h2>
      <div className="event-cards-container">
        {registeredEvents.length === 0 ? (
          <p>You have not registered for any events yet.</p>
        ) : (
          registeredEvents.map((event, index) => (
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
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserViewUpcomingEvents;
