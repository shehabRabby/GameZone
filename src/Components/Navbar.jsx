import React, { useState } from "react";

import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My Profile", path: "/myprofile" },
    { name: "Game Details", path: "/gameDetails" },
    { name: "Login", path: "/signin" },
    { name: "Registration", path: "/signup" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d1117]  shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide flex items-center gap-2"
        >
          🎮 <span className="text-[#58a6ff]">GameZone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 hover:text-[#58a6ff] ${
                  isActive ? "text-[#58a6ff]" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#58a6ff] transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#161b22] text-gray-200 flex flex-col items-center gap-4 py-5 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium transition-colors duration-300 hover:text-[#58a6ff] ${
                  isActive ? "text-[#58a6ff]" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
