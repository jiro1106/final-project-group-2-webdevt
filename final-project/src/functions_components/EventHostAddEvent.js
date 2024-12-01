import React, { useState, useEffect } from 'react';
import '../functions_css/EventHostAddEvent.css'; 
import EventHostMenu from './EventHostMenu';
import { useNavigate } from 'react-router-dom';

const HostAddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    description: '',
    location: '',
    price: '',
  });
  const [errors, setErrors] = useState({});
  const [eventPhotos, setEventPhotos] = useState([]); 
  const today = new Date().toISOString().split('T')[0];
  const navigate = useNavigate();

  useEffect(() => {
    const savedEventData = JSON.parse(localStorage.getItem('eventData'));
    if (savedEventData) {
      setFormData({
        title: savedEventData.title || '',
        startDate: savedEventData.startDate || '',
        startTime: savedEventData.startTime || '',
        endDate: savedEventData.endDate || '',
        endTime: savedEventData.endTime || '',
        description: savedEventData.description || '',
        location: savedEventData.location || '',
        price: savedEventData.price || ''
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const safeTrim = (value) => (value && typeof value === 'string' ? value.trim() : '');

    if (!safeTrim(formData.title)) newErrors.title = 'Event title is required.';
    if (!formData.startDate) newErrors.startDate = 'Start date is required.';
    if (!formData.startTime) newErrors.startTime = 'Start time is required.';
    if (!formData.endDate) newErrors.endDate = 'End date is required.';
    if (new Date(formData.endDate) < new Date(today)) newErrors.endDate = 'End date cannot be in the past.';
    if (!safeTrim(formData.description)) newErrors.description = 'Event description is required.';
    if (!safeTrim(formData.location)) newErrors.location = 'Event location is required.';
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) < 0) {
      newErrors.price = 'Price must be a valid non-negative number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        const currentUser  = JSON.parse(localStorage.getItem('eventHostAccounts')).find(acc => acc.email === localStorage.getItem('currentUser Email'));
        const newEvent = {
            ...formData,
            photos: [...eventPhotos],
            accountId: localStorage.getItem('currentUser  Email'),
            status: 'pending',
            createdBy: {
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
            }
        };

      try {
        let pendingEvents = JSON.parse(localStorage.getItem('pendingEvents')) || [];
        pendingEvents.unshift(newEvent);

        localStorage.setItem('pendingEvents', JSON.stringify(pendingEvents));
        alert('Event submitted for approval!');

        setFormData({
          title: '', startDate: '', startTime: '', endDate: '', endTime: '', description: '', location: '', price: ''
        });
        setEventPhotos([]);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
        alert('There was an issue submitting the event.');
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size exceeds the 5MB limit. Please upload a smaller image.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setEventPhotos((prevPhotos) => [...prevPhotos, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="host-addEvent">
      <h2 className="host-addEvent-h2">Create New Event</h2>
      <div className="host-addEvent-container">
        <header className="App-header">
          <EventHostMenu />
        </header>
        <form className="host-addEvent-form" onSubmit={handleSubmit}>
          <div>
            <label>Event Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            {errors.title && <small>{errors.title}</small>}
          </div>

          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              min={today}
            />
            <label>Start Time:</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
            />
            {errors.startDate && <small>{errors.startDate}</small>}
          </div>

          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              min={today}
            />
            <label>End Time:</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
            />
            {errors.endDate && <small>{errors.endDate}</small>}
          </div>

          <div>
            <label>Event Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {errors.description && <small>{errors.description}</small>}
          </div>

          <div>
            <label>Event Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
            {errors.location && <small>{errors.location}</small>}
          </div>

          <div>
            <label>Event Price (₱):</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            {errors.price && <small>{errors.price}</small>}
          </div>

          <div>
            <label>Event Photos:</label>
            <input type="file" onChange={handleImageChange} />
          </div>
        
          <button type="submit">Submit Event</button>
        </form>
      </div>
    </div>
  );
};

export default HostAddEvent;
