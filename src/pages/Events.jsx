import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  const events = [
    { id: 1, title: 'Event 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Event 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Event 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Events</h2>
        <div className="flex flex-wrap justify-center">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg m-4 p-6 w-80 transform hover:scale-105 transition-transform">
              <img src={`https://via.placeholder.com/300x200?text=Event+${event.id}`} alt={event.title} className="mb-4"/>
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

export default Events;
