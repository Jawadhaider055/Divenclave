"use client"; // Ensure this is a Client Component

import { useState, useEffect, useRef } from 'react';
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, BeakerIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Strategies applied across all services
const videoEditingStrategiesData = [
  {
    title: "Understanding Your Vision",
    description: "We start by discussing your project in detail, understanding your goals, style preferences, and target audience. This ensures that the final video reflects your vision perfectly.",
    icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Reviewing Raw Footage",
    description: "Once we have your raw footage, we carefully review it to identify key moments, cuts, and opportunities for storytelling, ensuring that we retain the best parts for your video.",
    icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Structuring and Cutting Clips",
    description: "Next, we arrange the video’s structure by trimming unnecessary parts, organizing clips, and creating a smooth, cohesive flow that keeps the audience engaged from start to finish.",
    icon: <BeakerIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Adding Effects and Transitions",
    description: "We enhance your video with the right effects, transitions, and motion graphics to add polish. These elements keep your content dynamic without overwhelming the viewer.",
    icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Audio Enhancement and Syncing",
    description: "We clean up background noise, improve sound quality, and sync audio tracks with the video to create a crisp, professional finish. Great audio is essential for a complete viewer experience.",
    icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
  },
  {
    title: "Final Review and Revisions",
    description: "Before delivering the final video, we offer a review round for feedback and adjustments. We work with you to make sure the final product aligns perfectly with your expectations.",
    icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
  },
];

export default function VideoEditingStrategies({ selectedService }) {
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
          Our Strategy for {selectedService} Video Editing
        </h2>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoEditingStrategiesData.map((strategy, index) => (
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
