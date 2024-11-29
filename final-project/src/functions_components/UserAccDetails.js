import React from 'react'
import UserMenu from './UserMenu'
import '../functions_css/UserAccDetails.css'

const UserAccDetails = () => {
  return (
    <div className="user-accDetails">
      <header className="App-header">
        <UserMenu /> 
        </header>
        <h1 className="user-accDetails-h1">Acc Details</h1>
    </div>
  )
}

export default UserAccDetails