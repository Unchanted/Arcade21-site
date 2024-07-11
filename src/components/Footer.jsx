
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Upliftment Trust. All rights reserved.</p>
        <div className="mt-4">
          <a href="/about-us" className="text-blue-500 hover:underline">About Us</a> | 
          <a href="/contact" className="text-blue-500 hover:underline"> Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
