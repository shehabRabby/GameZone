import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { PuffLoader } from "react-spinners"; 
import { FaGamepad } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, loading } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Game Details", path: "/gameDetails" },
    { name: "Game Stats", path: "/game-stats" },
  ];

  return (
 <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-xl border-b-2 border-cyan-500/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-wider flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]">
          <span className="h-9 w-9 flex items-center justify-center rounded-full bg-cyan-500 text-gray-900 shadow-lg">
            <FaGamepad size={20} />
          </span> 
          <span className="text-white hover:text-cyan-400 transition-colors duration-300">
            <span className="text-cyan-500">Game</span>Zone
          </span>
        </Link>
        
        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}
              className={({ isActive }) =>
                `text-base font-medium relative transition-all duration-300 group ${
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
                }`
              }
            >
              {link.name}
              {/* Animated underline indicator */}
              <span className={`absolute bottom-[-6px] left-0 w-full h-[2px] bg-cyan-400 transform transition-transform duration-300 ${
                  ({ isActive }) => isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-75"
              }`}></span>
            </NavLink>
          ))}

          {/* User Status/Auth Links */}
          {loading ? (
            <div className="flex justify-center items-center">
              <PuffLoader color="#06b6d4" size={36} /> {/* Updated color to cyan */}
            </div>
          ) : user ? (
            <Link to="/myprofile" className="relative group">
              <img
                src={user?.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-cyan-500/50"
              />
            </Link>
          ) : (
            <>
              {/* LOGIN Button (Gradient for prominence) */}
              <NavLink
                to="/signin"
                className="px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg transform hover:-translate-y-0.5"
              >
                Login
              </NavLink>

              {/* REGISTRATION Button (Outline/Secondary) */}
              <NavLink
                to="/signup"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                Registration
              </NavLink>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-gray-300 hover:text-cyan-400 transition" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU (Updated background and spacing) */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 text-gray-200 flex flex-col items-center gap-6 py-6 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-cyan-400 border-b border-cyan-400" : "text-gray-300 hover:text-cyan-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile User Status/Auth Links */}
          {loading ? (
            <PuffLoader color="#06b6d4" size={40} />
          ) : user ? (
            <Link to="/myprofile" onClick={() => setOpen(false)}>
              <img
                src={user?.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-cyan-500 shadow-lg"
              />
            </Link>
          ) : (
            <div className="flex flex-col gap-3 pt-2 w-full px-8">
              <NavLink to="/signin" onClick={() => setOpen(false)} className="text-center w-full py-2 text-base font-bold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">Login</NavLink>
              <NavLink to="/signup" onClick={() => setOpen(false)} className="text-center w-full py-2 text-base font-medium rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400">Registration</NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
