
import React from 'react';

function InteractiveCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default InteractiveCard;
