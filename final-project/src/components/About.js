import React, { useState, useEffect } from "react";
import "../css/About.css"; // Import the CSS styling
import slideshow1 from "../assets/slideshow1.png";
import slideshow2 from "../assets/slideshow2.png";
import slideshow7 from "../assets/slideshow7.png";

const images = [slideshow1, slideshow2, slideshow7];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out effect
      setFadeClass("fade-out");

      // After the fade-out transition, change the image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass("fade-in");
      }, 500); // Timeout duration should match the fade transition duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="about-container">
      <h1 className="about-h1">What is XTRAVAGALA?</h1>
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`carousel-image ${fadeClass}`} // Apply fade class
        />
        <button className="arrow prev" onClick={goToPrevious}>←</button>
        <button className="arrow next" onClick={goToNext}>→</button>
      </div>
    </div>
  );
};

export default About;
