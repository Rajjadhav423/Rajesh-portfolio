import React from 'react'

const HighLight = ({ text }) => {
  return (
    <span className="relative inline-block group">
      {/* Animated background effect */}
      <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 blur-lg group-hover:opacity-70 transition-all duration-500 animate-pulse"></span>
      
      {/* Gradient underline effect */}
      <span className="relative inline-block">
        <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-white group-hover:to-blue-100 transition-all duration-300">
          {text}
        </span>
        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
      </span>
    </span>
  );
};
export default HighLight


