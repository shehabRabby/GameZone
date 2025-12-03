import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaGamepad,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-gray-300 py-10  border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link
            to="/"
            className="text-2xl font-black tracking-wider flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="h-9 w-9 flex items-center justify-center rounded-full bg-cyan-500 text-gray-900 shadow-lg">
              <FaGamepad size={20} />
            </span>
            <span className="text-white hover:text-cyan-400 transition-colors duration-300">
              <span className="text-cyan-500">Game</span>Zone
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Your ultimate destination for discovering and downloading the best
            games. Explore, play, and level up your gaming world!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-[#58a6ff]">
              Home
            </Link>
            <Link to="/gameDetails" className="hover:text-[#58a6ff]">
              Games
            </Link>
            <Link to="/myprofile" className="hover:text-[#58a6ff]">
              My Profile
            </Link>
            <Link to="/signin" className="hover:text-[#58a6ff]">
              Login
            </Link>
            <Link to="/signup" className="hover:text-[#58a6ff]">
              Register
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link to="/aboutus" className="hover:text-[#58a6ff]">
              About Us
            </Link>
            <Link to="/aboutus" className="hover:text-[#58a6ff]">
              Contact
            </Link>
            <Link to="/" className="hover:text-[#58a6ff]">
              FAQ
            </Link>
            <Link to="/" className="hover:text-[#58a6ff]">
              Terms & Conditions
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#58a6ff]">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#58a6ff]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#58a6ff]">
              <FaDiscord />
            </a>
            <a href="#" className="hover:text-[#58a6ff]">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-800 pt-6 text-sm text-gray-500">
        Develop By Md.Shehab Al Rabby © {new Date().getFullYear()}{" "}
        <span className="text-[#58a6ff] font-semibold">GameZone</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
