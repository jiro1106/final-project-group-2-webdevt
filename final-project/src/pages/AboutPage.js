import React, { useState } from "react";
import "../css/AboutPage.css"; // Your AboutPage CSS
import slideshow1 from "../assets/slideshow1.png";
import slideshow2 from "../assets/slideshow2.png";
import slideshow3 from "../assets/slideshow3.png";
import slideshow4 from "../assets/slideshow4.png";
import slideshow5 from "../assets/slideshow5.png";
import slideshow6 from "../assets/slideshow6.png";
import slideshow7 from "../assets/slideshow7.png";
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import { TitleCard } from "../components/TitleCard";


const images = [slideshow1, slideshow2, slideshow3,slideshow4, slideshow5, slideshow6, slideshow7];

export const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="about-page-container">
      <header className="App-header">
        <Navbar /> 
        </header>
      <div className="about-page">
        <h1 className="aboutp-header">About XTRAVAGALA</h1>
        <div className="carousel-aboutpage">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image-about"
          />
          <button className="arrow prev" onClick={goToPrevious}>
            ←
          </button>
          <button className="arrow next" onClick={goToNext}>
            →
          </button>
          
        </div>
        <div className="horizontal_section">
              <div className="line"></div>
            </div>  
          <div className="about-info">
            <h2 className="header-2">Bringing your ideas come to life</h2>
            <p className="about-prg">Our specialty at XtravaGala is to simplifies event planning with a simple platform that is made to be both efficient and user-friendly. From planning to execution, our user-friendly interface guarantees that customers can handle any part of their events with ease and that all important information is always at hand. Our goal is to make event planning stress-free so that our clients may spend more time on the important things.</p>
            <p className="about-prg">Our strategy is centered on open communication. Through a variety of tools, including email and social networking sites like Facebook, Instagram, and X, XtravaGala links customers and event planners. This promotes cooperation that makes dreams come true by guaranteeing that every concept, update, and detail is efficiently communicated.</p>
            <p className="about-prg">Delivering excellence and staying current with trends are things we take great pride in. XtravaGala ensures that all of the details mentioned during consultations are carried out precisely, guaranteeing that events are held to the greatest standards. </p>
              <div className="inquire-btn"><Link to='/user'><button class="button-27" role="button">Get Started Now!</button></Link></div>
          </div>
          <div className="horizontal_section">
              <div className="line"></div>
            </div> 
      </div>

      <Contact/>
      <Footer/>
    </div>
  );
};
