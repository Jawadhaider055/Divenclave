"use client";

import React, { useEffect, useRef, useState } from "react";

const AboutUsImage = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // When 50% of the image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16">
      {/* Full-width container with proper margin and padding adjustments for mobile and desktop */}
      <div className="container mx-auto px-4 text-left"> 
        {/* About Divenclave text */}
        <p className="text-xl font-semibold text-blue-600 mb-4">About Divenclave</p>
        
        {/* Main headline with responsive text size */}
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
          we are a group of rebels, daring to challenge the odds with disruptive innovation
        </h1>

        {/* Image container with full responsiveness */}
        <div className="mt-8 flex justify-center overflow-hidden w-full">
          <img 
            ref={imageRef}
            src="/aboutus3.jpg" 
            alt="About Us" 
            className={`w-full max-w-full h-auto rounded-lg transition-transform duration-700 ease-in-out transform ${
              isVisible ? "scale-100" : "scale-150"
            }`}
            style={{ transformOrigin: "center" }} // Zooms from the center
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
