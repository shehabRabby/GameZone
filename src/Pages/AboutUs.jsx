import React from "react";
import mission from "../assets/pubg10.png";
import mission2 from "../assets/pubg11.png";
import ReactMotion from "../Components/ReactMotion";
import { BookOpen, Check, Handshake, Link, Target, TrendingUp, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-[332px]">
    <title>GameZone-About Us</title>
     <section className="relative w-full h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-1000 transform hover:scale-105" 
          style={{ 
            backgroundImage: "url('https://placehold.co/1600x900/1e293b/ffffff?text=Epic+Gaming+Adventure')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Dark Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-65 flex flex-col justify-center items-center text-center px-6 py-12">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
            <span className="text-indigo-400">GAME</span>ZONE
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl font-light">
            Your ultimate destination for games, news, reviews, and a global gaming community.
          </p>
          
          {/* CTA Button */}
          <a 
            href="/" 
            className="px-8 py-2 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105 ring-4 ring-indigo-300 ring-opacity-50 uppercase tracking-wider cursor-pointer"
          >
            Explore Trending Games
          </a>
        </div>
      </section>
      <ReactMotion></ReactMotion>

      <section className="py-5 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            
            {/* Text Content */}
            <div className="md:w-1/2 order-2 md:order-1 px-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                WHO WE ARE
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight flex items-center"> 
                <Target className="h-10 w-10 text-indigo-500 mr-4 flex-shrink-0 hidden sm:inline" />
                Our Mission: Connecting Gamers Worldwide
              </h3>
              
              {/* Core Statement with Border Emphasis */}
              <p className="text-gray-700 text-xl leading-relaxed border-l-4 border-indigo-400 pl-4 py-1">
                At **GameHub**, we're driven by the goal of creating a central, trustworthy platform where every player 
                can easily explore, review, and discover the next great gaming experience.
              </p>

              {/* Mission Pillars (using React Icons) */}
              <ul className="mt-6 space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Provide honest, comprehensive, and **up-to-date game reviews**.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Foster a **vibrant, inclusive community** for discussion and tips.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Highlight **emerging indie titles** alongside major releases.</span>
                </li>
              </ul>
            </div>
            
            {/* Image Container */}
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center mb-10 md:mb-0 px-4">
              <img 
                src={mission2} 
                alt="Our Mission Illustration" 
                className="w-full max-w-lg object-cover h-auto rounded-3xl shadow-2xl transition duration-500 hover:scale-[1.02] border-4 border-indigo-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Light Background */}
      <section className="py-20 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-12">
            
            {/* Image Container */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 px-4">
              <img 
                src={mission} 
                alt="Our Plan Illustration" 
                className="w-full max-w-lg object-cover h-auto rounded-3xl shadow-2xl transition duration-500 hover:scale-[1.02] border-4 border-indigo-100"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 order-2 px-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                OUR STRATEGY
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight flex items-center"> 
                Future-Proofing Gaming Discovery
                <TrendingUp className="h-10 w-10 text-indigo-600 ml-4 flex-shrink-0 hidden sm:inline" />
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                We are focused on implementing three core strategic initiatives to **expand our global reach** and ensure GameHub remains the essential resource for gamers everywhere.
              </p>

              {/* Plan Initiatives (using React Icons) */}
              <ul className="mt-6 space-y-4 text-lg text-gray-700">
                {/* Content Deep Dive */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-1">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span><span className="font-semibold text-gray-900">Content Deep Dive:</span> Launching exclusive guides and in-depth tutorials for complex titles.</span>
                </li>
                {/* Strategic Partnerships */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-1">
                    <Handshake className="h-4 w-4" />
                  </div>
                  <span><span className="font-semibold text-gray-900">Strategic Partnerships:</span> Securing more alliances with top-tier indie developers.</span>
                </li>
                {/* Platform Enhancement */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-1">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span><span className="font-semibold text-gray-900">Platform Enhancement:</span> Upgrading discussion forums and adding live chat features.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-10">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 class="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">
            Our Journey: The GameHub Story 
          </h2>
      
          <div class="relative">
            
            <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200 lg:left-1/2 lg:-translate-x-1/2"></div>
      
            <div class="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
              <div class="order-2 lg:order-1 lg:w-5/12 ml-10 lg:ml-0 lg:text-right">
                <h3 class="text-2xl font-bold text-indigo-600 mb-1">How It Started</h3>
                <p class="text-gray-700">
                  GameHub began as a small, passionate community of gamers sharing reviews and tips on a simple platform.
                </p>
              </div>
              <div class="order-1 lg:order-2 w-12 h-12 absolute left-0 lg:static flex items-center justify-center lg:w-1/12">
                <div class="bg-indigo-600 w-4 h-4 rounded-full border-4 border-indigo-100 shadow-md"></div>
              </div>
              <div class="order-3 lg:order-3 lg:w-5/12 ml-10 lg:ml-0">
                <p class="text-sm font-semibold text-gray-400 mt-2 lg:mt-0 lg:text-left">2020</p>
              </div>
            </div>
      
            <div class="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
              <div class="order-3 lg:order-1 lg:w-5/12 ml-10 lg:ml-0 lg:text-right">
                <p class="text-sm font-semibold text-gray-400 mt-2 lg:mt-0">2021 - 2022</p>
              </div>
              <div class="order-1 lg:order-2 w-12 h-12 absolute left-0 lg:static flex items-center justify-center lg:w-1/12">
                <div class="bg-indigo-600 w-4 h-4 rounded-full border-4 border-indigo-100 shadow-md"></div>
              </div>
              <div class="order-2 lg:order-3 lg:w-5/12 ml-10 lg:ml-0">
                <h3 class="text-2xl font-bold text-indigo-600 mb-1">Key Milestones</h3>
                <p class="text-gray-700">
                  Officially launched, we reached 10k users and secured key partnerships with top indie game developers.
                </p>
              </div>
            </div>
      
            <div class="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
              <div class="order-2 lg:order-1 lg:w-5/12 ml-10 lg:ml-0 lg:text-right">
                <h3 class="text-2xl font-bold text-indigo-600 mb-1">Global Community</h3>
                <p class="text-gray-700">
                  Today, GameHub hosts thousands of engaged gamers worldwide, sharing insights, guides, and reviews daily.
                </p>
              </div>
              <div class="order-1 lg:order-2 w-12 h-12 absolute left-0 lg:static flex items-center justify-center lg:w-1/12">
                <div class="bg-indigo-600 w-4 h-4 rounded-full border-4 border-indigo-100 shadow-md"></div>
              </div>
              <div class="order-3 lg:order-3 lg:w-5/12 ml-10 lg:ml-0">
                <p class="text-sm font-semibold text-gray-400 mt-2 lg:mt-0 lg:text-left">Present</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section class="bg-white py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 class="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">
            Services Built for Gamers 
          </h2>
      
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div class="group p-8 rounded-xl border border-gray-200 shadow-lg bg-gray-50 hover:bg-indigo-50 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div class="flex flex-col items-center text-center">
                <div class="p-3 mb-4 rounded-full bg-indigo-100 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.892c.38-.613 1.25-.613 1.63 0l1.433 2.302 2.659.387c.677.098.948.88.468 1.353l-1.928 1.88.455 2.646c.117.68-.591 1.205-1.218.878L12 11.5l-2.37.587c-.627.327-1.335-.198-1.218-.878l.455-2.646-1.928-1.88c-.48-.473-.209-1.255.468-1.353l2.659-.387L11.049 2.892zM15 15h3m-3 0h-3m3 0v3m0-3v-3M9 19a2 2 0 11-4 0 2 2 0 014 0zM19 19a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Game Reviews & Ratings
                </h3>
                <p class="text-gray-600">
                  Read honest reviews, check scores, and rate your favorite releases.
                </p>
              </div>
            </div>
      
            <div class="group p-8 rounded-xl border border-gray-200 shadow-lg bg-gray-50 hover:bg-indigo-50 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div class="flex flex-col items-center text-center">
                <div class="p-3 mb-4 rounded-full bg-indigo-100 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v10m-2 2a2 2 0 002-2V7m-4 5h5"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Latest News & Updates
                </h3>
                <p class="text-gray-600">
                  Stay updated with daily gaming news, announcements, and trending topics.
                </p>
              </div>
            </div>
            
            <div class="group p-8 rounded-xl border border-gray-200 shadow-lg bg-gray-50 hover:bg-indigo-50 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div class="flex flex-col items-center text-center">
                <div class="p-3 mb-4 rounded-full bg-indigo-100 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m-5.414 0A2 2 0 015 14V6a2 2 0 012-2h10a2 2 0 012 2v2"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Active Community Forums
                </h3>
                <p class="text-gray-600">
                  Join discussions, share tips, and connect with fellow gamers globally.
                </p>
              </div>
            </div>
      
            <div class="group p-8 rounded-xl border border-gray-200 shadow-lg bg-gray-50 hover:bg-indigo-50 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div class="flex flex-col items-center text-center">
                <div class="p-3 mb-4 rounded-full bg-indigo-100 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.229 4.907 7.6 5.097M12 6.253c1.08 0 2.15.228 3.11.662M12 6.253A8.962 8.962 0 0112 18.253m-4.5-5.52a4.5 4.5 0 019 0"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Exclusive Guides & Wikis
                </h3>
                <p class="text-gray-600">
                  Access walkthroughs, tutorials, build guides, and hidden game content.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section class=" py-10">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 class="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight">
            Meet Our Exceptional Team
          </h2>
      
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div class="p-8 text-center">
                <img
                  src="https://img.freepik.com/free-photo/confident-points-himselfe-young-handsome-guy-wearing-green-t-shirt-isolated-green-background_141793-138994.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Alex Dean"
                  class="w-36 h-36 mx-auto rounded-full object-cover mb-6 border-4 border-indigo-500/50"
                />
                <h3 class="text-2xl font-semibold text-gray-900 mb-1">Alex Dean</h3>
                <p class="text-indigo-600 font-medium">Founder & CEO</p>
                <div class="mt-4 flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-indigo-600 transition duration-150">
                    <i class="fab fa-linkedin-in"></i> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.565-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.387 7 3.535v5.7z"/></svg>
                  </a>
                </div>
              </div>
            </div>
      
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div class="p-8 text-center">
                <img
                  src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME="
                  alt="David James"
                  class="w-36 h-36 mx-auto rounded-full object-cover mb-6 border-4 border-indigo-500/50"
                />
                <h3 class="text-2xl font-semibold text-gray-900 mb-1">David James</h3>
                <p class="text-indigo-600 font-medium">Lead Designer</p>
                <div class="mt-4 flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-indigo-600 transition duration-150">
                    <i class="fab fa-linkedin-in"></i> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.565-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.387 7 3.535v5.7z"/></svg>
                  </a>
                </div>
              </div>
            </div>
      
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div class="p-8 text-center">
                <img
                  src="https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=612x612&w=0&k=20&c=NtTebZxpAfw964hJJut8WFa__eZEfO07CAKdqeFBrFU="
                  alt="Ryan Roy"
                  class="w-36 h-36 mx-auto rounded-full object-cover mb-6 border-4 border-indigo-500/50"
                />
                <h3 class="text-2xl font-semibold text-gray-900 mb-1">Ryan Roy</h3>
                <p class="text-indigo-600 font-medium">Community Manager</p>
                 <div class="mt-4 flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-indigo-600 transition duration-150">
                    <i class="fab fa-linkedin-in"></i> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.565-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.387 7 3.535v5.7z"/></svg>
                  </a>
                </div>
              </div>
            </div>
      
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div class="p-8 text-center">
                <img
                  src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA="
                  alt="Sophie Sen"
                  class="w-36 h-36 mx-auto rounded-full object-cover mb-6 border-4 border-indigo-500/50"
                />
                <h3 class="text-2xl font-semibold text-gray-900 mb-1">Sophie Sen</h3>
                <p class="text-indigo-600 font-medium">Lead Designer</p>
                 <div class="mt-4 flex justify-center space-x-3">
                  <a href="#" class="text-gray-400 hover:text-indigo-600 transition duration-150">
                    <i class="fab fa-linkedin-in"></i> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.565-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.387 7 3.535v5.7z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
