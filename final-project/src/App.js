import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import EventHostLogin from './components/EventHostLogin';
import CreateForm from  './components/CreateForm';
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import EventManagement from "./components/EventManagement";
import UserManagement from "./components/UserManagement";
import React, { useState } from "react";
import {AboutPage} from "./pages/AboutPage";
import {ServicePage} from "./pages/ServicesPage";
import {ContactPage} from "./pages/ContactPage";
import CreateFormUser from "./components/CreateFormUser";

import AddEvent from './functions_components/EventHostAddEvent';
import ManageEvent from './functions_components/EventHostManageEvents';

import FindEvent from './functions_components/UserFindEvent';
import ViewUpcomingEvent from './functions_components/UserViewUpcomingEvent';

import ForgotPasswordHost from './functions_components/forgotPasswordHost';
import ForgotPasswordUser  from './functions_components/forgotPasswordUser';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div className="App">
        <BrowserRouter>
        <main>
        <Routes>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/user' element={<LoginForm/>}/>
         <Route path='/' element={<MenuPage/>}/>
         <Route path='/event-host' element={<EventHostLogin/>}/>
         <Route path='/CreateForm' element={<CreateForm/>}/>
         <Route path='/CreateFormUser' element={<CreateFormUser/>}/>
         <Route path="/forgot-password-host" element={<ForgotPasswordHost />} />
          <Route path="/forgot-password-user" element={<ForgotPasswordUser  />} />
         <Route
          path="/admin"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/admin" />}
        />
        <Route
          path="/events"
          element={isLoggedIn ? <EventManagement /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isLoggedIn ? <UserManagement /> : <Navigate to="/" />}
        />
          {/*Nested routes*/}
          <Route path='/findEvent' element={<FindEvent/>}/>
          {/*Nested routes*/}
            <Route path='/findEvent' element={<FindEvent/>}/>
            <Route path='/viewUpcomingEvent' element={<ViewUpcomingEvent/>}/>

        <Route path='/addEvent' element={<AddEvent/>}/>
          {/*Nested routes*/}
            <Route path='/addEvent' element={<AddEvent/>}/>
            <Route path='/manageEvent' element={<ManageEvent/>}/>
        </Routes>
        </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
