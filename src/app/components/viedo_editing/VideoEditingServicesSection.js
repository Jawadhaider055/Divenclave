"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import { useState } from 'react';
import VideoEditingStrategies from './VideoEditingStrategies'; // Import the Strategies component

export default function VideoEditingSection() {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState('BasicVideoEditing');

  // Data for each service
  const videoEditingServiceData = {
    BasicVideoEditing: {
      title: 'Basic Video Editing | Simple Edits to Enhance Your Videos',
      description: 'Our Basic Video Editing service is perfect for those who need quick, straightforward edits to enhance their videos. This includes trimming unwanted sections, adding simple transitions, syncing audio, and basic color correction to give your footage a clean and polished look.',
      offer: [
        'Clip Trimming and Cutting',
        'Basic Transitions',
        'Audio Syncing',
        'Basic Color Correction',
        'Text Overlays and Basic Titles',
        'Format Conversion',
        'Fast Turnaround Time',
      ],
      image: '/video-editing/basic-video-editing.jpg',
    },
    AdvancedVideoEditing: {
      title: 'Advanced Video Editing | High-Level Edits for Stunning Results',
      description: 'Our Advanced Video Editing service is designed for those who need more complex and creative edits to take their videos to the next level. This includes detailed scene structuring, advanced transitions, motion graphics, visual effects, and multi-layer editing for a polished, professional look.',
      offer: [
        'Advanced Transitions and Effects',
        'Multi-Layer Editing',
        'Color Grading',
        'Sound Design and Audio Mixing',
        'Visual Effects (VFX)',
        'Titles and Graphics',
        'Revisions and Customization',
        'Optimized Export for Platforms',
      ],
      image: '/video-editing/advanced-video-editing.jpg',
    },
    SocialMediaVideoEditing: {
      title: 'Social Media Video Editing | Boost Engagement with Social Videos',
      description: 'Our Social Media Video Editing service is tailored for creating engaging, high-impact content that grabs attention on platforms like Instagram, Facebook, TikTok, and YouTube.',
      offer: [
        'Platform-Specific Editing',
        'Attention-Grabbing Intros',
        'Short-Form Video Optimization',
        'Captions and Subtitles',
        'Engaging Text and Graphics',
        'Branded Content',
        'Music and Sound Effects',
        'Quick Turnaround',
      ],
      image: '/video-editing/social-media-video-editing.jpg',
    },
    PromotionalVideoEditing: {
      title: 'Promotional Video Editing | Drive Website Traffic and Sales',
      description: 'Our Promotional Video Editing service is designed to help businesses and brands create compelling videos that drive awareness, interest, and action.',
      offer: [
        'Storyboarding and Concept Development',
        'High-Quality Visuals and Transitions',
        'Compelling Call-to-Action (CTA)',
        'Brand Alignment',
        'Custom Graphics and Animations',
        'Professional Audio and Voiceovers',
        'Targeted Editing for Distribution',
      ],
      image: '/video-editing/promotional-video-editing.jpg',
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
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Specialized Video Editing Solutions for Every Need</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {/* Video Editing Service Buttons */}
          {['BasicVideoEditing', 'AdvancedVideoEditing', 'SocialMediaVideoEditing', 'PromotionalVideoEditing'].map((service, index) => (
            <motion.button
              key={service}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
              className={`py-2 px-2 sm:px-4 text-xs md:text-sm rounded-lg shadow-lg text-center ${
                service === 'BasicVideoEditing' ? 'bg-blue-600 text-white' :
                service === 'AdvancedVideoEditing' ? 'bg-green-500 text-white' :
                service === 'SocialMediaVideoEditing' ? 'bg-yellow-400 text-black' :
                'bg-gray-800 text-white'
              }`}
              onClick={() => setSelectedService(service)}
            >
              {videoEditingServiceData[service].title.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* Main Box Container with 20px Padding */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg max-w-6xl w-full" style={{ backgroundColor: '#FFA500' }}>
          {/* Heading and Description */}
          <div className="text-left justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{videoEditingServiceData[selectedService].title}</h2>
            <p className="text-lg text-white leading-relaxed">{videoEditingServiceData[selectedService].description}</p>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex flex-col md:flex-row items-left text-left justify-between w-full px-4 md:px-0">
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2 text-white">What We Offer:</h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                {videoEditingServiceData[selectedService].offer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-4 md:px-0">
              <img
                src={videoEditingServiceData[selectedService].image}
                alt={videoEditingServiceData[selectedService].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Include the VideoEditingStrategies component */}
        <VideoEditingStrategies selectedService={selectedService} />
      </div>
    </section>
  );
}