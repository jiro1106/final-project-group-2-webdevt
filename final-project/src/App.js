import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import EventManagement from "./components/EventManagement";
import UserManagement from "./components/UserManagement";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/" />}
        />
        <Route
          path="/events"
          element={isLoggedIn ? <EventManagement /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isLoggedIn ? <UserManagement /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
