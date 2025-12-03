import React from "react";
import {
  FaCheckCircle,
  FaUserFriends,
  FaGamepad,
  FaLaptopCode,
} from "react-icons/fa";

const GameStats = () => {
  return (
    <div className="bg-gray-900/75 text-white min-h-screen py-12 space-y-16">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-[#58a6ff]">
          Game<span className="text-white">Zone</span> Stats
        </h1>
        <p className="text-gray-300 max-w-2xl px-1 mx-auto">
          A modern platform for gamers to explore, discover, and enjoy trending
          games with smooth animations, responsive layouts, and secure profiles.
        </p>
      </header>

      {/* Why GameZone */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <FaUserFriends className="text-[#58a6ff] text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">User-Centric Design</h2>
          <p className="text-gray-300">
            Smooth animations, responsive layouts, and easy navigation.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <FaLaptopCode className="text-[#58a6ff] text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Top-Notch Tech Stack</h2>
          <p className="text-gray-300">
            Built with React, Tailwind CSS, Firebase, and modern best practices.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <FaCheckCircle className="text-[#58a6ff] text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Secure & Reliable</h2>
          <p className="text-gray-300">
            Authentication, profile management, and reliable platform
            performance.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Games</h2>
          <p className="text-3xl font-bold text-[#58a6ff]">120</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-[#58a6ff]">5,000+</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Games Played</h2>
          <p className="text-3xl font-bold text-[#58a6ff]">15,000+</p>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-7xl mx-auto bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-center text-[#58a6ff]">
          Fun Facts
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Most popular game: Space Battle</li>
          <li>Total newsletter signups: 1,200+</li>
          <li>Top played genre: Action Games</li>
          <li>Platform launched: 2025</li>
          <li>Games explored by users: 10,000+</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-[#58a6ff]">User Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <p className="text-gray-300">
              “GameZone makes discovering games effortless. The UI is clean and
              fun!”
            </p>
            <span className="block mt-4 font-semibold text-[#58a6ff]">
              – John D.
            </span>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <p className="text-gray-300">
              “I love the newsletter and game sliders. Very professional!”
            </p>
            <span className="block mt-4 font-semibold text-[#58a6ff]">
              – Sara M.
            </span>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold text-[#58a6ff]">
          Built With Modern Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-1 mt-4 text-gray-300">
          <span><a href="https://reactrouter.com/" target="_blank">React</a></span>
          <span ><a href="https://tailwindcss.com/" target="_blank"> Tailwind CSS</a></span>
          <span><a  target="_blank" href="https://firebase.google.com/?gclsrc=aw.ds&gad_source=1&gad_campaignid=20100026061&gbraid=0AAAAADpUDOi-z8-IhmxsqVX8QEh5k5qGN&gclid=CjwKCAiA3L_JBhAlEiwAlcWO52hiS4NudZeA0aHESuVyv4sEZeSlcn9rrxZ3jvOERNv5MOh82rYyOxoCe_IQAvD_BwE">Firebase</a></span>
          <span><a href="https://daisyui.com/" target="_blank">DaisyUI</a></span>
          <span><a href="https://react-icons.github.io/react-icons/" target="_blank">React Icons</a></span>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center mt-12">
        <a
          href="/"
          className="bg-green-600 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition"
        >
          Explore Games →
        </a>
      </footer>
    </div>
  );
};

export default GameStats;
