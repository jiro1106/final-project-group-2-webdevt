import React, { useState, useEffect } from "react";
import "../css/AdminManageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="manage-users">
      <h2>User Management</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <span>{user.name} ({user.email})</span>
            <button onClick={() => handleDeleteUser(index)} className="delete-button">Delete</button>
            {/* Add more actions for restricting or editing users */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManageUsers;
