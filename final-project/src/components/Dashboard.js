import React, { useState, useEffect } from "react";
import ProposedEvents from "../functions_components/AdminProposedEvents";
import ApprovedEvents from "../functions_components/AdminApprovedEvents"; 
import "../css/Dashboard.css";
import logo2 from "../assets/xtra2.png";

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState(""); 
  const [pendingEvents, setPendingEvents] = useState([]);
  const [approvedEvents, setApprovedEvents] = useState([]);
  const [users, setUsers] = useState([]); // State for users

  useEffect(() => {
    const storedPendingEvents = JSON.parse(localStorage.getItem("pendingEvents")) || [];
    const storedApprovedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Load users from localStorage
    
    setPendingEvents(storedPendingEvents);
    setApprovedEvents(storedApprovedEvents);
    setUsers(storedUsers); // Set users
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleApproveEvent = (index) => {
    const updatedPendingEvents = [...pendingEvents];
    const eventToApprove = updatedPendingEvents.splice(index, 1)[0];
    setPendingEvents(updatedPendingEvents);

    const updatedApprovedEvents = [...approvedEvents, { ...eventToApprove, status: "approved" }];
    setApprovedEvents(updatedApprovedEvents);

    localStorage.setItem("pendingEvents", JSON.stringify(updatedPendingEvents));
    localStorage.setItem("approvedEvents", JSON.stringify(updatedApprovedEvents));
  };

  const handleRejectEvent = (index) => {
    const updatedPendingEvents = [...pendingEvents];
    updatedPendingEvents.splice(index, 1);
    setPendingEvents(updatedPendingEvents);
    
    localStorage.setItem("pendingEvents", JSON.stringify(updatedPendingEvents));
  };

  // Function to delete a user
  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <img src={logo2} alt="xtra-logo" className="admin-logo" />
        <div className="sidebar-header">Admin Dashboard</div>
        <ul className="sidebar-links">
          <li>
            <button onClick={() => handleNavigation("events")}>Manage Events</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("users")}>Manage Users</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("proposals")}>Proposed Events</button>
          </li>
        </ul>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </aside>

      <main className="main-content">
        {activeSection === "events" && (
          <section id="events" className="card">
            <h2>Event Management</h2>
            <ApprovedEvents ApprovedEvents={ApprovedEvents} /> 
          </section>
        )}

        {activeSection === "users" && (
          <section id="users" className="card">
            <h2>User Management</h2>
            <ul>
              {users.map((user, index) => (
                <li key={index} className="user-item">
                  <span>{user.name} ({user.email})</span>
                  <button onClick={() => handleDeleteUser(index)} className="delete-button">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeSection === "proposals" && (
          <section id="proposals" className="card">
            <h2>Proposed Events</h2>
            <ProposedEvents
              pendingEvents={pendingEvents}
              approvedEvents={approvedEvents}
              handleApproveEvent={handleApproveEvent}
              handleRejectEvent={handleRejectEvent}
            />
          </section>
        )}

        {!activeSection && (
          <section className="card">
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Select an option from the sidebar to manage events, users, or proposals.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
