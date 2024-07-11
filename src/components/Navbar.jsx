
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Trust Name</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#events" className="text-gray-600 hover:text-blue-500">Events</a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Home</a>
          <a href="#events" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Events</a>
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">About Us</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
