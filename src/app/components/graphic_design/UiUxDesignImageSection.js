import React from 'react';

const UiUxDesignImageSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="text-left md:w-1/2 space-y-5">
        <h2 className="text-blue-500 font-semibold">Graphic Design Agency | Custom Logos & Visuals
        </h2>
        <h1 className="text-4xl font-bold text-black">
        Creative Designs That Speak for Your Brand <span className="text-black">And Attract Your Audience </span>
        </h1>
        <p className="text-lg text-gray-600">
        Graphic design is the art of visual communication, helping businesses create impactful visuals that resonate with their target audience. Whether you need a new logo, web images design, social media graphics, or print materials, our expert graphic designers are here to bring your ideas to life. We understand the importance of unique, creative designs that reflect your brand’s personality and values. From sleek and modern designs to vibrant and bold visuals, we tailor our work to meet your specific needs.

        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="/uiux-design/uiux-design.jpg"
          alt="UI/UX Design Services"
        />
      </div>
    </section>
  );
};

export default UiUxDesignImageSection;
