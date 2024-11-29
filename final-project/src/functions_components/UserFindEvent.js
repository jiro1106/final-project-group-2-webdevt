import React from 'react'
import UserMenu from './UserMenu'
import '../functions_css/UserFindEvent.css'

const UserFindEvent = () => {
  return (
    <div className="user-findEvent">
      <header className="App-header">
        <UserMenu /> 
      </header>
      <h1 className="user-findEvent-h1">Find Events</h1>  
    </div>
  )
}

export default UserFindEvent