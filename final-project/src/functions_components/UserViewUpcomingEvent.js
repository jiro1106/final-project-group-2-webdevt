import React from 'react'
import UserMenu from './UserMenu'
import '../functions_css/UserViewUpcomingEvent.css'

const UserViewUpcomingEvent = () => {
  return (
    <div className="user-viewUpcomingEvent">
      <header className="App-header">
        <UserMenu /> 
        </header>
      <h1 className="user-viewUpcomingEvent-h1">View Upcoming Events</h1>
    </div>
  )
}

export default UserViewUpcomingEvent