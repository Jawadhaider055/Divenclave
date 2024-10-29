'use client'; // This line indicates that this component runs on the client side

import { motion } from 'framer-motion'; // Import Framer Motion

export default function CaseStudySection() {
  const caseStudies = [
    {
      title: "UI/UX Design",
      image: "/ux-ui-design.jpg", // Replace with actual path
    },
    {
      title: "Web Development",
      image: "/web-development.jpg", // Replace with actual path
    },
    {
      title: "Google SEO",
      image: "/seo.jpg", // Replace with actual path
    },
    {
      title: "Social Media Marketing",
      image: "/social-media.jpg", // Replace with actual path
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6 md:px-8"> {/* Added padding for mobile */}
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Case Studies</h2>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"> {/* Adjusted gaps for mobile */}
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="relative bg-cover bg-center h-64 rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${caseStudy.image})` }}
              initial={{ opacity: 0, x: -100 }} // Initial state
              whileInView={{ opacity: 1, x: 0 }} // State when in view
              transition={{ duration: 1, delay: index * 0.1 }} // Adjusted duration for slower animation
              viewport={{ once: false }} // Allow animation to trigger when entering the viewport
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                {/* Title */}
                <h3 className="text-white text-xl font-bold">{caseStudy.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
