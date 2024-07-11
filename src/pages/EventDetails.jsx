import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function EventDetails() {
  const { id } = useParams();
  const events = [
    { id: 1, title: 'Event 1', description: 'Detailed description for event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros vel libero facilisis sollicitudin.', images: ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400?text=Event+1+Image+2'] },
    { id: 2, title: 'Event 2', description: 'Detailed description for event 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', images: ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400?text=Event+2+Image+2'] },
    { id: 3, title: 'Event 3', description: 'Detailed description for event 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', images: ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400?text=Event+3+Image+2'] },
  ];

  const event = events.find(event => event.id === parseInt(id));

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{event.title}</h2>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {event.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Event ${event.id} Image ${index + 1}`} className="w-full"/>
            </SwiperSlide>
          ))}
        </Swiper>
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
