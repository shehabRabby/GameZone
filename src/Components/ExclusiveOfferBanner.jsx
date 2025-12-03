import React from "react";
// Assuming you have access to icons like FaTrophy and FaBolt
import { FaTrophy, FaBolt, FaArrowRight, FaFire } from "react-icons/fa";

const ExclusiveOfferBanner = () => {
  return (
    // Outer container for padding and section background
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto sm:px-6 p-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-12 tracking-tight flex flex-wrap items-center justify-center gap-3 px-3">
          <FaFire className="text-red-500 flex-shrink-0" size={48} />
          <span className="leading-tight">Hot Drops & Exclusive Deals</span>
        </h2>

        <div
          className="relative p-1 overflow-hidden rounded-3xl shadow-2xl bg-gray-900 
                          transform transition-all duration-500 hover:scale-[1.01] hover:shadow-cyan-500/50"
        >
          <div
            className="absolute inset-0 z-0 rounded-3xl opacity-40 blur-lg"
            style={{
              background: "linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)",
              animation: "pulse-border 6s infinite alternate",
            }}
          ></div>

          {/* Main Content Area */}
          <div className="relative z-10 bg-gray-800 rounded-[calc(1.5rem-4px)] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-red-600/20 px-4 py-1 text-sm font-bold text-red-400 uppercase tracking-widest mb-4 border border-red-500/50">
                <FaBolt className="mr-2 text-red-600 animate-pulse" /> LIMITED
                TIME
              </span>

              <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 leading-tight mb-4">
                20% OFF ALL "LEGENDARY" SKINS
              </h3>

              <p className="text-xl text-gray-300 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-6">
                Unlock the rarest gear and dominate the leaderboard. This
                massive discount ends soon—upgrade your arsenal now!
              </p>

              {/* Call to Action */}
              <button
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-extrabold rounded-full 
                                       shadow-2xl shadow-cyan-500/40 transition-all duration-300 transform hover:scale-[1.03] hover:from-cyan-700 hover:to-teal-600"
                onClick={() => console.log("Navigate to Offers Page")}
              >
                Claim Your Loot
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/*Trophy */}
            <div className="lg:w-2/5 flex justify-center items-center relative p-4 lg:p-0">
              <FaTrophy className="w-48 h-48 text-cyan-400/90 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] animate-pulse-slow" />
            </div>
          </div>
        </div>

        {/* Adding Custom Keyframes for the Animation*/}
        <style jsx global>{`
          @keyframes pulse-border {
            0% {
              filter: hue-rotate(0deg);
              opacity: 0.4;
            }
            50% {
              filter: hue-rotate(180deg);
              opacity: 0.6;
            }
            100% {
              filter: hue-rotate(360deg);
              opacity: 0.4;
            }
          }
          @keyframes pulse-slow {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s infinite ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ExclusiveOfferBanner;
