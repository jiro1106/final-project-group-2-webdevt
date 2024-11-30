import React, { useState, useEffect } from 'react';
import '../functions_css/EventHostManageEvents.css';
import EventHostMenu from './EventHostMenu';

const EventHostManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [editedEventIndex, setEditedEventIndex] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const currentUserEmail = localStorage.getItem('currentUser Email');
    const approvedEvents = JSON.parse(localStorage.getItem('approvedEvents')) || [];
    const userApprovedEvents = approvedEvents.filter(
      (event) => event.accountId === currentUserEmail
    );

    setEvents(userApprovedEvents);  // Only set approved events for the current user
  }, []);

  const today = new Date().toISOString().split('T')[0];

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
      const approvedEvents = updatedEvents.filter((event) => event.status === 'approved');
      localStorage.setItem('approvedEvents', JSON.stringify(approvedEvents));
      
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
    const approvedEvents = updatedEvents.filter((event) => event.status === 'approved');
    localStorage.setItem('approvedEvents', JSON.stringify(approvedEvents));
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
            <th>Photo</th>
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
              <td>
                {editedEventIndex === index ? (
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
                    min={formData.startDate || today}
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
                {editedEventIndex === index ? (
                  <div>
                    {/* Photo is displayed but not editable */}
                    <img src={formData.photo} alt="Event" style={{ width: '100px', height: 'auto' }} />
                  </div>
                ) : (
                  event.photo && <img src={event.photo} alt="Event" style={{ width: '100px', height: 'auto' }} />
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
    </div>
  );
};

export default EventHostManageEvents;
