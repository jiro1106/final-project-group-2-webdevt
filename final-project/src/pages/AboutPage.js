import React, { useState } from "react";
import "../css/AboutPage.css"; // Your AboutPage CSS
import slideshow1 from "../assets/slideshow1.png";
import slideshow2 from "../assets/slideshow2.png";
import slideshow3 from "../assets/slideshow3.png";
import slideshow4 from "../assets/slideshow4.png";
import slideshow5 from "../assets/slideshow5.png";
import slideshow6 from "../assets/slideshow6.png";
import slideshow7 from "../assets/slideshow7.png";
import { Navbar } from '../components/Navbar';

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
        <div className="carousel">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          <button className="arrow prev" onClick={goToPrevious}>
            ←
          </button>
          <button className="arrow next" onClick={goToNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};
