"use client"; // Ensure this is a Client Component

import { useState, useEffect, useRef } from 'react';
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, BeakerIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Data for strategies based on service selection
const graphicDesignStrategiesData = {
  LogoDesign: [
    {
      title: "Custom Logo Design",
      description: "Tailored logos that perfectly reflect your brand identity.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Multiple Design Concepts",
      description: "We provide several initial concepts for you to choose from.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Unlimited Revisions",
      description: "We fine-tune the design until it’s just right.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Scalable Designs",
      description: "Logos optimized for use across all mediums, from websites to print.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Brand Consistency",
      description: "Ensuring your logo aligns with your overall branding strategy.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  UxUi: [
    {
      title: "User-Centered Design",
      description: "We prioritize the needs and behaviors of your users, ensuring every interaction is intuitive.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Responsive & Adaptive Designs",
      description: "Creating designs that work seamlessly across all devices and screen sizes.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Prototyping & Wireframes",
      description: "Offering visual mockups to help you visualize the user journey before development.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Aesthetically Pleasing UI",
      description: "Designing interfaces that are visually engaging while maintaining functionality.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Consistency Across Platforms",
      description: "Ensuring uniformity in design elements for brand consistency across digital platforms.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  Infographics: [
    {
      title: "Custom Infographic Design",
      description: "Tailored infographics that align with your brand's identity and goals.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Data Visualization",
      description: "Transforming complex data into simple, easy-to-understand visuals.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Engaging Storytelling",
      description: "Crafting narratives that connect with your audience and promote your message.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Social Media Compatibility",
      description: "Infographics optimized for sharing across various social media platforms.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Versatile Formats",
      description: "Delivering infographics in multiple formats suitable for web, print, and presentations.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  MarketingDesign: [
    {
      title: "Tailored Advertising Campaigns",
      description: "Custom designs that cater to specific marketing objectives and target audiences.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Print & Digital Media",
      description: "Comprehensive design solutions for both traditional print media and digital platforms.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Brand Identity Development",
      description: "Designing marketing materials that reinforce your brand's message and values.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Engaging Visual Content",
      description: "Creating eye-catching graphics that increase user engagement and drive traffic.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Market Research Insights",
      description: "Utilizing research to inform design decisions, ensuring that materials resonate with your audience.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  Illustration: [
    {
      title: "Custom Illustrations",
      description: "Tailored artwork designed to meet your project’s specific requirements.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Diverse Styles",
      description: "From hand-drawn to digital art, we provide various styles to suit your brand and message.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Storyboarding",
      description: "Creating visual narratives that outline the flow of your story or concept.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Brand-Specific Illustrations",
      description: "Crafting illustrations that align with your brand’s aesthetic and personality.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Quick Turnaround Times",
      description: "Delivering high-quality illustrations within your project timelines without compromising quality.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
};

export default function GraphicDesignStrategies({ selectedService }) {
  const [strategies, setStrategies] = useState([]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Update strategies based on the selected service
  useEffect(() => {
    const serviceStrategies = graphicDesignStrategiesData[selectedService] || graphicDesignStrategiesData['LogoDesign'];
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
          Our Strategy for {selectedService} Design
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
