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

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);  // Remove the user at the specified index
    setUsers(updatedUsers);

    // Determine if the user is from eventHostAccounts or userAccounts and update accordingly
    const isEventHost = users[index].role === "eventHost";  // Assuming you store the role in the user object
    let updatedLocalStorage;

    if (isEventHost) {
      updatedLocalStorage = JSON.parse(localStorage.getItem("eventHostAccounts")) || [];
      updatedLocalStorage.splice(index, 1);
      localStorage.setItem("eventHostAccounts", JSON.stringify(updatedLocalStorage));
    } else {
      updatedLocalStorage = JSON.parse(localStorage.getItem("userAccounts")) || [];
      updatedLocalStorage.splice(index, 1);
      localStorage.setItem("userAccounts", JSON.stringify(updatedLocalStorage));
    }
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
                    onClick={() => handleDeleteUser(index)}
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
