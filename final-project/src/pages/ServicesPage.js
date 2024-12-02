import React from "react";
import "../css/ServicesPage.css"; 
import { Navbar } from '../components/Navbar';
import Footer from "../components/Footer";
import { Contact } from "../components/Contact";
import { Link } from "react-router-dom";
import servicepage from '../assets/servicepage.png'
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

export const ServicePage = ()  => {
    return(
        <div className="service-container">
        <header className="App-header">
        <Navbar /> 
        </header>
            <div className="service-page">
                <h1 className="service-header">Services</h1>
                <img src={servicepage} alt='' className='background2'/>
                        <div className="horizontal_section">
                        <div className="line"></div></div>
                            <p>We can help you with</p>
                            <p className="services-offered">Weddings - Birthdays - Corporate Events - Other Social Events</p>
                            <div className="photo-card">
                                <div className="photo-card-item">
                                    <img src={card1} alt="Wedding" className="card-photo" />
                                </div>
                                <div className="photo-card-item">
                                    <img src={card2} alt="Birthday" className="card-photo" />
                                </div>
                                <div className="photo-card-item">
                                    <img src={card3} alt="Corporate Event" className="card-photo" />
                                </div>
                            </div>
                        <div className="horizontal_section">
                        <div className="line"></div></div>
                <div className="service-list">
                <div className="column-align">
                    <h2 className="service-title">Weddings</h2>
                    <div className="inquire-btn"><Link to='/user'><button class="button-28" role="button">Get Started</button></Link></div>
                    </div>
                        <div className="detail-column">
                        <li className="service-details">Coordinate ceremony and reception timing</li>
                        <li className="service-details">Vendor management (florists, caterers, photographers, etc.)</li>
                        <li className="service-details">Wedding rehearsal coordination</li>
                        <li className="service-details">Guest list and RSVP management</li>
                        <li className="service-details">Ceremony and reception setup oversight</li>
                        <li className="service-details">On-the-day event coordination</li>
                        </div>
                </div>
                <div className="horizontal_section">
                        <div className="line"></div></div>
                <div className="service-list">
                <div className="column-align">
                    <h2 className="service-title">Birthday</h2>
                    <div className="inquire-btn"><Link to='/user'><button class="button-28" role="button">Get Started</button></Link></div>
                    </div>
                        <div className="detail-column">
                        <li className="service-details">Venue decoration and theme setup</li>
                        <li className="service-details">Catering arrangement (cake, food, beverages)</li>
                        <li className="service-details">Entertainment planning (games, music, performances)</li>
                        <li className="service-details">Guest list and invitation management</li>
                        <li className="service-details">Party favor preparation</li>                    
                        <li className="service-details">Event timeline coordination</li> 
                        </div>                   
                        </div>
                        <div className="horizontal_section">
                        <div className="line"></div></div>
                    <div className="service-list">
                    <div className="column-align">
                    <h2 className="service-title">Corporate Events</h2>
                    <div className="inquire-btn"><Link to='/user'><button class="button-28" role="button">Get Started</button></Link></div>
                        </div>
                            <div className="detail-column">
                        <li className="service-details">Scheduling and agenda planning</li>
                        <li className="service-details">Audio-visual equipment setup</li>
                        <li className="service-details">Catering and refreshment services</li>
                        <li className="service-details">Guest and speaker registration coordination</li>
                        <li className="service-details">Venue setup and branding elements</li>
                        <li className="service-details">On-site team support during the event</li>
                        </div>
                        </div>
                        <div className="horizontal_section">
                        <div className="line"></div></div>
                        <div className="service-list">
                    <div className="column-align">
                    <h2 className="service-title">Other Social Events</h2>
                    <div className="inquire-btn"><Link to='/user'><button class="button-28" role="button">Get Started</button></Link></div>
                    </div>
                        <div className="detail-column">
                        <li className="service-details">Theme planning and execution (e.g., baby showers, anniversaries)</li>
                        <li className="service-details">Guest invitation and RSVP management</li>
                        <li className="service-details">Entertainment and activity planning</li>
                        <li className="service-details">Venue and vendor coordination</li>
                        <li className="service-details">On-the-day logistics and troubleshooting</li>
                        <li className="service-details">Post-event cleanup and wrap-up</li>
                        </div>
                    </div>
                    </div>
            <Contact/>
            <Footer/>
        </div>
    )
}