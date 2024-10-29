"use client"; // Ensure this is a Client Component

import { useState, useEffect, useRef } from 'react';
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, BeakerIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Data for strategies based on platform selection
const strategiesData = {
  WordPress: [
    {
      title: "Requirements Analysis",
      description: "Gather all the requirements and analyze them to determine the best methods for building your WordPress site.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Research & Study",
      description: "Conduct research on trends, competitors, and SEO best practices for WordPress.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Wireframing & Design",
      description: "Prepare creative wireframes and designs for your WordPress website.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Development",
      description: "Develop a fully functional WordPress website with custom features and plugins.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Testing & Debugging",
      description: "Thoroughly test the site for any bugs and ensure cross-browser compatibility.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploy the website and provide ongoing maintenance and updates.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],

  Shopify: [
    {
      title: "Requirements Gathering",
      description: "Identify the needs for your Shopify store and analyze your business model.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Theme Customization",
      description: "Customize your Shopify theme to match your brand identity and enhance user experience.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "App Integration",
      description: "Integrate essential Shopify apps for payment processing, marketing, and more.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "SEO & Optimization",
      description: "Optimize your Shopify store for search engines to increase visibility.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Testing & Debugging",
      description: "Test your Shopify store to ensure a smooth shopping experience.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Launch & Support",
      description: "Launch your Shopify store and provide ongoing support and maintenance.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  
  Wix: [
    {
      title: "Initial Consultation",
      description: "Discuss your requirements and expectations for a Wix website.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Design Customization",
      description: "Create a custom design using Wix’s drag-and-drop features.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "App Integration",
      description: "Integrate useful apps to enhance the functionality of your Wix site.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "SEO Optimization",
      description: "Optimize your Wix site for search engines to improve visibility.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Testing & Launch",
      description: "Thoroughly test the site before launching it to the public.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Ongoing Maintenance",
      description: "Provide ongoing support and maintenance for your Wix website.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  
  SquareSpace: [
    {
      title: "Initial Setup",
      description: "Set up your SquareSpace account and choose the right plan for your needs.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Design & Customization",
      description: "Create a visually appealing design tailored to your brand using SquareSpace.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Content Strategy",
      description: "Develop a content strategy that resonates with your target audience.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "SEO & Analytics",
      description: "Optimize your site for search engines and set up analytics for tracking.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Testing Before Launch",
      description: "Ensure everything works smoothly before launching your SquareSpace site.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Post-Launch Support",
      description: "Offer ongoing support and maintenance after the site goes live.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],

  CustomWebsite: [
    {
      title: "Needs Assessment",
      description: "Assess the specific needs and goals for your custom website.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Custom Design",
      description: "Create a bespoke design that aligns with your business objectives.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Development Phase",
      description: "Develop the website using modern technologies tailored to your requirements.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Quality Assurance",
      description: "Conduct thorough testing to ensure functionality and performance.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Deployment & Launch",
      description: "Deploy the website and ensure it is fully operational.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Maintenance & Updates",
      description: "Provide ongoing maintenance and updates as needed.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
};

export default function WebStrategies({ selectedPlatform }) {
  const [strategies, setStrategies] = useState([]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Update strategies based on the selected platform
  useEffect(() => {
    const platformStrategies = strategiesData[selectedPlatform] || strategiesData['WordPress'];
    setStrategies(platformStrategies);
  }, [selectedPlatform]);

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
          Our Strategy for {selectedPlatform} Development
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
