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
        <p className="text-lg font-medium text-black">
          Game data not found! Go to homepage and press See Details
        </p>
        <Link
          to="/"
          className="mt-2 inline-block px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 glow-hover"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      
      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b7?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center animate-bgMove opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e293b]/90 to-[#0f172a]/90"></div>

      {/* Optional floating glow */}
      <div className="bg-floating-glow"></div>

      {/* Glass Card */}
      <div className="relative max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 text-gray-100 fade-in-up">
        <h1 className="text-4xl font-extrabold text-center py-6 text-white tracking-wide">
          🎮 Game Details
        </h1>

        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-full object-cover border-b border-white/20"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-white">{game.title}</h1>

          <p className="text-gray-300">
            <span className="font-extrabold text-indigo-400">Developer:</span>{" "}
            {game.developer}
          </p>

          <p className="text-gray-300">
            <span className="font-extrabold text-indigo-400">Category:</span>{" "}
            {game.category}
          </p>

          <p className="text-gray-200 leading-relaxed">{game.description}</p>

          <p className="text-yellow-400 font-semibold flex items-center gap-2">
            Rating: {game.ratings} <GoStarFill size={22} />
          </p>

          <div className="flex gap-3 pt-3">
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 glow-hover"
            >
              <FaCloudDownloadAlt size={18} /> <span>Download</span>
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 glow-hover"
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
