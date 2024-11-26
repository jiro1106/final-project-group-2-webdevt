import React, { useState } from "react";
import "../styles/EventManagement.css";

const EventManagement = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Event A", date: "2024-11-25", attendees: 100 },
    { id: 2, name: "Event B", date: "2024-12-01", attendees: 50 },
  ]);

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const cancelEvent = (id) => {
    alert(`Event ${id} canceled.`);
  };

  const createEvent = () => {
    const newEvent = { id: Date.now(), name: "New Event", date: "2024-12-10", attendees: 0 };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="event-management">
      <h2>Event Management</h2>
      <button onClick={createEvent}>Create New Event</button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.date} - {event.attendees} attendees
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
            <button onClick={() => cancelEvent(event.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
