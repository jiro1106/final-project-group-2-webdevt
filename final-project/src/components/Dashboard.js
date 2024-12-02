import React, { useState, useEffect } from "react";
import ProposedEvents from "../functions_components/AdminProposedEvents";
import ApprovedEvents from "../functions_components/AdminApprovedEvents";
import AdminManageUsers from "../functions_components/AdminManageUsers"; // Import the user management component
import "../css/Dashboard.css";
import logo2 from "../assets/xtra2.png";

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState(""); 
  const [pendingEvents, setPendingEvents] = useState([]);
  const [approvedEvents, setApprovedEvents] = useState([]);

  useEffect(() => {
    const storedPendingEvents = JSON.parse(localStorage.getItem("pendingEvents")) || [];
    const storedApprovedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
    
    setPendingEvents(storedPendingEvents);
    setApprovedEvents(storedApprovedEvents);
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
            <ApprovedEvents approvedEvents={approvedEvents} />
          </section>
        )}

        {activeSection === "users" && (
          <section id="users" className="card">
            <h2>User Management</h2>
            <AdminManageUsers /> {/* Render component without passing it as a prop */}
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
