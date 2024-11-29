import React, { useState } from "react";
import "../css/LoginPage.css";
import logo from "../assets/xtra.png";

const LoginPage = ({ onLogin }) => {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Form validation is handled by the 'required' attribute, so we just check credentials here.
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "admin") {
      onLogin(); // Call the login success function
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <body className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <img src={logo} alt="xtra logo" className="admin-login-logo" />
          <h2 className="login-header">Admin Login</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="login-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </body>
  );
};

export default LoginPage;
