
import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const events = [
    { id: 1, title: 'Event 1', description: 'Description for event 1' },
    { id: 2, title: 'Event 2', description: 'Description for event 2' },
    { id: 3, title: 'Event 3', description: 'Description for event 3' },
  ];

  const event = events.find(event => event.id === parseInt(id));

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{event.title}</h2>
        <div className="bg-white shadow-md rounded-lg m-4 p-6 w-full">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
