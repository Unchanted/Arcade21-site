// src/pages/EventDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import events from '../data/dummyData';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const selectedEvent = events.find(event => event.id === parseInt(id));
    setEvent(selectedEvent);
  }, [id]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length);
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{event.title}</h2>
        <div className="relative flex justify-center items-center mb-6">
          <button onClick={handlePreviousImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10">
            &larr;
          </button>
          <img src={event.images[currentImageIndex]} alt={event.title} className="w-full max-w-4xl"/>
          <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10">
            &rarr;
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4 p-6 w-full mt-8">
          <p className="text-lg leading-relaxed mb-4">{event.description}</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu justo magna. Duis interdum faucibus quam, eget hendrerit ex aliquet nec. Suspendisse id felis id ligula ultrices tempor vel vel metus.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Event Details</h3>
            <ul className="list-disc pl-4">
              <li><strong>Date:</strong> {event.date}</li>
              <li><strong>Location:</strong> {event.location}</li>
              {/* Add more details as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
