
import React from 'react';

function InteractiveButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}

export default InteractiveButton;
