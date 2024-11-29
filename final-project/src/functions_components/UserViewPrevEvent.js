import React from 'react';
import UserMenu from './UserMenu';
import '../functions_css/UserViewPrevEvent.css';

const UserViewPrevEvent = () => {
  return (
    <div className="user-viewPrevEvent">
      <header className="App-header">
        <UserMenu /> 
        </header>
      <h1 className="user-viewPrevEvent-h1">View Previous Event</h1>
    </div>
  )
}

export default UserViewPrevEvent