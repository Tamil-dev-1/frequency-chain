import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Heading */}
      <h1 className="hero-title">Frequency Chain</h1>

      {/* 3D Rotating Image */}
      <div className="three-d-wrapper">
        <img
          src="https://images.pexels.com/photos/5980916/pexels-photo-5980916.jpeg"
          alt="Frequency Chain 3D"
          className="three-d-image"
        />
      </div>
    </section>
  );
}
