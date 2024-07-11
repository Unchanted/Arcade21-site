// src/pages/AboutUs.jsx

import React from 'react';
import InteractiveSVG from '../components/InteractiveSVG';

function AboutUs() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <p className="max-w-lg mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero justo, et congue quam ultrices nec.
      </p>
      <InteractiveSVG />
    </div>
  );
}

export default AboutUs;
