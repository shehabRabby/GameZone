import React from "react";
import { GoStarFill } from "react-icons/go";
import { FaCloudDownloadAlt, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { RingLoader } from "react-spinners";

const GameDetails = () => {
  const location = useLocation();
  const { game } = location.state || {};

  if (!game) {
    return (
      <div className="text-center my-10 min-h-[332px] flex flex-col items-center justify-center gap-4">
        <RingLoader size={150} color="#4f46e5" />
        <p className="text-lg font-medium text-black"> Game data not found! Go to homepage and press See Details</p>
        <Link to="/" className="mt-2 inline-block px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 glow-hover">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      <title>{game.title}</title>
      <div className="absolute inset-0 bg-gradient-to-br from-[#27872a]/5 via-[#27872a]/5 to-[#27872a]/5">
      </div>

      {/* Card Details */}
      <div className="relative max-w-4xl w-full bg-[#93e3f5] backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 text-gray-100 fade-in-up">
        <h1 className="text-4xl font-extrabold text-center py-6 text-indigo-900 animate-pulse">🎮 Game Details 🎮</h1>
        <img src={game.coverPhoto} alt={game.title} className="w-full h-1/2 object-cover border-b border-white/20"/>

        {/* brif details this section */}
        <div className="p-6  md:p-8 lg:p-10 space-y-4 bg-white/20 backdrop-blur-md  border-indigo-500 rounded-xl shadow-lg max-w-3xl mx-auto text-gray-900 m-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 text-center">{game.title}</h1>
        
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Developer:</span> {game.developer}
          </p>
        
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Category:</span> {game.category}
          </p>
        
          <p className="text-gray-800">{game.description}</p>
          <p className="text-indigo-800 font-bold flex items-center gap-2">Rating: {game.ratings} <GoStarFill size={22} /></p>
        
          
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Release Date:</span> {game.releaseDate}
          </p>
        
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Platforms:</span> {game.platforms}
          </p>
        
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Modes:</span> {game.modes}
          </p>
        
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Tags:</span> {game.tags}
          </p>
        
          <p className="text-gray-800">
            <span className="font-bold text-indigo-800">Trailer:</span>{" "}
            <a href={game.videoTrailer} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-800">
              Watch Here
            </a>
          </p>
        
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <a  href={game.downloadLink}  target="_blank"  rel="noopener noreferrer"  className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-md">
              <FaCloudDownloadAlt size={18}/> <span>Download</span>
            </a>
        
            <Link to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md"
            >
              <FaHome size={18} /> <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
