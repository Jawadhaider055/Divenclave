"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import { useState } from 'react';
import GraphicDesignStrategies from './UiUxDesignStrategies'; // Import the Strategies component

export default function GraphicDesignSection() {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState('LogoDesign');

  // Data for each service
  const graphicDesignServiceData = {
    LogoDesign: {
      title: 'Build a Logo That Captures Your Brand',
      description: 'A logo is the face of your brand, representing your business in a single, impactful visual. Our logo design service focuses on creating distinctive, timeless logos that make a lasting impression. Whether launching a new brand or rebranding, we tailor our design process to suit your unique vision and needs.',
      offer: [
        'Custom Logo Design',
        'Multiple Design Concepts',
        'Unlimited Revisions',
        'Scalable Designs',
        'Brand Consistency',
      ],
      image: '/graphic-design/logo-design.jpg',
    },
    UxUi: {
      title: 'Design for a Seamless User Experience',
      description: 'UX and UI design are critical elements in creating digital products that not only look great but also function seamlessly. Our UX/UI design services focus on user-centered designs that ensure smooth and enjoyable interactions with digital products.',
      offer: [
        'User-Centered Design',
        'Responsive & Adaptive Designs',
        'Prototyping & Wireframes',
        'Aesthetically Pleasing UI',
        'Consistency Across Platforms',
      ],
      image: '/graphic-design/ux-ui-design.jpg',
    },
    Infographics: {
      title: 'Visualize Data to Enhance Your Web Content',
      description: 'Infographics are powerful tools that combine data and design to convey complex information clearly. Our infographic design services focus on creating compelling visuals that effectively communicate your message and enhance your web content.',
      offer: [
        'Custom Infographic Design',
        'Data Visualization',
        'Engaging Storytelling',
        'Social Media Compatibility',
        'Versatile Formats',
      ],
      image: '/graphic-design/infographics.jpg',
    },
    MarketingDesign: {
      title: 'Creative Design Solutions for Effective Marketing',
      description: 'Our marketing and advertising design services focus on creating visually appealing and strategically effective materials that not only grab attention but also drive engagement and conversions.',
      offer: [
        'Tailored Advertising Campaigns',
        'Print & Digital Media',
        'Brand Identity Development',
        'Engaging Visual Content',
        'Market Research Insights',
      ],
      image: '/graphic-design/marketing-design.jpg',
    },
    Illustration: {
      title: 'Custom Illustrations for Your Ideas',
      description: 'Illustration services breathe life into your ideas, transforming them into captivating visuals. Whether for books, marketing materials, or branding, our team creates engaging artwork tailored to your needs.',
      offer: [
        'Custom Illustrations',
        'Diverse Styles',
        'Storyboarding',
        'Brand-Specific Illustrations',
        'Quick Turnaround Times',
      ],
      image: '/graphic-design/illustrations.jpg',
    },
  };

  // Define animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: -50 }, // Initial state: hidden and above the screen
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4, // Delay each button's appearance
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const hoverEffect = {
    whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <section className="py-12 bg-white flex flex-col justify-center items-center px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        
        {/* Heading Above Buttons */}
        <h2 className="text-3xl font-bold mb-8 text-center">Your Graphic Design Needs, Covered with Expert Solutions</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {/* Graphic Design Service Buttons */}
          {['LogoDesign', 'UxUi', 'Infographics', 'MarketingDesign', 'Illustration'].map((service, index) => (
            <motion.button
              key={service}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
              className={`py-2 px-2 sm:px-4 text-xs md:text-sm rounded-lg shadow-lg text-center ${
                service === 'LogoDesign' ? 'bg-blue-600 text-white' :
                service === 'UxUi' ? 'bg-green-500 text-white' :
                service === 'Infographics' ? 'bg-yellow-400 text-black' :
                service === 'MarketingDesign' ? 'bg-gray-800 text-white' :
                'bg-red-500 text-white'
              }`}
              onClick={() => setSelectedService(service)}
            >
              {graphicDesignServiceData[service].title.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* Main Box Container with 20px Padding */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg max-w-6xl w-full" style={{ backgroundColor: '#FFA500' }}>
          {/* Heading and Description */}
          <div className="text-left justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{graphicDesignServiceData[selectedService].title}</h2>
            <p className="text-lg text-white leading-relaxed">{graphicDesignServiceData[selectedService].description}</p>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex flex-col md:flex-row items-left text-left justify-between w-full px-4 md:px-0">
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2 text-white">What We Offer:</h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                {graphicDesignServiceData[selectedService].offer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-4 md:px-0">
              <img
                src={graphicDesignServiceData[selectedService].image}
                alt={graphicDesignServiceData[selectedService].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Include the GraphicDesignStrategies component */}
        <GraphicDesignStrategies selectedService={selectedService} />
      </div>
    </section>
  );
}