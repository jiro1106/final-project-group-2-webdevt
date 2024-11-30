import React, { useState, useEffect } from 'react';
import '../functions_css/EventHostManageEvents.css'; // Import the external CSS
import EventHostMenu from './EventHostMenu';

const EventHostManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [editedEventIndex, setEditedEventIndex] = useState(null); // Keep track of which event is being edited
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load events from localStorage when the component mounts
    const savedEvents = JSON.parse(localStorage.getItem('eventData')) || [];
    const currentUserEmail = localStorage.getItem('currentUser Email'); // Get the current user's email

    // Filter events for the current user
    const userEvents = savedEvents.filter(event => event.accountId === currentUserEmail);
    setEvents(userEvents);
}, []);

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  // Handle changes in the event details
  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSaveEvent = () => {
    // Validate the edited event data
    const validationErrors = {}; // Assume validateEvent logic is already present
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const updatedEvents = [...events];
      updatedEvents[editedEventIndex] = { ...formData };
      localStorage.setItem('eventData', JSON.stringify(updatedEvents));
      setEvents(updatedEvents);
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
    localStorage.setItem('eventData', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  return (
    <div className="host-manageEvent">
      <header className="App-header">
        <EventHostMenu />
      </header>
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
            <th>Photo</th> {/* New Photo Column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>
                {editedEventIndex === index ? (
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange(e, 'title')}
                  />
                ) : (
                  event.title
                )}
              </td>
              <td>{editedEventIndex === index ? (
                  <input
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
                  <input
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
                  <input
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
                  <input
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
                  <input
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
                  <input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange(e, 'price')}
                  />
                ) : (
                  event.price
                )}
              </td>
              <td>
                {/* Render images from photos array */}
                {event.photos && event.photos.length > 0 ? (
                  event.photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`Event ${index} photo ${photoIndex}`}
                      style={{ width: '100px', height: '100px' }}
                    />
                  ))
                ) : (
                  <p>No photo</p>
                )}
              </td>
              <td>
                {editedEventIndex === index ? (
                  <button onClick={handleSaveEvent}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditEvent(index)}>Edit</button>
                    <button onClick={() => handleDeleteEvent(index)}>Delete</button>
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
            <p key={idx} style={{ color: 'red' }}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventHostManageEvents;
