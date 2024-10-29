"use client"; // Ensure this is a Client Component

import { useState, useEffect, useRef } from 'react';
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, BeakerIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Process data applied across all services
const contentWritingStrategiesData = [
  {
    title: "Initial Consultation",
    description: "We engage clients to discuss project goals and requirements. Understanding the target audience is essential for alignment. This step sets a strong foundation for our collaboration.",
    icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Research and Planning",
    description: "We conduct thorough research to gather valuable insights. This includes analyzing competitors and exploring industry trends. A detailed outline is created for content organization.",
    icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Content Creation",
    description: "Our team writes engaging content aligned with brand voice. Clarity and relevance are prioritized for audience connection. The goal is to create compelling, informative pieces.",
    icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Editing and Review",
    description: "We revise the content for clarity, grammar, and coherence. SEO optimization is essential for improved visibility online. Client feedback is incorporated for final adjustments.",
    icon: <BeakerIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Final Approval",
    description: "The final draft is presented to the client for review. This step ensures that the content meets client expectations fully. We make necessary changes based on client input.",
    icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Publishing and Distribution",
    description: "We assist clients in publishing content on appropriate platforms. Promotion through suitable channels helps increase reach. This final step aims to drive engagement and traffic.",
    icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
  },
];

export default function ContentWritingStrategies({ selectedService }) {
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
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          The Process to Engaging & Quality Content Creation
        </h2>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentWritingStrategiesData.map((strategy, index) => (
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
