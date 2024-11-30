import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProposedEvents.css";

const ProposedEvents = () => {
  const [pendingEvents, setPendingEvents] = useState([]);
  const navigate = useNavigate();

  // Fetch pending events from localStorage on initial render
  useEffect(() => {
    const storedPendingEvents = JSON.parse(localStorage.getItem("pendingEvents")) || [];
    setPendingEvents(storedPendingEvents);
  }, []);

  // Handle approval or rejection of an event
  const handleApproval = (index, approve) => {
    const updatedEvents = [...pendingEvents];
    const event = updatedEvents.splice(index, 1)[0];

    // Remove event from pending events
    localStorage.setItem("pendingEvents", JSON.stringify(updatedEvents));
    setPendingEvents(updatedEvents);

    if (approve) {
      // Mark the event as approved and add accountId for filtering later
      event.status = 'approved';
      event.accountId = localStorage.getItem('currentUser Email');  // Store the accountId

      let approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
      approvedEvents.unshift(event); // Add to the beginning of the approved events list
      localStorage.setItem("approvedEvents", JSON.stringify(approvedEvents));

      // Navigate to manage event page
      navigate('/event-host', { state: { eventToEdit: event } });
    } else {
      alert(`Event "${event.title}" has been rejected.`);
    }
  };

  return (
    <div className="proposed-events-container">
      {pendingEvents.length > 0 ? (
        <div className="events-grid">
          {pendingEvents.map((event, index) => (
            <div key={index} className="proposed-event-card">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.startDate} to {event.endDate}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <div className="action-buttons">
                <button className="approve-button" onClick={() => handleApproval(index, true)}>Approve</button>
                <button className="reject-button" onClick={() => handleApproval(index, false)}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No pending events for approval.</p>
      )}
    </div>
  );
};

export default ProposedEvents;
