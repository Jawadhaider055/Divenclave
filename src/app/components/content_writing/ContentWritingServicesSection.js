"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import { useState } from 'react';
import ContentWritingStrategies from './ContentWritingStrategies'; // Import the Strategies component

export default function ContentWritingSection() {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState('BlogWriting');

  // Data for each service
  const contentWritingServiceData = {
    BlogWriting: {
      title: 'Blog Writing | Engage Your Audience with Informative Content',
      description: 'Our blog writing services help you engage your audience with informative, valuable content that positions you as an authority in your industry. Whether you need regular blog updates or one-off articles, we create content that drives traffic and boosts your SEO efforts.',
      offer: [
        'SEO-Optimized Content',
        'Engaging and Informative Writing',
        'Topic Research and Strategy',
        'Keyword Integration',
        'Content Editing and Proofreading',
        'Quick Turnaround',
      ],
      image: '/content-writing/blog-writing.jpg',
    },
    Copywriting: {
      title: 'Copywriting | Persuasive Copy to Drive Conversions',
      description: 'Our copywriting services are designed to craft persuasive and compelling content that drives conversions and inspires action. Whether you need web copy, email campaigns, or sales pages, our expert copywriters will create content that resonates with your target audience.',
      offer: [
        'Website Copy',
        'Sales Pages',
        'Landing Page Optimization',
        'Email Campaigns',
        'Brand Messaging',
        'Compelling Call-to-Actions',
      ],
      image: '/content-writing/copywriting.jpg',
    },
    ProductDescriptions: {
      title: 'Product Descriptions | Highlight Your Products with Compelling Details',
      description: 'Our product description writing services focus on highlighting the unique features and benefits of your products, making them irresistible to potential customers. We use persuasive language that emphasizes quality, benefits, and value.',
      offer: [
        'SEO-Friendly Descriptions',
        'Feature Highlighting',
        'Engaging Language',
        'Consistent Tone and Style',
        'Conversion-Driven Writing',
        'Brand Consistency',
      ],
      image: '/content-writing/product-descriptions.jpg',
    },
    TechnicalWriting: {
      title: 'Technical Writing | Simplify Complex Concepts',
      description: 'Our technical writing services help you communicate complex concepts in a clear, concise, and easy-to-understand manner. We create manuals, guides, and documentation that provide value and clarity to your audience.',
      offer: [
        'User Manuals',
        'Technical Guides',
        'Process Documentation',
        'Clear and Concise Language',
        'Research-Based Writing',
        'Consistency and Accuracy',
      ],
      image: '/content-writing/technical-writing.jpg',
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
        <h2 className="text-3xl font-bold mb-8 text-center">Our Content Writing Solutions to Inspire and Engage Your Audience</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {/* Content Writing Service Buttons */}
          {['BlogWriting', 'Copywriting', 'ProductDescriptions', 'TechnicalWriting'].map((service, index) => (
            <motion.button
              key={service}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
              className={`py-2 px-2 sm:px-4 text-xs md:text-sm rounded-lg shadow-lg text-center ${
                service === 'BlogWriting' ? 'bg-blue-600 text-white' :
                service === 'Copywriting' ? 'bg-green-500 text-white' :
                service === 'ProductDescriptions' ? 'bg-yellow-400 text-black' :
                'bg-gray-800 text-white'
              }`}
              onClick={() => setSelectedService(service)}
            >
              {contentWritingServiceData[service].title.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* Main Box Container with 20px Padding */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg max-w-6xl w-full" style={{ backgroundColor: '#FFA500' }}>
          {/* Heading and Description */}
          <div className="text-left justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{contentWritingServiceData[selectedService].title}</h2>
            <p className="text-lg text-white leading-relaxed">{contentWritingServiceData[selectedService].description}</p>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex flex-col md:flex-row items-left text-left justify-between w-full px-4 md:px-0">
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2 text-white">What We Offer:</h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                {contentWritingServiceData[selectedService].offer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-4 md:px-0">
              <img
                src={contentWritingServiceData[selectedService].image}
                alt={contentWritingServiceData[selectedService].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Include the ContentWritingStrategies component */}
        <ContentWritingStrategies selectedService={selectedService} />
      </div>
    </section>
  );
}
