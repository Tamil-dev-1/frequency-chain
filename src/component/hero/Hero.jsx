import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className="bg-primary py-5"> {/* Outer container with blue background and padding */}
      <div className="container text-center"> {/* Inner container */}
        <h1 className="text-white">Frequency Chain</h1>
        <p className="text-white mt-3">This is a simple hero section example</p>
      </div>
    </div>
  );
};

export default Hero;
