import React, { useState, useEffect } from 'react';
import '../functions_css/EventHostManageEvents.css'; // Import the external CSS

const EventHostManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [editedEventIndex, setEditedEventIndex] = useState(null); // Keep track of which event is being edited
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load events from localStorage when the component mounts
    const savedEvents = JSON.parse(localStorage.getItem('eventData')) || [];
    setEvents(savedEvents);
  }, []);

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  // Handle changes in the event details
  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  // Shared validation logic for start date, start time, end date, and end time
  const validateEvent = (data) => {
    const newErrors = {};
  
    // Ensure the date and time format is consistent
    const startDateTime = new Date(`${data.startDate}T${data.startTime}`);
    const endDateTime = new Date(`${data.endDate}T${data.endTime}`);
  
    // Title Validation (required)
    if (!data.title.trim()) {
      newErrors.title = 'Event title is required.';
    }
  
    // Start Date Validation
    if (!data.startDate) {
      newErrors.startDate = 'Start date is required.';
    } else if (startDateTime < new Date(today)) {
      newErrors.startDate = 'Start date cannot be in the past.';
    }
  
    // Start Time Validation (required)
    if (!data.startTime) {
      newErrors.startTime = 'Start time is required.';
    }
  
    // End Date Validation
    if (!data.endDate) {
      newErrors.endDate = 'End date is required.';
    } else if (endDateTime < new Date(today)) {
      newErrors.endDate = 'End date cannot be in the past.';
    }
  
    // End Time Validation (required)
    if (!data.endTime) {
      newErrors.endTime = 'End time is required.';
    }
  
    // Validate that the end date/time is after the start date/time
    if (endDateTime < startDateTime) {
      newErrors.endDate = 'End date and time cannot be before start date and time.';
    }
  
    // Description Validation (required)
    if (!data.description.trim()) {
      newErrors.description = 'Event description is required.';
    }
  
    // Location Validation (required)
    if (!data.location.trim()) {
      newErrors.location = 'Event location is required.';
    }
  
    // Price Validation (required)
    if (!data.price || isNaN(data.price) || parseFloat(data.price) < 0) {
      newErrors.price = 'Price must be a valid non-negative number.';
    }
  
    return newErrors;
  };

  const handleSaveEvent = () => {
    // Validate the edited event data
    const validationErrors = validateEvent(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Update the events list in localStorage if no validation errors
      const updatedEvents = [...events];
      updatedEvents[editedEventIndex] = { ...formData }; // Update the specific event being edited
      localStorage.setItem('eventData', JSON.stringify(updatedEvents));
      setEvents(updatedEvents); // Update the state with the new events list
      setEditedEventIndex(null); // Exit edit mode
      setFormData({}); // Clear form data
    }
  };

  const handleEditEvent = (index) => {
    setEditedEventIndex(index);
    setFormData(events[index]); // Pre-fill the form with the event details
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1); // Remove the event from the list
    localStorage.setItem('eventData', JSON.stringify(updatedEvents)); // Update localStorage
    setEvents(updatedEvents); // Update the state with the new events list
  };

  return (
    <div className="host-manageEvent">
      <h2 className="host-manage-h2">Manage Events</h2>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange(e, 'title')}
                  />
                ) : (
                  event.title
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="date"
                    value={formData.startDate || ''}
                    onChange={(e) => handleInputChange(e, 'startDate')}
                    min={today}
                  />
                ) : (
                  event.startDate
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="time"
                    value={formData.startTime || ''}
                    onChange={(e) => handleInputChange(e, 'startTime')}
                  />
                ) : (
                  event.startTime
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="date"
                    value={formData.endDate || ''}
                    onChange={(e) => handleInputChange(e, 'endDate')}
                    min={today}
                  />
                ) : (
                  event.endDate
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="time"
                    value={formData.endTime || ''}
                    onChange={(e) => handleInputChange(e, 'endTime')}
                  />
                ) : (
                  event.endTime
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange(e, 'description')}
                  />
                ) : (
                  event.description
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="text"
                    value={formData.location || ''}
                    onChange={(e) => handleInputChange(e, 'location')}
                  />
                ) : (
                  event.location
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <input className="host-manage-inputbox"
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange(e, 'price')}
                  />
                ) : (
                  event.price
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <button onClick={handleSaveEvent}>Save</button>
                ) : (
                  <>
                    <button className="host-edit-btn" onClick={() => handleEditEvent(index)}>Edit</button>
                    <button className="host-edit-btn" onClick={() => handleDeleteEvent(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {Object.keys(errors).length > 0 && editedEventIndex !== null && (
        <div className="errors">
          {Object.values(errors).map((error, idx) => (
            <p classname="host-manage-p" key={idx} style={{ color: 'red' }}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventHostManageEvents;
