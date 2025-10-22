import { HandRaisedIcon } from '@heroicons/react/16/solid';
import { CalendarDaysIcon } from 'lucide-react';
import React from 'react';


const NewsLetter = () => {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-500 py-16 sm:py-24 lg:py-32  shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left Side */}
          <div className="max-w-xl lg:max-w-lg text-white">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Subscribe for Game Updates 🎮
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Get early access to new releases, exclusive offers, and trending
              games every week — straight to your inbox.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/30 bg-white/40 px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-white outline-none"
              /> 
              <button
                type="submit"
                className="rounded-lg bg-white/40 text-indigo-600 font-semibold px-5 py-3 hover:bg-indigo-100 transition-all"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 text-white">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/20 p-2 ring-1 ring-white/30">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <p className="mt-4 text-base font-semibold">Weekly Game Drops</p>
              <div className="mt-2 text-base/7 text-white/80">
                Be the first to know about new game releases and updates.
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/20 p-2 ring-1 ring-white/30">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <div className="mt-4 text-base font-semibold">No Spam Ever</div>
              <p className="mt-2 text-base/7 text-white/80">
                We only send legit gaming news — no boring emails, promise.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
        </div>
    );
};

export default NewsLetter;