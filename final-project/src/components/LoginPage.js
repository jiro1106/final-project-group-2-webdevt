import React, { useState } from "react";
import "../styles/LoginPage.css";
import logo from "../pics/xtra.png";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin(); // Call the login success function
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <body class ="login-page">
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-header">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
        <img src={logo} alt="xtra logo" className="logo" />
      </form>
    </div>
    </body>
  );
};

export default LoginPage;
