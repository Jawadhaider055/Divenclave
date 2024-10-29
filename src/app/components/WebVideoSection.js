// components/WebVideoSection.js

import React from 'react';

const WebVideoSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="text-left md:w-1/2 space-y-5">
        <h2 className="text-blue-500 font-semibold">Best Web Development Company | Custom, Shopify, WordPress</h2>
        <h1 className="text-4xl font-bold text-black">
        Best Web Development Company | Crafting Innovative <span className="text-black">  Digital Solution </span>
        </h1>
        <p className="text-lg text-gray-600">
        As the best web development company, we specialize in creating unique, high-performing websites that drive results. Our team delivers tailor-made solutions to meet the needs of businesses across various industries. From sleek designs to seamless functionality, we ensure your online presence stands out. Trust us to build a website that not only looks great but also supports your business growth.


        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src="/webdevelopment/web-video.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
};

export default WebVideoSection;
