import React, { useState, useEffect } from "react";
import "../functions_css/AdminApprovedEvents.css?v=1.0";

const ApprovedEvents = () => {
  const [approvedEvents, setApprovedEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
    setApprovedEvents(storedEvents);
  }, []);

  // Open modal and set the event for editing
  const handleEdit = (event) => {
    setCurrentEvent({ ...event }); // Copy the event to avoid direct mutation
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentEvent(null); // Reset current event after closing
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // Save the edited event and update state
  const handleSave = () => {
    const updatedEvents = approvedEvents.map((event) =>
      event.id === currentEvent.id ? currentEvent : event
    );

    // Save the updated events to localStorage and update the state
    localStorage.setItem("approvedEvents", JSON.stringify(updatedEvents));
    setApprovedEvents(updatedEvents);
    handleCloseModal(); // Close modal after saving
  };

  // Delete an event
  const handleDelete = (eventId) => {
    const updatedEvents = approvedEvents.filter((event) => event.id !== eventId);
    setApprovedEvents(updatedEvents);
    localStorage.setItem("approvedEvents", JSON.stringify(updatedEvents));
  };

  return (
    <div className="approved-events-container">
      <div className="approved-events-grid">
        {approvedEvents.length === 0 ? (
          <p>No approved events found.</p>
        ) : (
          approvedEvents.map((event) => (
            <div key={event.id} className="approved-event-card">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.startDate} to {event.endDate}</p>
              <p><strong>Time:</strong> {event.startTime} to   {event.endTime}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Price:</strong> ₱{event.price}</p>
              <p><strong>Created By:</strong> {event.createdBy.firstName} {event.createdBy.lastName}</p>

              <div className="approved-action-buttons">
                <button className="approved-edit-button" onClick={() => handleEdit(event)}>Edit</button>
                <button className="approved-delete-button" onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for editing */}
      {isModalOpen && currentEvent && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Event</h2>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={currentEvent.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={currentEvent.startDate}
                onChange={handleChange}
              />
              End Date:
              <input
                type="date"
                name="endDate"
                value={currentEvent.endDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Start Time:
              <input
                type="time"
                name="startTime"
                value={currentEvent.startTime}
                onChange={handleChange}
              />
              End Time:
              <input
                type="time"
                name="endTime"
                value={currentEvent.endTime}
                onChange={handleChange}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={currentEvent.location}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={currentEvent.description}
                onChange={handleChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={currentEvent.price}
                onChange={handleChange}
              />
            </label>
            <div className="modal-actions">
              <button className="approved-save-button" onClick={handleSave}>Save</button>
              <button className="approved-cancel-button" onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovedEvents;
