import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Trust Name</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/events" className="text-gray-600 hover:text-blue-500">Events</Link>
          <Link to="/about-us" className="text-gray-600 hover:text-blue-500">About Us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
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
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Home</Link>
          <Link to="/events" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Events</Link>
          <Link to="/about-us" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">About Us</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
