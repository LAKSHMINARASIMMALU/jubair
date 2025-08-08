import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Rings */}
      <div className="absolute top-20 left-10 w-12 h-12 border-4 border-purple-400 rounded-full opacity-70 animate-float-slow transform-gpu shadow-lg"></div>
      <div className="absolute top-32 right-16 w-8 h-8 border-3 border-pink-400 rounded-full opacity-60 animate-float-medium transform-gpu shadow-md"></div>
      <div className="absolute top-60 left-1/3 w-16 h-16 border-4 border-orange-400 rounded-full opacity-50 animate-float-fast transform-gpu shadow-lg"></div>
      
      {/* Floating Hearts */}
      <div className="absolute bottom-40 right-20 w-6 h-6 opacity-30 animate-float-slow transform-gpu">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 rounded-full relative shadow-lg">
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full"></div>
        </div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute bottom-60 left-16 w-10 h-10 bg-gradient-to-br from-orange-300 to-yellow-400 opacity-50 animate-float-medium transform-gpu clip-star shadow-lg"></div>
      <div className="absolute top-80 right-32 w-8 h-8 bg-gradient-to-br from-teal-300 to-emerald-400 opacity-50 animate-float-fast transform-gpu rotate-45 shadow-md"></div>
      
      {/* Islamic Geometric Pattern Elements */}
      <div className="absolute top-1/2 left-8 w-20 h-20 opacity-20 animate-float-slow transform-gpu">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 border-2 border-purple-500 rounded-full"></div>
          <div className="absolute inset-2 border-2 border-pink-500 rotate-45 rounded-full"></div>
          <div className="absolute inset-4 border-2 border-orange-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-80 right-12 w-16 h-16 opacity-25 animate-float-medium transform-gpu">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 border-2 border-teal-500 transform rotate-0"></div>
          <div className="absolute inset-0 border-2 border-emerald-500 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;