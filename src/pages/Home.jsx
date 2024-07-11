import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const events = [
    { id: 1, title: 'Event 1', description: 'Description for event 1' },
    { id: 2, title: 'Event 2', description: 'Description for event 2' },
    { id: 3, title: 'Event 3', description: 'Description for event 3' },
  ];

  return (
    <div>
      <HeroSection />
      <EventsSection events={events} />
      <AboutSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('path_to_your_image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Upliftment of Underprivileged Students and Individuals</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

function EventsSection({ events }) {
  return (
    <div className="py-16 bg-gray-100" id="events">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Events</h2>
        <div className="flex flex-wrap justify-center">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg m-4 p-6 w-80 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center mb-4">
          Our trust is dedicated to the upliftment of underprivileged students and individuals by providing them with the necessary help and assistance in education. We strive to ensure that our charitable purposes benefit the public at large in India without any distinction of caste, color, creed, religion, or gender.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
