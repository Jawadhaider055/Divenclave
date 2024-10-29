// components/SeoImageSection.js

import React from 'react';

const SeoImageSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="text-left md:w-1/2 space-y-5">
        <h2 className="text-green-500 font-semibold">Powerful SEO Solution for Local, International & E-Commerce | DivEnclave</h2>
        <h1 className="text-4xl font-bold text-black">
        Supercharge Your Brand's Online Visibility with Powerful  <span className="text-black">SEO Solution </span>
        </h1>
        <p className="text-lg text-gray-600">
        In the digital world, being visible online is essential for your business's success. That’s where our professional SEO services come in. We specialize in helping businesses like yours increase their online visibility through customized SEO optimization strategies. Whether you’re a small local business or a growing e-commerce brand, a strong SEO strategy translates to more traffic, more leads, and ultimately more sales.

        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="/seo.jpg"
          alt="SEO Services"
        />
      </div>
    </section>
  );
};

export default SeoImageSection;
