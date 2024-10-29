"use client"; // Ensure this is a Client Component

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const portfolioData = [
  {
    title: "HR Application",
    image: "/aboutus.png",
  },
  {
    title: "Fishing App",
    image: "/aboutus1.png",
  },
  {
    title: "Social Media Web & Application",
    image: "/aboutus2.png",
  },
  {
    title: "Fintech App",
    image: "/howweare.jpg",
  },
  {
    title: "Bus Tracking App",
    image: "/meeting.png",
  },
  {
    title: "Booking Application for Salon",
    image: "/seo.jpg",
  },
];

export default function PortfolioSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Intersection Observer to detect when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else {
        setInView(false); // Reset if it goes out of view
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-white" ref={ref}>
      {/* Set padding for mobile (px-4) to add space on the left and right */}
      <div className="container mx-auto text-center px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-black mb-4">Our Portfolio</h2>
        <p className="text-lg text-gray-700 mb-8">
          Check out some of the amazing work we did for our clients
        </p>

        {/* Portfolio Grid with padding for mobile view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index < 3 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index < 3 ? -100 : 100 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group bg-black rounded-lg shadow-lg overflow-hidden"
            >
              {/* Frame design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 border border-transparent pointer-events-none">
                  <div className="absolute top-0 left-0 h-[15px] w-[15px] border-t-2 border-l-2 border-white" />
                  <div className="absolute top-0 right-0 h-[15px] w-[15px] border-t-2 border-r-2 border-white" />
                  <div className="absolute bottom-0 left-0 h-[15px] w-[15px] border-b-2 border-l-2 border-white" />
                  <div className="absolute bottom-0 right-0 h-[15px] w-[15px] border-b-2 border-r-2 border-white" />
                </div>
              </div>
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-auto"
              />
              {/* Project Title (Always Visible) */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
