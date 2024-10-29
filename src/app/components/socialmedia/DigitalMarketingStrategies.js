"use client"; // Ensure this is a Client Component

import { useState, useEffect, useRef } from 'react';
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, BeakerIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Data for strategies based on service selection
const digitalMarketingStrategiesData = {
  PPCAdvertising: [
    {
      title: "Google Ads Campaigns",
      description: "We create and manage Google Ads to ensure your business appears at the top of search engine results, targeting the right audience with precision.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Social Media PPC",
      description: "Our experts build tailored campaigns across social media platforms like Facebook, Instagram, and LinkedIn, driving engagement and conversions.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Display Advertising",
      description: "We create eye-catching display ads that reach your audience on popular websites, increasing brand visibility.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Keyword Research & Targeting",
      description: "Our team performs in-depth keyword analysis to ensure your ads appear for the most relevant search terms.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Ad Copywriting & Design",
      description: "We craft compelling ad copy and design visuals that encourage users to click, delivering high-quality leads.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Continuous Optimization",
      description: "We constantly monitor and adjust your campaigns, ensuring they remain effective and produce the best possible results.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
  ],
  SocialMediaMarketing: [
    {
      title: "Social Media Strategy Development",
      description: "We craft customized strategies based on your business objectives, target audience, and industry trends, ensuring your brand has a consistent and engaging presence.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Content Creation & Management",
      description: "Our team produces creative content—posts, images, videos, and stories—that resonate with your audience and reflect your brand’s voice.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Community Engagement",
      description: "We actively engage with your followers, responding to comments and messages, building a loyal community, and fostering brand advocacy.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Paid Social Media Advertising",
      description: "We design and manage targeted ads on platforms like Facebook, Instagram, and LinkedIn to expand your reach and generate qualified leads.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Influencer Marketing",
      description: "We collaborate with relevant influencers to amplify your brand’s message and connect with a broader audience.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Performance Analytics",
      description: "We track key metrics and provide insights to continuously improve your social media campaigns, ensuring maximum ROI.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
  ],
};

export default function DigitalMarketingStrategies({ selectedService }) {
  const [strategies, setStrategies] = useState([]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Update strategies based on the selected service
  useEffect(() => {
    const serviceStrategies = digitalMarketingStrategiesData[selectedService] || digitalMarketingStrategiesData['PPCAdvertising'];
    setStrategies(serviceStrategies);
  }, [selectedService]);

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
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Strategy for {selectedService} Digital Marketing
        </h2>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index < 3 ? -100 : 100 }} // Start from left for first 3, right for the rest
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index < 3 ? -100 : 100 }} // Animate based on inView state
              transition={{ duration: 0.5, delay: index * 0.2 }} // Control delay for staggered effect
              className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-lg"
            >
              {/* Icon */}
              <div className="bg-blue-500 p-4 rounded-lg">
                {strategy.icon}
              </div>
              {/* Text content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{strategy.title}</h3>
                <p className="text-gray-700">{strategy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
