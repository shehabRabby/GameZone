import React from "react";
import { GoStarFill } from "react-icons/go";
import {
  FaCloudDownloadAlt,
  FaHome,
  FaTags,
  FaCalendarAlt,
  FaGamepad,
  FaUsers,
  FaVideo,
  FaChartBar,
} from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { RingLoader } from "react-spinners";

// Utility component for structured data presentation
const DetailItem = ({ icon: Icon, label, value }) => (
  <p className="flex items-start text-gray-300">
    <Icon size={18} className="text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="font-bold text-cyan-400 mr-2">{label}:</span>
    <span className="text-white break-words">{value || "N/A"}</span>
  </p>
);

const GameDetails = () => {
  const location = useLocation();
  const { game } = location.state || {};

  if (!game) {
    return (
      <div className="bg-gray-900 min-h-screen text-center flex flex-col items-center justify-center gap-6">
        <RingLoader size={150} color="#06b6d4" />
        <p className="text-2xl font-bold text-gray-300">
          Game data not found! Please go back to the homepage.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          <FaHome size={20} className="inline mr-2" /> Go to Home
        </Link>
      </div>
    );
  }

  // Split tags string into an array for mapping
  const tagsArray = game.tags ? game.tags.split(",") : [];

  return (
    <div className="relative min-h-screen bg-gray-900/95 overflow-hidden">
      <title>{game.title} - Details</title>

      {/* Background/Static Element: Subtle Dark Gradient/Noise */}
      <div
        className="absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.2'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Top Static Bar / Title Banner */}
      <div className="sticky top-0 z-10 w-full bg-gray-800 shadow-xl border-b border-cyan-500/50">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-cyan-400 animate-pulse">
            {game.title}
          </h1>
          <p className="text-xl font-bold text-yellow-500 flex items-center gap-2">
            {game.ratings} <GoStarFill size={24} />
          </p>
        </div>
      </div>

      {/* Main Content Container (w-7xl & mx-auto maintained) */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-0">
        {/* Cover Image & Overview (Top Section) */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 border-4 border-gray-700/50">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-[50vh] object-cover"
          />
          {/* Dark gradient overlay for title contrast and description */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            <h2 className="text-5xl font-black text-white drop-shadow-lg mb-4">
              {game.title}
            </h2>
            {/* Big Description */}
            <p className="text-gray-400 max-w-3xl text-lg leading-relaxed line-clamp-3">
              {game.description}
            </p>
          </div>
        </div>

        {/* Main Action Bar */}
        <div className="w-full p-4 bg-gray-800 rounded-lg shadow-2xl mb-10 border border-cyan-500/50 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          <p className="text-xl font-semibold text-gray-200 hidden sm:block">
            Ready to dive in?
          </p>
          <div className="flex gap-4">
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              <FaCloudDownloadAlt size={20} /> <span>Download Now</span>
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-cyan-400 border border-cyan-400/50 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 shadow-xl"
            >
              <FaHome size={20} /> <span>Go Home</span>
            </Link>
          </div>
        </div>

        {/* Two-Column Details Layout - Specifications and Trailer (Now merged into two main blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Specifications */}
          <div className="lg:col-span-1 p-6 bg-gray-800 rounded-xl shadow-xl space-y-4 border border-cyan-500/20 h-fit">
            <h3 className="text-2xl font-bold border-b border-gray-700 pb-2 text-cyan-400 flex items-center gap-3">
              <FaChartBar size={24} /> <span>Specifications</span>
            </h3>
            <DetailItem
              icon={FaGamepad}
              label="Developer"
              value={game.developer}
            />
            <DetailItem icon={FaTags} label="Category" value={game.category} />
            <DetailItem
              icon={FaCalendarAlt}
              label="Release Date"
              value={game.releaseDate}
            />
            <DetailItem
              icon={FaUsers}
              label="Platforms"
              value={game.platforms}
            />
            <DetailItem icon={FaGamepad} label="Modes" value={game.modes} />

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                Game Tags:
              </h4>
              <div className="flex flex-wrap gap-2">
                {tagsArray.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-900/50 text-cyan-200 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/50"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Trailer Section */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-cyan-400 flex items-center gap-3">
                <FaVideo size={24} /> <span>Game Trailer</span>
              </h3>
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-gray-700">
                <p className="text-gray-400 text-center py-8">
                  Embedded Trailer Player Goes Here (or iframe with src=
                  {game.videoTrailer})
                  <br />
                  <a
                    href={game.videoTrailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline hover:text-cyan-200 mt-2 block"
                  >
                    Watch Trailer on External Site
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
