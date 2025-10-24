import React from 'react';

import { GoStarFill } from 'react-icons/go';
import { Link, useLocation, useNavigate } from 'react-router';
import { RingLoader } from 'react-spinners';

const GameDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { game } = location.state || {}; 

  if (!game) {
    return (
       <div className="text-center my-10 min-h-[332px] flex flex-col items-center justify-center gap-4">
          <RingLoader size={150} color='#2209DE'/>
          <p className="text-lg font-medium">
            Game data not found! Go to homepage and press See Details
          </p>
          <Link
            to="/"
            className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </Link>
       </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
  <h1 className="text-3xl text-center py-3 font-serif">Game Details :</h1>

  <img
    src={game.coverPhoto}
    alt={game.title}
    className="w-full h-74 object-cover"
  />

  <div className="p-6 space-y-4">
    <h1 className="text-2xl font-bold">{game.title}</h1>
    <p className="text-gray-600">
      <span className="font-extrabold">Developer:</span> {game.developer}
    </p>
    <p className="text-gray-600">
      <span className="font-extrabold">Category:</span> {game.category}
    </p>
    <p className="text-gray-700">{game.description}</p>
    <p className="text-orange-600 font-bold flex items-center gap-2">
      Rating: {game.ratings} <GoStarFill size={20} />
    </p>

    {/* Download Button */}
    <a
      href={game.downloadLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      Download Me
    </a>

    {/* Go to Home Button */}
    <Link
      to="/"
      className="inline-block mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors ml-2"
    >
      Go to Home
    </Link>
  </div>
</div>
  );
};

export default GameDetails;
