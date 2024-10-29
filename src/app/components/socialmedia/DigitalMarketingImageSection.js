import React from 'react';

const DigitalMarketingImageSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="text-left md:w-1/2 space-y-5">
        <h2 className="text-green-500 font-semibold">Leading Digital Marketing Services in Dubai UAE</h2>
        <h1 className="text-4xl font-bold text-black">
          Grow your business with <span className="text-black">digital marketing strategies</span>
        </h1>
        <p className="text-lg text-gray-600">
          We provide data-driven digital marketing solutions to help your business grow online, increase brand visibility, and drive conversions. Join hands with the top digital marketing company in Dubai today!
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="/digital-marketing/digital-marketing.jpg"
          alt="Digital Marketing Services"
        />
      </div>
    </section>
  );
};

export default DigitalMarketingImageSection;
