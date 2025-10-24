import React from "react";
import mission from "../assets/pubg10.png";
import mission1 from "../assets/pubg1.png";
import mission2 from "../assets/pubg11.png";

const AboutUs = () => {
  return (
    <div className="min-h-[332px]">
      <section>
        <div
          className="relative w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-your-gaming-banner.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fadeIn mb-4">
              Welcome to GameHub
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-2xl text-gray-200 animate-fadeIn delay-500">
              Your ultimate destination for games, news, and community
            </p>
          </div>
        </div>
      </section>

      <section>
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
            {/* Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img
                src={mission2}
                alt="Our Mission Illustration"
                className="w-full max-w-lg rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                At GameHub, we’re passionate about connecting gamers worldwide.
                Our mission is to provide a one-stop platform where players can
                explore games, share reviews, and discover new experiences every
                day.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
            {/* Text */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Plan
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                At GameHub, we aim to expand our community and bring the best
                gaming experiences to players worldwide. Our plan includes
                exclusive guides, interactive discussions, and partnerships with
                top indie developers to keep our platform fresh and exciting.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={mission}
                alt="Our Plan Illustration"
                className="w-full max-w-lg rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-20 px-4 text-black">
          <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">
            Our Story
          </h2>

          {/* Timeline */}
          <div className="relative border-l-2 border-gray-600 ml-4 md:ml-0">
            {/* Timeline Item 1 */}
            <div className="mb-10 ml-6 md:ml-12 relative">
              <span className="absolute -left-4 md:-left-6 top-0 bg-blue-600 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-semibold  mb-2">How It Started</h3>
              <p>
                GameHub began as a small community of passionate gamers sharing
                reviews and tips online.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-10 ml-6 md:ml-12 relative">
              <span className="absolute -left-4 md:-left-6 top-0 bg-green-500 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-semibold  mb-2">Key Milestones</h3>
              <p>
                Launched in 2021, reached 10k users by 2022, and partnered with
                top indie game developers.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="mb-10 ml-6 md:ml-12 relative">
              <span className="absolute -left-4 md:-left-6 top-0 bg-yellow-500 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-semibold  mb-2">Community Growth</h3>
              <p>
                Today, GameHub hosts thousands of gamers worldwide, sharing
                experiences, guides, and reviews daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Game Reviews & Ratings
              </h3>
              <p className="text-gray-300">
                Read honest reviews and rate your favorite games.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Latest News & Updates
              </h3>
              <p className="text-gray-300">
                Stay updated with gaming news and trending releases.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Discussions
              </h3>
              <p className="text-gray-300">
                Join discussions, share tips, and connect with gamers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Exclusive Content & Guides
              </h3>
              <p className="text-gray-300">
                Access guides, tutorials, and exclusive gaming content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Meet Our Team
          </h2>

          {/* Team Grid / Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 text-center">
              <img
                src={mission1}
                alt="Alex"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Alex</h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 text-center">
              <img
                src={mission1}
                alt="Sophie"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Sophie</h3>
              <p className="text-gray-300">Lead Designer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 text-center">
              <img
                src={mission1}
                alt="Ryan"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Ryan</h3>
              <p className="text-gray-300">Community Manager</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 text-center">
              <img
                src={mission1}
                alt="Sophie"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Sophie</h3>
              <p className="text-gray-300">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
