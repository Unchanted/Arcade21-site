
import React from 'react';

function FloatingGradient() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-60 mix-blend-overlay"></div>
    </div>
  );
}

export default FloatingGradient;
