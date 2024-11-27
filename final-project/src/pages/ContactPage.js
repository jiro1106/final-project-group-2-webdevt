import React from "react";
import "../css/ContactPage.css"; 
import { Navbar } from '../components/Navbar';

export const ContactPage = ()  => {
    return(
        <div className="contact-container">
        <header className="App-header">
        <Navbar /> 
        </header>
            <h1>Contact</h1>
        </div>
    )
}