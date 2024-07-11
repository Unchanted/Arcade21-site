// src/pages/Events.jsx

import React from 'react';
import InteractiveCard from '../components/InteractiveCard';

function Events() {
  const events = [
    { id: 1, title: 'Event 1', description: 'Description for Event 1' },
    { id: 2, title: 'Event 2', description: 'Description for Event 2' },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <InteractiveCard
            key={event.id}
            title={event.title}
            description={event.description}
            onClick={() => console.log(`Clicked on ${event.title}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
