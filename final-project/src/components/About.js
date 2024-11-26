import React, { useState } from "react";
import "../css/About.css"; // Import the CSS styling

const images = [
  "homepage.png", // Replace with your image paths
  "xtraicon.png",
  "homepage.png",
  "xtraicon.png",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Get the previous, current, and next image indices
  const prevIndex =
    (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="about-container">
      <h1 className="about-h1">What is XTRAVAGALA?</h1>
      <div className="carousel">
        <button className="arrow prev" onClick={prevSlide}>
          &#8592; {/* Left arrow */}
        </button>
        <div className="carousel-images">
          {/* Previous Image */}
          <img
            src={images[prevIndex]}
            alt={`Previous Slide`}
            className="carousel-image prev-image"
          />

          {/* Current Image */}
          <img
            src={images[currentIndex]}
            alt={`Current Slide`}
            className="carousel-image current-image"
          />

          {/* Next Image */}
          <img
            src={images[nextIndex]}
            alt={`Next Slide`}
            className="carousel-image next-image"
          />
        </div>
        <button className="arrow next" onClick={nextSlide}>
          &#8594; {/* Right arrow */}
        </button>
      </div>
      <div className="team-container">
        <h1 className="team-h1">Meet the Team</h1>
        <div className="persons">
          <div className="person">
            <img src="xtraicon.png" alt="" className="person-img" />
            <h2 className="team-h2">Marc Eiron Hernandez</h2>
          </div>
          <div className="person">
            <img src="xtraicon.png" alt="" className="person-img" />
            <h2 className="team-h2">Xavier Gelligan</h2>
          </div>
          <div className="person">
            <img src="xtraicon.png" alt="" className="person-img" />
            <h2 className="team-h2">Relli Emmanuel Javier</h2>
          </div>
          <div className="person">
            <img src="xtraicon.png" alt="" className="person-img" />
            <h2 className="team-h2">Jiro Rafael Layug</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
