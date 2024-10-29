"use client"; // This line indicates that this component runs on the client side

import { motion } from 'framer-motion';
import { useState } from 'react';
import WebStrategies from './WebStrategies'; // Import the WebStrategies component

export default function BuildForFuture() {
  // State to track the selected platform, set "CustomWebsite" as default
  const [selectedPlatform, setSelectedPlatform] = useState('CustomWebsite');

  // Data for each platform
  const platformData = {
    CustomWebsite: {
      title: 'Custom Website Solutions',
      description: 'Our Custom Website Development service specializes in crafting software and tailored web solutions for your business. We build everything from the ground up to meet your specific needs.',
      offer: [
        'Needs Assessment: Assess the specific needs and goals for your custom website.',
        'Custom Design: Create a bespoke design that aligns with your business objectives.',
        'Development Phase: Develop the website using modern technologies tailored to your requirements.',
        'Quality Assurance: Conduct thorough testing to ensure functionality and performance.',
        'Deployment & Launch: Deploy the website and ensure it is fully operational.',
        'Maintenance & Updates: Provide ongoing maintenance and updates as needed.',
      ],
      image: '/webdevelopment/customeweb.jpg',
    },
    Shopify: {
      title: 'Shopify Development',
      description: 'At our agency, we specialize in creating visually stunning and functionally robust Shopify websites designed to drive results. Whether you\'re a startup or an established brand, our tailored Shopify eCommerce management services will help you effectively manage your store, sell your products online, and grow your business.',
      offer: [
        'Custom Shopify Store Design: We design user-friendly, engaging Shopify stores that perfectly reflect your brand’s identity.',
        'Shopify Theme Customization: We customize Shopify themes to match your business needs, adjusting layouts, colors, and adding unique features.',
        'Shopify App Integration: Enhance your store’s functionality with seamless integration of apps for email marketing, shipping, customer management, and more.',
        'Responsive Design: We ensure your store is optimized for mobile devices, offering a smooth shopping experience across all platforms.',
        'Payment Gateway Integration: Securely integrate payment gateways for safe and reliable transactions for your customers.',
        'Shopify SEO Optimization: Boost your store’s visibility with our expert SEO services, driving traffic and increasing sales.',
        'Store Setup & Configuration: We handle the technical aspects of setting up your Shopify store, including product uploads and configuration.',
        'Ongoing Support: We provide post-launch support to ensure your Shopify store continues to operate smoothly and efficiently.',
      ],
      image: '/shopify.jpg',
    },
    WordPress: {
      title: 'WordPress Development',
      description: 'We specialize in providing professional WordPress website development services tailored to your needs. Whether you need a personal blog, portfolio, business website, or online store, our experienced WordPress developers will create a website that stands out, functions flawlessly, and supports your business goals.',
      offer: [
        'WordPress Website Redesign: Transform your outdated website with a sleek, modern design that reflects your brand\'s identity.',
        'Custom WordPress Website Design: We create tailored websites that capture and reinforce your brand\'s image across every aspect.',
        'Fixing CSS/JavaScript/jQuery Front-End Issues: We resolve front-end issues to deliver a flawless user experience.',
        'Error, Bug, and Issue Fixing: We troubleshoot and eliminate any errors or bugs that affect your website’s performance.',
        'Speed Optimization: Improve your website’s loading speed to boost user experience and SEO rankings.',
        'WordPress Landing Page Design: We craft high-converting landing pages designed to turn visitors into customers.',
        'Basic SEO Setup: We handle essential on-page SEO to lay the groundwork for improved search engine visibility.',
        'Integrations: Seamlessly integrate third-party tools like newsletters, payment gateways, and more to enhance your site’s functionality.',
      ],
      image: '/wordpress.jpg',
    },
    Wix: {
      title: 'Wix Development',
      description: 'Our Wix website development service specializes in creating visually appealing and highly functional websites that deliver outstanding performance and usability. We blend our design expertise with an in-depth understanding of Wix’s capabilities to build sites that reflect your business goals.',
      offer: [
        'Unique Custom Designs: We develop bespoke designs that capture your brand\'s essence using Wix’s flexible design tools.',
        'Dynamic Functionality & Database Integration: For businesses requiring more sophisticated websites, we implement dynamic content and custom databases on the Wix platform.',
        'Comprehensive E-commerce Solutions: We ensure smooth incorporation of Wix\'s powerful e-commerce tools, helping you grow your business effectively.',
        'Expert SEO Strategies for Wix: We focus on essential SEO practices to improve your website\'s visibility in search engine results.',
        'Responsive Mobile Designs: Our designs are fully responsive, ensuring your website looks and functions perfectly on any device.',
        'Reliable Support & Ongoing Maintenance: We provide reliable support and regular updates, ensuring your site remains up-to-date and performs optimally.',
      ],
      image: '/wix.jpg',
    },
    SquareSpace: {
      title: 'SquareSpace Development',
      description: 'Building a professional website is easier than ever with our expert Squarespace web design services. We create stunning, functional websites using the Squarespace platform, ensuring they are easy to manage, mobile-friendly, and optimized for search engines.',
      offer: [
        'Custom Squarespace Website Development: We design unique websites tailored to match your brand’s personality and vision.',
        'Custom Squarespace Templates: Personalize any template to suit your needs and ensure your site stands out from the competition.',
        'Squarespace eCommerce Setup: We help you set up an online store quickly and efficiently.',
        'Squarespace SEO Optimization: Improve your search engine rankings with expert SEO tips.',
        'Squarespace Mobile Optimization: We ensure your website looks stunning and functions perfectly across all devices.',
        'Squarespace Website Maintenance Services: From launch to ongoing support, we provide everything you need to keep your site running smoothly.',
      ],
      image: '/webdevelopment/squarespace.png',
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
    <section className="py-12 bg-white flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        
        {/* Heading Above Buttons */}
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Web Development Solutions for Every Business Need</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {/* Custom Website Solution Button */}
          <motion.button
            custom={0}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
            className="bg-red-500 text-white py-2 px-4 text-xs md:text-sm rounded-lg shadow-lg"
            onClick={() => setSelectedPlatform('CustomWebsite')}
          >
            Custom Website Solution
          </motion.button>

          {/* Shopify Button */}
          <motion.button
            custom={1}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
            className="bg-green-500 text-white py-2 px-4 text-xs md:text-sm rounded-lg shadow-lg"
            onClick={() => setSelectedPlatform('Shopify')}
          >
            Shopify
          </motion.button>

          {/* WordPress Button */}
          <motion.button
            custom={2}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
            className="bg-blue-600 text-white py-2 px-4 text-xs md:text-sm rounded-lg shadow-lg"
            onClick={() => setSelectedPlatform('WordPress')}
          >
            WordPress
          </motion.button>

          {/* Wix Button */}
          <motion.button
            custom={3}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
            className="bg-yellow-400 text-black py-2 px-4 text-xs md:text-sm rounded-lg shadow-lg"
            onClick={() => setSelectedPlatform('Wix')}
          >
            Wix
          </motion.button>

          {/* SquareSpace Button */}
          <motion.button
            custom={4}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
            className="bg-gray-800 text-white py-2 px-4 text-xs md:text-sm rounded-lg shadow-lg"
            onClick={() => setSelectedPlatform('SquareSpace')}
          >
            Square Space
          </motion.button>
        </div>

        {/* Main Box Container with 20px Padding */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg max-w-6xl w-full" style={{ backgroundColor: '#FFA500' }}>
          {/* Heading and Description */}
          <div className="text-left justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'white' }}>{platformData[selectedPlatform].title}</h2>
            <p className="text-lg text-white leading-relaxed">{platformData[selectedPlatform].description}</p>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex flex-col md:flex-row items-left text-left justify-between w-full">
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2 text-white">What We Offer:</h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                {platformData[selectedPlatform].offer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src={platformData[selectedPlatform].image}
                alt={platformData[selectedPlatform].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Include the WebStrategies component */}
        <WebStrategies selectedPlatform={selectedPlatform} />
      </div>
    </section>
  );
}
