import React from "react";
import mission from "../assets/pubg10.png";
import mission2 from "../assets/pubg11.png";
import ReactMotion from "../Components/ReactMotion";

const AboutUs = () => {
  return (
    <div className="min-h-[332px]">
      <section>
        <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-gaming-banner.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fadeIn mb-4">Welcome to GameHub</h1>
            <p className="text-lg md:text-2xl text-gray-200 animate-fadeIn delay-500">
              Your ultimate destination for games, news, and community
            </p>
          </div>
        </div>
      </section>
      <ReactMotion></ReactMotion>
      <section>
        <section className="md:py-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={mission2} alt="Our Mission Illustration" className="w-full max-w-lg rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"/>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"> Our Mission</h2>
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
        <section className=" py-10 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 mt-4 md:mb-0">
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

            <div className="md:w-1/2 flex justify-center">
              <img src={mission} alt="Our Plan Illustration" className="w-full max-w-lg rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"/>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-5 px-2 text-black">
          <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">Our Story</h2>
          <div className="relative border-l-10 border-blue-400 ml-4 md:ml-0">
           
            <div className="mb-10 ml-6 md:ml-12 relative">
              <span className="absolute -left-5 md:-left-6 top-2 bg-blue-600 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-semibold  mb-2 text-blue-600">How It Started</h3>
              <p> GameHub began as a small community of passionate gamers sharing reviews and tips online.</p>
            </div>

            
            <div className="mb-10 ml-6 md:ml-12 relative">
              <span className="absolute -left-5 md:-left-6 top-2 bg-green-500 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-semibold  mb-2 text-green-500">Key Milestones</h3>
              <p> Launched in 2021, reached 10k users by 2022, and partnered with top indie game developers.</p>
            </div>

            
            <div className="mb-10 ml-6 md:ml-12 relative">
              <span className="absolute -left-5 md:-left-6 top-2 bg-yellow-500 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-semibold  mb-2 text-yellow-500 ">Community Growth</h3>
              <p> Today, GameHub hosts thousands of gamers worldwide, sharing experiences, guides, and reviews daily.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-sky-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Game Reviews & Ratings
              </h3>
              <p className="text-gray-600">
                Read honest reviews and rate your favorite games.
              </p>
            </div>

            <div className="bg-yellow-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Latest News & Updates
              </h3>
              <p className="text-gray-600">
                Stay updated with gaming news and trending releases.
              </p>
            </div>
            
            <div className="bg-orange-400 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Discussions
              </h3>
              <p className="text-gray-500">
                Join discussions, share tips, and connect with gamers.
              </p>
            </div>

            <div className="bg-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Exclusive Content & Guides
              </h3>
              <p className="text-gray-600">
                Access guides, tutorials, and exclusive gaming content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto my-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12"> Meet Our Team </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-300 rounded-xl shadow-lg p-4 text-center">
              <img
                src="https://img.freepik.com/free-photo/confident-points-himselfe-young-handsome-guy-wearing-green-t-shirt-isolated-green-background_141793-138994.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Alex"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-2xl"
              />
              <h3 className="text-xl font-semibold text-white">Alex Dean</h3>
              <p className="text-white">Founder & CEO</p>
            </div>

            <div className="bg-violet-400 rounded-xl shadow-lg p-4 text-center">
              <img
                 src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME="
                alt="Sophie"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-2xl"
              />
              <h3 className="text-xl font-semibold text-white">David James</h3>
              <p className="text-white">Lead Designer</p>
            </div>

            <div className="bg-emerald-950 rounded-xl shadow-lg p-4 text-center">
              <img
                src="https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=612x612&w=0&k=20&c=NtTebZxpAfw964hJJut8WFa__eZEfO07CAKdqeFBrFU="
                alt="Ryan"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-3xl"
              />
              <h3 className="text-xl font-semibold text-white">Ryan Roy</h3>
              <p className="text-gray-300">Community Manager</p>
            </div>

            <div className="bg-rose-800 rounded-xl shadow-lg p-4 text-center">
              <img
                src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA="
                alt="Sophie"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-2xl"
              />
              <h3 className="text-xl font-semibold text-white">Sophie Sen</h3>
              <p className="text-gray-300">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
