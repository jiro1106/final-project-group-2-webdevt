import React from "react";
import "../css/Dashboard.css";
import logo2 from "../assets/xtra2.png";

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      
      <aside className="sidebar">
      <img src={logo2} alt="xtra-logo" className="admin-logo" />
        <div className="sidebar-header">Admin Dashboard</div>
        <ul className="sidebar-links">
          <li><a href="#events">Manage Events</a></li>
          <li><a href="#users">Manage Users</a></li>
          <li><a href="#proposals">Proposed Events</a></li>
        </ul>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section id="events" className="card">
          <h2>Event Management</h2>
          <p>View, create, and manage events here.</p>
        </section>

        <section id="users" className="card">
          <h2>User Management</h2>
          <p>Manage user accounts and permissions.</p>
        </section>

        <section id="proposals" className="card">
          <h2>Proposed Events</h2>
          <p>Review and approve/reject proposed events.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
