'use client'; // Add this line to specify it's a client component

import { motion } from 'framer-motion';

// Dummy reviews data (total of 18 reviews)
const reviews = [
  { id: 1, name: "Dr. Abe Malkin", company: "Drip Hydration", review: "Neon increased our sales by 54% the first month. The next month, they increased our sales by 227% and increased our ROAS by 44%." },
  { id: 2, name: "Alexis Trevino", company: "Soundboks", review: "The Neon team helped inform USA creative strategy and improve budget allocation." },
  { id: 3, name: "Kieran Derfus", company: "Same Day Health", review: "The team at Neon was invaluable to our growth. They were consistent, responsive, reliable, and always thinking ahead to the next phase." },
  { id: 4, name: "John Doe", company: "Acme Corp", review: "The work Neon has done for us is outstanding. Their team went above and beyond to deliver the results we needed." },
  { id: 5, name: "Jane Smith", company: "Example Inc.", review: "We saw a significant improvement in our marketing efforts and sales, all thanks to Neon’s hard work and expertise." },
  { id: 6, name: "Emily Johnson", company: "Healthify", review: "Our collaboration with Neon transformed our approach to digital marketing." },
  { id: 7, name: "Michael Brown", company: "TechFlow", review: "Neon’s work boosted our online presence beyond expectations." },
  { id: 8, name: "Sarah Miller", company: "Lifestyle Co.", review: "Neon was instrumental in helping us grow our audience and brand reach." },
  { id: 9, name: "Daniel Wilson", company: "EnviroTech", review: "Neon provided outstanding support and creative solutions." },
  { id: 10, name: "Laura Evans", company: "EduWorld", review: "We saw a significant boost in our engagement thanks to Neon's strategies." },
  { id: 11, name: "Chris Taylor", company: "FitLife", review: "Their innovative ideas really helped us stand out in a crowded market." },
  { id: 12, name: "Lisa Wong", company: "Foodie Inc.", review: "Neon brought new life to our digital campaigns and social media presence." },
  { id: 13, name: "David Park", company: "Green Energy", review: "We’ve seen fantastic results since working with Neon." },
  { id: 14, name: "Megan White", company: "StartUp Nation", review: "The Neon team is proactive, communicative, and results-driven." },
  { id: 15, name: "Ethan James", company: "MediCare Solutions", review: "Neon helped increase our visibility and lead generation." },
  { id: 16, name: "Rachel Adams", company: "FashionForward", review: "Their team really understood our vision and brought it to life." },
  { id: 17, name: "Thomas Lee", company: "EcoTrend", review: "Neon exceeded our expectations in every aspect." },
  { id: 18, name: "Olivia Brown", company: "Tech Start", review: "Working with Neon has been a game-changer for our business." },
];

// Scrolling motion variants
const scrollVariants = {
  animate: {
    y: [0, -600], // Adjust this value based on total height and review size (600px for 3 rows)
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Slower scroll speed
        ease: "linear",
      },
    },
  },
};

const Reviews = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className="mx-auto max-w-6xl relative md:rounded-xl overflow-hidden">
        {/* Fixed heading with background color #FFA500 */}
        <h2 className="text-2xl font-bold mb-8 text-white text-center bg-[#FFA500] py-4">
          See What Clients Think
        </h2>

        {/* Container that shows only 3 rows, with top and bottom gradient opacity effect */}
        <div className="relative overflow-hidden h-[600px]">
          {/* Top gradient for fading effect */}
          <div className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
          
          {/* Bottom gradient for fading effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

          {/* Scrolling reviews */}
          <motion.div
            variants={scrollVariants}
            animate="animate"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 sm:px-6" // 2 columns on mobile, 3 on larger screens
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white text-gray-900 shadow-md rounded-lg p-4 flex flex-col justify-between h-auto break-words" // Adjusted for mobile
              >
                {/* Rating (Static 5 stars for demonstration) */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.21c.969 0 1.372 1.24.588 1.81l-3.405 2.47a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.405-2.47a1 1 0 00-1.175 0l-3.405 2.47c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.62 9.397c-.784-.57-.38-1.81.588-1.81h4.21a1 1 0 00.951-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm mb-2 leading-relaxed text-gray-700 break-words">"{review.review}"</p>

                {/* Reviewer name and company */}
                <p className="font-semibold text-sm text-gray-800">{review.name}</p>
                <p className="text-xs text-gray-500">{review.company}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
