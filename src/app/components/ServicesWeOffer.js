'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PencilSquareIcon,
  ChartBarIcon,
  VideoCameraIcon,
  CogIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function ServicesWeOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(0); // For desktop view
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const serviceData = [
    {
      title: "UX & UI Designing",
      description: "Our UX & UI design service focuses on delivering a seamless user experience and visually appealing interfaces. We design with both aesthetics and usability in mind.",
      points: ["User Experience Research", "Wireframe Design", "Interactive Prototypes", "Responsive and Adaptive Design"],
      icon: <PencilSquareIcon className="h-12 w-12" />,
      image: "/ux-ui-design.jpg", // Using the ux-ui-design image
    },
    {
      title: "Web Development",
      description: "We provide full-stack web development services to build high-performance websites and web applications, ensuring scalable and efficient digital solutions.",
      points: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"],
      icon: <CodeBracketIcon className="h-12 w-12" />,
      image: "/web-development.jpg",
    },
    {
      title: "Content Creation",
      description: "We offer comprehensive content creation services, including blog writing, SEO-focused content, and social media content strategies tailored to your audience.",
      points: ["Copywriting", "SEO Content", "Blog Posts", "Social Media Content"],
      icon: <CogIcon className="h-12 w-12" />,
      image: "/content-creation.jpg",
    },
    {
      title: "Google SEO",
      description: "Boost your online presence with our Google SEO services designed to improve your search engine rankings through a data-driven approach.",
      points: ["Keyword Research", "On-page Optimization", "Link Building", "Performance Monitoring"],
      icon: <ChartBarIcon className="h-12 w-12" />,
      image: "/seo.jpg",
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand with our social media marketing strategies, tailored to improve your reach and engagement.",
      points: ["Strategy Development", "Ad Campaigns", "Community Management", "Analytics"],
      icon: <GlobeAltIcon className="h-12 w-12" />,
      image: "/social-media.jpg",
    },
    {
      title: "Video Creating",
      description: "From promotional videos to animations, we offer top-notch video creation services that bring your ideas to life.",
      points: ["Script Writing", "Storyboarding", "Filming", "Post Production"],
      icon: <VideoCameraIcon className="h-12 w-12" />,
      image: "/video-creation.jpg",
    },
  ];

  const handleNext = () => {
    setDirection(1); // Moving forward (left to right)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Moving backward (right to left)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? serviceData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-[#f2c86f] via-[#e5e8f9] to-[#c1c4e6] py-12 w-full">
      <div className="w-full max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#27275B]">Services We Are Offering</h2>
        <p className="text-gray-600 mb-12">
          How to create a website tailored to your unique business goals? Take a look at our design process that helps us deliver customized and goal-oriented digital solutions.
        </p>

        {/* Mobile Carousel View */}
        <div className="block md:hidden relative flex items-center justify-center w-full">
          {/* Previous Arrow */}
          <button
            className="absolute z-50 left-4 bg-[#FFA500] text-white rounded-full p-2 hover:bg-[#e59400] transition"
            onClick={handlePrev}
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>

          {/* Carousel with Motion */}
          <div className="w-full overflow-hidden max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center bg-white border p-6 rounded-lg shadow-lg"
              >
                {serviceData[currentIndex].icon}
                <h3 className="text-lg md:text-xl font-bold mt-4 text-[#27275B]">{serviceData[currentIndex].title}</h3>
                <p className="text-sm text-gray-700 mt-2">{serviceData[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <button
            className="absolute right-4 bg-[#FFA500] text-white rounded-full p-2 hover:bg-[#e59400] transition"
            onClick={handleNext}
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-6 gap-4 mt-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center border p-6 w-full h-48 rounded-lg cursor-pointer shadow-md bg-white ${
                selectedService === index ? "border-[#FFA500]" : ""
              }`}
              onClick={() => setSelectedService(index)}
            >
              {service.icon}
              <h3 className="text-lg font-bold mt-4 text-[#27275B]">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Service Details (both Mobile and Desktop) */}
        <div className="bg-white py-12 mt-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 px-6 text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{serviceData[selectedService || currentIndex].title}</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">{serviceData[selectedService || currentIndex].description}</p>

              {/* Points List */}
              <ul className="space-y-2">
                {serviceData[selectedService || currentIndex].points.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <PencilSquareIcon className="h-6 w-6 text-gray-500 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 px-6">
              <img
                src={serviceData[selectedService || currentIndex].image}
                alt={serviceData[selectedService || currentIndex].title}
                className="rounded-lg shadow-lg w-full max-w-xs mx-auto md:max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
