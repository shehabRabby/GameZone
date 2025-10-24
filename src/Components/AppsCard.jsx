import React from 'react';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router';

const AppsCard = ({game}) => {
    return (
         <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
      <img
        src={game.coverPhoto}
        alt={game.title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4 space-y-2'>
        <h2 className='text-xl font-semibold'>{game.title}</h2>
        <p className='text-sm text-gray-600'>{game.category}</p>
        <p className='text-gray-700 text-sm min-h-15'>{game.description}</p>
        <p className='text-orange-600 font-bold flex items-center gap-2'>
          Rating: {game.ratings} <GoStarFill size={20} />
        </p>

        {/* Download Button */}
        <a
          href={game.downloadLink}
          target='_blank'
          className='inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
        >
          Download
        </a>

        {/* See Details Button */}
        <Link
          to={`/gameDetails`}
          state={{ game }}
          className='inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors ml-2'
        >
          See Details
        </Link>
      </div>
    </div>
 
    );
};

export default AppsCard;