import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import events from '../data/dummyData';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const event = events.find(event => event.id === parseInt(id));
    setEvent(event);
  }, [id]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className="relative flex justify-center items-center">
          <button onClick={handlePreviousImage} className="absolute left-0">Previous</button>
          <img src={event.images[currentImageIndex]} alt={`Event ${event.id} Image ${currentImageIndex + 1}`} className="w-full max-w-4xl"/>
          <button onClick={handleNextImage} className="absolute right-0">Next</button>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4 p-6 w-full mt-8">
          <p>{event.description}</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros vel libero facilisis sollicitudin. Nam vehicula, turpis in interdum placerat, leo erat varius odio, a bibendum magna quam sit amet justo. Fusce ut massa turpis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
