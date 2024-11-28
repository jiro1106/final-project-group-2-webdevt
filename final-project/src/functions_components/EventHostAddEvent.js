import React, { useState, useEffect } from 'react';
import '../functions_css/EventHostAddEvent.css'; // Import the external CSS

const HostAddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    description: '',
    location: '',
    price: ''
  });

  const [errors, setErrors] = useState({});

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Load event data from localStorage (if available) when the component mounts
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

    // Helper function to safely trim a field
    const safeTrim = (value) => (value && typeof value === 'string' ? value.trim() : '');

    // Title validation
    if (!safeTrim(formData.title)) newErrors.title = 'Event title is required.';

    // Start date validation
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required.';
    } else if (new Date(formData.startDate) < new Date(today)) {
      newErrors.startDate = 'Start date cannot be in the past.';
    }

    // Start time validation
    if (!formData.startTime) {
      newErrors.startDate = 'Start time is required.';
    }

    // End date validation
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required.';
    } else if (new Date(formData.endDate) < new Date(today)) {
      newErrors.endDate = 'End date cannot be in the past.';
    } else {
      const start = new Date(`${formData.startDate}T${formData.startTime}`);
      const end = new Date(`${formData.endDate}T${formData.endTime}`);
      if (end < start) {
        newErrors.endDate = 'End date and time cannot be before start date and time.';
      }
    }

    // Description validation
    if (!safeTrim(formData.description)) newErrors.description = 'Event description is required.';

    // Location validation
    if (!safeTrim(formData.location)) newErrors.location = 'Event location is required.';

    // Price validation
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) < 0) {
      newErrors.price = 'Price must be a valid non-negative number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Event created:', formData);
      alert('Event successfully created!');

      // Retrieve existing events from localStorage, or initialize an empty array if none exist
      let existingEvents = JSON.parse(localStorage.getItem('eventData'));

      // If existingEvents is not an array, initialize it as an empty array
      if (!Array.isArray(existingEvents)) {
        existingEvents = [];
      }

      // Add the new event to the array
      existingEvents.push(formData);

      // Save the updated events array back to localStorage
      localStorage.setItem('eventData', JSON.stringify(existingEvents));

      // Reset the form
      setFormData({
        title: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        description: '',
        location: '',
        price: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="host-addEvent">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        {/* Event Title */}
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

        {/* Start Date */}
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            min={today} // Prevent past dates
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

        {/* End Date */}
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            min={today} // Prevent past dates
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

        {/* Event Description */}
        <div>
          <label>Event Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && <small>{errors.description}</small>}
        </div>

        {/* Event Location */}
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

        {/* Price */}
        <div>
          <label>Price (₱):</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          {errors.price && <small>{errors.price}</small>}
        </div>

        {/* Submit Button */}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default HostAddEvent;
