// src/pages/Donate.jsx

import React from 'react';
import InteractiveButton from '../components/InteractiveButton';

function Donate() {
  const handleDonate = () => {
    // Handle donation process
    console.log('Donation process initiated!');
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Donate</h2>
      <p className="max-w-lg mx-auto mb-8">
        Your donation will help us support underprivileged students and individuals.
      </p>
      <InteractiveButton text="Donate Now" onClick={handleDonate} />
    </div>
  );
}

export default Donate;
