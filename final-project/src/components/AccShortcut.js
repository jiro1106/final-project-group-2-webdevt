import React from 'react'
import '../css/AccShortcut.css'
import Events from '../assets/eventpics.jpeg'
import {Link} from 'react-router-dom'

export const AccShortcut = () => {
  return (
    <div className="accShortcut-container">
        <img src={Events} alt="eventpic" className="accShortcut-logo" />
        <div className="accShortcut-items">
            <div className="accShortcut-text">
                <h1 className= "accShortcut-h1">Your Moments</h1>
                <h1 className= "accShortcut-h1">Start Here!</h1>
            </div>
            <Link to="/CreateForm">
            <button className="btn-createAcc">Create an Account </button>
            </Link>
        </div>
    </div>
  )
}
