import React, { useState, useEffect } from "react";
import "../css/EventManagement.css";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [editedEventIndex, setEditedEventIndex] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch the approved events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('approvedEvents')) || [];
    setEvents(storedEvents); // Set the events from localStorage
  }, []);

  const handleInputChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSaveEvent = () => {
    const validationErrors = {};
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const updatedEvents = [...events];
      updatedEvents[editedEventIndex] = { ...formData };

      // Update both local state and storage
      setEvents(updatedEvents);
      localStorage.setItem('approvedEvents', JSON.stringify(updatedEvents));
      
      setEditedEventIndex(null);
      setFormData({});
    }
  };

  const handleEditEvent = (index) => {
    setEditedEventIndex(index);
    setFormData(events[index]);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);

    // Update both local state and storage
    setEvents(updatedEvents);
    localStorage.setItem('approvedEvents', JSON.stringify(updatedEvents));
  };

  return (
    <div className="event-management">
      <h2>Event Management</h2>
      <button onClick={() => { /* Functionality to create event can go here */ }}>Create New Event</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
            <th>End Time</th>
            <th>Description</th>
            <th>Location</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.startDate}</td>
              <td>{event.startTime}</td>
              <td>{event.endDate}</td>
              <td>{event.endTime}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{event.price}</td>
              <td>{event.photo && <img src={event.photo} alt="Event" />}</td>
              <td>
                <button onClick={() => handleEditEvent(index)}>Edit</button>
                <button onClick={() => handleDeleteEvent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editedEventIndex !== null && (
        <div className="edit-form">
          <h3>Edit Event</h3>
          <input
            type="text"
            placeholder="Event Title"
            value={formData.title || ""}
            onChange={(e) => handleInputChange(e, "title")}
          />
          <input
            type="date"
            value={formData.startDate || ""}
            onChange={(e) => handleInputChange(e, "startDate")}
          />
          <input
            type="time"
            value={formData.startTime || ""}
            onChange={(e) => handleInputChange(e, "startTime")}
          />
          <input
            type="date"
            value={formData.endDate || ""}
            onChange={(e) => handleInputChange(e, "endDate")}
          />
          <input
            type="time"
            value={formData.endTime || ""}
            onChange={(e) => handleInputChange(e, "endTime")}
          />
          <textarea
            placeholder="Event Description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, "description")}
          />
          <input
            type="text"
            placeholder="Location"
            value={formData.location || ""}
            onChange={(e) => handleInputChange(e, "location")}
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price || ""}
            onChange={(e) => handleInputChange(e, "price")}
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={formData.photo || ""}
            onChange={(e) => handleInputChange(e, "photo")}
          />
          <button onClick={handleSaveEvent}>Save</button>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
