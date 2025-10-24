import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { PuffLoader } from "react-spinners"; // spinner

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, loading } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Game Details", path: "/gameDetails" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d1117] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LEFT SIDE - Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide flex items-center gap-2"
        >
          🎮 <span className="text-[#58a6ff]">GameZone</span>
        </Link>

        {/* RIGHT SIDE - Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Navigation Links */}
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

          {/* Show spinner while loading */}
          {loading ? (
            <div className="flex justify-center items-center">
              <PuffLoader color="#58a6ff" size={36} />
            </div>
          ) : user ? (
            // ✅ Show profile if logged in
            <Link to="/myprofile">
              <img
                src={user?.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-[#58a6ff] hover:scale-105 transition-transform duration-200"
              />
            </Link>
          ) : (
            // ✅ Show Login + Registration if NOT logged in
            <>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 hover:text-[#58a6ff] ${
                    isActive ? "text-[#58a6ff]" : "text-gray-300"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 hover:text-[#58a6ff] ${
                    isActive ? "text-[#58a6ff]" : "text-gray-300"
                  }`
                }
              >
                Registration
              </NavLink>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300 hover:text-[#58a6ff] transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#161b22] text-gray-200 flex flex-col items-center gap-4 py-5 animate-fadeIn">
          {/* Mobile Links */}
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

          {/* Mobile Auth Section */}
          {loading ? (
            <PuffLoader color="#58a6ff" size={40} />
          ) : user ? (
            <Link to="/myprofile" onClick={() => setOpen(false)}>
              <img
                src={user?.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-[#58a6ff]"
              />
            </Link>
          ) : (
            <>
              <NavLink
                to="/signin"
                onClick={() => setOpen(false)}
                className="text-base font-medium hover:text-[#58a6ff]"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setOpen(false)}
                className="text-base font-medium hover:text-[#58a6ff]"
              >
                Registration
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
