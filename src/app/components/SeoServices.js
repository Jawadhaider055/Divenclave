"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import { useState } from 'react';
import SeoStrategies from './SeoStrategies'; // Import the SeoStrategies component

export default function SeoSection() {
  // State to track the selected SEO service
  const [selectedService, setSelectedService] = useState('KeywordResearch');

  // Data for each service
  const seoServiceData = {
    KeywordResearch: {
      title: 'Keyword and Data Research',
      description: 'Before we dive into optimizing your website for SEO, our first step is crucial: in-depth keyword and data research. As SEO experts, we understand that the success of your strategy hinges on targeting the right keywords that your potential customers are searching for.',
      offer: [
        'Comprehensive Keyword Research',
        'Competitor Analysis',
        'Keyword Trends',
        'Keyword Difficulty Analysis',
        'Content Gap Analysis',
        'Search Volume Data',
      ],
      image: '/keyword.png',
    },
    OnPageSEO: {
      title: 'On-Page SEO',
      description: 'Our on-page SEO services ensure your website is fully optimized for both search engines and, more importantly, your users. We stay ahead of Google’s updates, focusing on creating user-centric content that drives engagement and conversions.',
      offer: [
        'Title Tag & Meta Description Optimization',
        'Content Optimization',
        'Internal Linking Structure',
        'URL Optimization',
        'Image Optimization',
        'Heading Tags Optimization',
        'Mobile Responsiveness',
        'Site Speed Optimization',
        'Schema Markup Implementation',
        'Basic On-Page Technical Fixes',
      ],
      image: '/on page seo.png',
    },
    OffPageSEO: {
      title: 'Off-Page SEO',
      description: 'Improving your website’s authority and credibility across the web is key to higher search engine rankings and long-term success. Our off-page SEO services focus on building your site’s reputation through strategic efforts that happen outside of your website.',
      offer: [
        'High-Quality Link Building',
        'Guest Blogging Services',
        'Social Media Engagement',
        'Local Citations & Directory Listings',
        'Brand Mentions & Influencer Outreach',
        'Online Reputation Management',
        'Content Marketing & Outreach',
        'Broken Link Building',
        'Press Releases & News Syndication',
        'Forum & Blog Comments',
      ],
      image: '/off page seo.png',
    },
    TechnicalSEO: {
      title: 'Technical SEO',
      description: 'A solid technical foundation is essential for any website aiming to perform well in search engines. Our technical SEO services focus on optimizing the backend elements of your website.',
      offer: [
        'Website Crawling & Indexing Optimization',
        'XML Sitemap Creation & Optimization',
        'Robots.txt File Optimization',
        'Site Speed Optimization',
        'Mobile Usability & Responsiveness',
        'SSL Implementation & HTTPS Setup',
        'Structured Data & Schema Markup',
        'Fixing Crawl Errors & Broken Links',
        'Duplicate Content Resolution',
        'Core Web Vitals Optimization',
      ],
      image: '/Technical SEO.png',
    },
    LocalSEO: {
      title: 'Local SEO',
      description: 'If you want your business to be easily found by customers in your area, local SEO services are essential. We help local businesses increase their visibility in location-based searches.',
      offer: [
        'Google My Business Optimization',
        'Local Citation Building',
        'NAP (Name, Address, Phone Number) Consistency',
        'Localized Content Creation',
        'Online Reviews & Reputation Management',
        'Local Link Building',
        'Google Maps Optimization',
        'Schema Markup for Local SEO',
        'Mobile Optimization for Local Searches',
        'Geographically Targeted Keywords',
        'Local SEO Reporting & Analysis',
      ],
      image: '/local seo.png',
    },
    EcommerceSEO: {
      title: 'E-commerce SEO',
      description: 'For online stores, visibility in search engines can make or break your business. Our e-commerce SEO services focus on optimizing your online store.',
      offer: [
        'Product Page Optimization',
        'Category Page SEO',
        'Technical SEO for E-commerce',
        'URL Structure Optimization',
        'E-commerce Site Speed Optimization',
        'Image Optimization',
        'Secure Payment & HTTPS Setup',
        'Schema Markup for Products',
        'Optimizing for Long-Tail Keywords',
        'Mobile Optimization for E-commerce',
        'Fixing Duplicate Content Issues',
        'E-commerce SEO Reporting & Analysis',
      ],
      image: '/e commerce.png',
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
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive SEO Services for Every Business Need</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {/* SEO Service Buttons */}
          {['KeywordResearch', 'OnPageSEO', 'OffPageSEO', 'TechnicalSEO', 'LocalSEO', 'EcommerceSEO'].map((service, index) => (
            <motion.button
              key={service}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
              className={`py-2 px-2 sm:px-4 text-xs md:text-sm rounded-lg shadow-lg text-center ${
                service === 'KeywordResearch' ? 'bg-blue-600 text-white' :
                service === 'OnPageSEO' ? 'bg-green-500 text-white' :
                service === 'OffPageSEO' ? 'bg-yellow-400 text-black' :
                service === 'TechnicalSEO' ? 'bg-gray-800 text-white' :
                service === 'LocalSEO' ? 'bg-red-500 text-white' :
                'bg-orange-500 text-white'
              }`}
              onClick={() => setSelectedService(service)}
            >
              {seoServiceData[service].title.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* Main Box Container with 20px Padding */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg max-w-6xl w-full" style={{ backgroundColor: '#FFA500' }}>
          {/* Heading and Description */}
          <div className="text-left justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{seoServiceData[selectedService].title}</h2>
            <p className="text-lg text-white leading-relaxed">{seoServiceData[selectedService].description}</p>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex flex-col md:flex-row items-left text-left justify-between w-full px-4 md:px-0">
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2 text-white">What We Offer:</h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                {seoServiceData[selectedService].offer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-4 md:px-0">
              <img
                src={seoServiceData[selectedService].image}
                alt={seoServiceData[selectedService].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Include the SeoStrategies component */}
        <SeoStrategies selectedService={selectedService} />
      </div>
    </section>
  );
}
