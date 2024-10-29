'use client';

import { CodeBracketIcon, ChartBarIcon, ArrowTrendingUpIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#27275B]">How We Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CREATE */}
          <div className="relative p-4 md:p-6 rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:bg-[#FFA500] shadow-lg hover:shadow-xl">
            <div className="flex flex-col items-center">
              <CodeBracketIcon className="h-12 w-12 text-[#27275B] mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-[#27275B] mb-2">CREATE</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We start by creating roadmaps that outline clear goals and milestones, increasing your project’s success rate.
              </p>
            </div>
          </div>

          {/* FOCUS */}
          <div className="relative p-4 md:p-6 rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:bg-[#FFA500] shadow-lg hover:shadow-xl">
            <div className="flex flex-col items-center">
              <ChartBarIcon className="h-12 w-12 text-[#27275B] mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-[#27275B] mb-2">FOCUS</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Quality is at the core of everything we do. Our approach ensures precision at every step of the project’s journey.
              </p>
            </div>
          </div>

          {/* RANK */}
          <div className="relative p-4 md:p-6 rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:bg-[#FFA500] shadow-lg hover:shadow-xl">
            <div className="flex flex-col items-center">
              <ArrowTrendingUpIcon className="h-12 w-12 text-[#27275B] mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-[#27275B] mb-2">RANK</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We excel at competitor research, identifying opportunities to enhance your brand’s position in the market.
              </p>
            </div>
          </div>

          {/* REACH */}
          <div className="relative p-4 md:p-6 rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:bg-[#FFA500] shadow-lg hover:shadow-xl">
            <div className="flex flex-col items-center">
              <GlobeAltIcon className="h-12 w-12 text-[#27275B] mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-[#27275B] mb-2">REACH</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Our data-driven strategies push your business forward and unlock its full potential in reaching a wider audience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
