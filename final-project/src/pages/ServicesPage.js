import React from "react";
import "../css/ServicesPage.css"; 
import { Navbar } from '../components/Navbar';

export const ServicePage = ()  => {
    return(
        <div className="service-container">
        <header className="App-header">
        <Navbar /> 
        </header>
            <h1>Services</h1>
        </div>
    )
}