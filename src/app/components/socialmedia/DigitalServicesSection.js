"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import { useState } from 'react';
import DigitalMarketingStrategies from './DigitalMarketingStrategies'; // Import the Strategies component

export default function DigitalMarketingSection() {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState('PPCAdvertising');

  // Data for each service
  const digitalMarketingServiceData = {
    PPCAdvertising: {
      title: 'Boost Sales with Targeted PPC Campaigns',
      description: 'Pay-Per-Click (PPC) advertising is one of the most effective ways to drive immediate traffic to your website by targeting your ideal audience directly. With PPC, you can position your business at the top of search engine results, social media platforms, or even on third-party websites, paying only when a potential customer clicks on your ad. This method offers precise control over your budget, audience, and results, allowing for high ROI.',
      offer: [
        'Google Ads Campaigns',
        'Social Media PPC',
        'Display Advertising',
        'Keyword Research & Targeting',
        'Ad Copywriting & Design',
        'Continuous Optimization',
      ],
      image: '/Pay-Per-Click Advertising (PPC).png',
    },
    SocialMediaMarketing: {
      title: 'Build Brand Loyalty with SMM',
      description: 'Social Media Marketing (SMM) is a powerful way to connect with your audience, build brand awareness, and generate leads by leveraging platforms like Facebook, Instagram, Twitter, LinkedIn, and more. With billions of people active on social media daily, businesses have the opportunity to engage directly with customers, understand their preferences, and build meaningful relationships.',
      offer: [
        'Social Media Strategy Development',
        'Content Creation & Management',
        'Community Engagement',
        'Paid Social Media Advertising',
        'Influencer Marketing',
        'Performance Analytics',
      ],
      image: '/Social Media Marketing (SMM).png',
    },
    ContentMarketing: {
      title: 'Build Authority with Strategic Content',
      description: 'Content marketing helps businesses attract, engage, and convert their target audiences through valuable and relevant content. Whether it’s blog posts, articles, videos, or infographics, content marketing builds trust, establishes authority, and nurtures relationships with potential customers.',
      offer: [
        'Content Strategy & Planning',
        'Blog & Article Writing',
        'Video & Visual Content Creation',
        'SEO Content Optimization',
        'Content Distribution',
        'Performance Tracking & Analytics',
      ],
      image: '/content writer.png',
    },
    EmailMarketing: {
      title: 'Retain Customers with Targeted Emails',
      description: 'Email marketing remains one of the most direct and effective ways to engage with your audience, nurture leads, and convert them into loyal customers. By delivering personalized, targeted messages directly to your audience’s inbox, you can build lasting relationships, drive traffic, and increase conversions.',
      offer: [
        'Email Campaign Strategy',
        'Automated Email Sequences',
        'Custom Email Templates',
        'List Segmentation & Personalization',
        'Performance Tracking & Analytics',
        'A/B Testing',
      ],
      image: '/Email Marketing Retain Customers with Targeted Emails.png',
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
        <h2 className="text-3xl font-bold mb-8 text-center">Transform Your Business with Expert Digital Marketing Solutions</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {/* Digital Marketing Service Buttons */}
          {['PPCAdvertising', 'SocialMediaMarketing', 'ContentMarketing', 'EmailMarketing'].map((service, index) => (
            <motion.button
              key={service}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
              className={`py-2 px-2 sm:px-4 text-xs md:text-sm rounded-lg shadow-lg text-center ${
                service === 'PPCAdvertising' ? 'bg-blue-600 text-white' :
                service === 'SocialMediaMarketing' ? 'bg-green-500 text-white' :
                service === 'ContentMarketing' ? 'bg-yellow-400 text-black' :
                'bg-gray-800 text-white'
              }`}
              onClick={() => setSelectedService(service)}
            >
              {digitalMarketingServiceData[service].title.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* Main Box Container with 20px Padding */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg max-w-6xl w-full" style={{ backgroundColor: '#FFA500' }}>
          {/* Heading and Description */}
          <div className="text-left justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{digitalMarketingServiceData[selectedService].title}</h2>
            <p className="text-lg text-white leading-relaxed">{digitalMarketingServiceData[selectedService].description}</p>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex flex-col md:flex-row items-left text-left justify-between w-full px-4 md:px-0">
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2 text-white">What We Offer:</h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                {digitalMarketingServiceData[selectedService].offer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-4 md:px-0">
              <img
                src={digitalMarketingServiceData[selectedService].image}
                alt={digitalMarketingServiceData[selectedService].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Include the DigitalMarketingStrategies component */}
        <DigitalMarketingStrategies selectedService={selectedService} />
      </div>
    </section>
  );
}
