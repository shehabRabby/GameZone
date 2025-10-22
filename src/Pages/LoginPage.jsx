import React from "react";
import bgImage from "../assets/pubg6.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="min-h-[332px]">
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>

        <div className="flex flex-col items-center text-center text-white space-y-8 px-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold animate-bounce">
            Login now and step into the ultimate{" "}
            <span className="text-yellow-400">battleground</span>.
          </h1>

          {/* Login Card */}
          <div className="card bg-white/10 backdrop-blur-md border border-white/20  w-full max-w-sm transition-all duration-300 lg:mr-150">
            <div className="card-body text-start">
             {/* form  */}
              <form className="space-y-3">
                {/* email  */}
                <label className="text-white font-semibold text-sm">Email</label>
                <input
                  type="email"
                  className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
                  placeholder="Enter your email"
                />

                {/* password  */}
                <label className="text-white font-semibold text-sm">Password</label>
                <input
                  type="password"
                  className="input w-full bg-white/70 text-black placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
                  placeholder="Enter your password"
                />

                {/* forgetpass  */}
                <div className="text-right">
                  <a className="link link-hover text-sm text-yellow-300 hover:text-yellow-400 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Google */}
                <button className="btn bg-white/70 w-full text-black border-[#e5e5e5]">
                  <FcGoogle size={25}></FcGoogle> Login with Google
                </button>

                <button className="btn w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-none text-white font-bold text-lg shadow-md hover:scale-102 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] transition-transform duration-200">
                  Login
                </button>
                <p>
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="underline hover:text-orange-400 font-semibold"
                  >
                    Register
                  </Link>{" "}
                  now and enter the arena.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
