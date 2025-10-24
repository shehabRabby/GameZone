import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600 text-white text-center p-6">
     <title>GameZone-Error</title>
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-md w-full animate-fadeIn">
        <FaExclamationTriangle className="text-yellow-300 text-6xl mb-4 mx-auto animate-bounce" />
        <h1 className="text-6xl font-extrabold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-200 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Go Home 🏠
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
