"use client"; // Ensure this is a Client Component

import { useState, useEffect, useRef } from 'react';
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon, PencilSquareIcon, CodeBracketIcon, BeakerIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Data for strategies based on service selection
const seoStrategiesData = {
  KeywordResearch: [
    {
      title: "Comprehensive Keyword Research",
      description: "We don’t just compile random keywords—we conduct in-depth research to find the most relevant and impactful keywords for your niche. Using industry-leading tools like Semrush and Ahrefs, we generate a list of highly targeted long-tail keywords. We prioritize keywords based on intent, ensuring they align with what users are actively searching for.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Deep Dive into Google’s First Page",
      description: "Our team meticulously analyzes the top-performing pages for each of your target keywords. We identify patterns and successful strategies used by your competitors, ensuring that your content will meet—and exceed—the standards of Google’s first page.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Crafting Unique and Superior Content",
      description: "Standing out in a crowded marketplace requires creativity. At DivEnclave, we produce content that’s either a significant improvement on existing resources or something entirely unique. Our content is designed to offer fresh insights, provide exceptional value, and captivate readers.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Building Content Hooks for Engagement",
      description: "We strategically add 'hooks' that captivate and encourage backlinks. Whether it’s exclusive data, a comprehensive guide, or visually compelling infographics, we give readers a reason to stay on your page—and for other sites to link to you.",
      icon: <CodeBracketIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Mastering On-Page SEO Optimization",
      description: "Our SEO optimization is laser-focused on improving your site’s authority and performance. We employ short, keyword-rich URLs, strategic internal linking, and smart keyword placement that reflects actual search intent.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Aligning Content with Search Intent",
      description: "Ranking isn’t just about keywords—it’s about intent. Our team analyzes the search intent behind your target keywords and crafts content that perfectly aligns with what users are looking for.",
      icon: <PencilSquareIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Prioritizing Content Design",
      description: "Content without design can fall flat. That’s why we emphasize a strong, visually engaging design that enhances the user experience. We incorporate custom graphics, data visualizations, and screenshots.",
      icon: <MagnifyingGlassIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Building High-Quality Backlinks",
      description: "At DivEnclave, we understand the power of link building. We seek out opportunities where your content can serve as a valuable resource, often by replacing broken links on high-authority websites or contributing guest posts.",
      icon: <ClipboardDocumentCheckIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Ongoing Content Optimization & Updates",
      description: "SEO is never a 'set it and forget it' process. We regularly revisit and refresh your content to ensure it remains relevant and continues to drive traffic.",
      icon: <BeakerIcon className="w-16 h-16 text-white" />,
    },
    {
      title: "Delivering Results That Last",
      description: "Our creative strategy is built around sustainable growth. Whether you’re aiming for quick wins or long-term dominance, DivEnclave is committed to delivering SEO results that help your brand grow.",
      icon: <CloudArrowUpIcon className="w-16 h-16 text-white" />,
    },
  ],
  // Add other services' strategies if needed...
};

export default function SeoStrategies({ selectedService }) {
  const [strategies, setStrategies] = useState([]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Update strategies based on the selected service
  useEffect(() => {
    const serviceStrategies = seoStrategiesData[selectedService] || seoStrategiesData['KeywordResearch'];
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
          Our Strategy for {selectedService} SEO Optimization
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
