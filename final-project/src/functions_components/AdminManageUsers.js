import React, { useState, useEffect } from "react";
import "../functions_css/AdminManageUsers.css";

const AdminManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Get both event host and user accounts from local storage
    const eventHostAccounts = JSON.parse(localStorage.getItem("eventHostAccounts")) || [];
    const userAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
    
    // Combine both sets of users into a single array
    const allUsers = [...eventHostAccounts, ...userAccounts];
    setUsers(allUsers);
  }, []);

  const handleDeleteUser = (userEmail) => {
    // Get current data from localStorage
    let eventHostAccounts = JSON.parse(localStorage.getItem("eventHostAccounts")) || [];
    let userAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
    
    // Filter out the user to be deleted from both eventHostAccounts and userAccounts
    const updatedEventHostAccounts = eventHostAccounts.filter((user) => user.email !== userEmail);
    const updatedUserAccounts = userAccounts.filter((user) => user.email !== userEmail);
    
    // Update localStorage with the filtered lists
    localStorage.setItem("eventHostAccounts", JSON.stringify(updatedEventHostAccounts));
    localStorage.setItem("userAccounts", JSON.stringify(updatedUserAccounts));

    // Update the state with the remaining users
    const remainingUsers = [...updatedEventHostAccounts, ...updatedUserAccounts];
    setUsers(remainingUsers);
  };

  return (
    <div className="admin-manage-users">
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">No users available</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user.email)} // Deleting based on email
                    className="action-button delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageUsers;
