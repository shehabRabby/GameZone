import React from "react";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router";

const AppsCard = ({ game }) => {
  return (
    <div className="
      relative 
      bg-gray-800 
      rounded-2xl 
      shadow-2xl 
      overflow-hidden 
      border border-transparent 
      transition-all duration-500
      transform hover:scale-[1.02] 
      hover:shadow-cyan-500/50 
      hover:border-cyan-500/50
    ">
      {/* Game Cover Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={game.coverPhoto} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Subtle Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content Area */}
      <div className="p-3 space-y-3">
        <h2 className="text-2xl font-bold text-white tracking-wide h-10 overflow-hidden whitespace-nowrap text-ellipsis">
          {game.title}
        </h2>

        {/* Rating Section */}
        <div className="flex items-center gap-1 text-lg">
          <p className="text-yellow-400 font-bold">Rating:</p>
          <span className="text-white ml-1">{game.ratings}</span>
          <GoStarFill size={18} className="text-yellow-400" />
        </div>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  
          {/* Download Button (Primary Action) */}
          <a 
            href={game.downloadLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              flex-1 text-center font-semibold text-sm // Smaller text size
              px-4 py-2 rounded-full // Reduced padding for smaller size
              bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white shadow-lg 
              hover:from-indigo-700 hover:to-purple-700 
              transition-all duration-300
              transform hover:-translate-y-0.5
            "
          >
            Download
          </a>
        
          {/* Details Button (Secondary Action) */}
          <Link 
            to={`/gameDetails`} 
            state={{ game }}
            className="
              flex-1 text-center font-semibold text-sm // Smaller text size
              px-4 py-2 rounded-full // Reduced padding for smaller size
              bg-gray-700 text-cyan-400 
              border border-cyan-400/50 
              shadow-md shadow-gray-900 
              hover:bg-cyan-400 hover:text-gray-900
              transition-all duration-300
            "
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
