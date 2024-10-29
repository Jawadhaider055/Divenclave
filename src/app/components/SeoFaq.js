'use client'
// components/SeoFAQ.js
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full p-4 text-left focus:outline-none"
      >
        <span className={isOpen ? "text-[#27275b] font-semibold" : "text-gray-600"}>
          {question}
        </span>
        <span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-600" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-4" style={{ color: '#27275b' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default function SeoFAQ() {
  const faqs = [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO results typically take 3-6 months, depending on your industry, competition, and strategy.",
    },
    {
      question: "Do I need ongoing SEO services after my site is optimized?",
      answer:
        "Yes, SEO is an ongoing process because search engine algorithms and competition constantly change.",
    },
    {
      question: "How does SEO help my local business?",
      answer:
        "Local SEO helps your business appear in local searches, attracting nearby customers and improving visibility on Google Maps.",
    },
    {
      question: "Why does technical SEO matter?",
      answer:
        "Technical SEO is important because it improves site accessibility, user experience, and loading speed, which can lead to higher search engine rankings and increased visibility for your brand.",
    },
    {
      question: "What is the cost of SEO services?",
      answer:
        "SEO pricing varies based on your needs, the complexity of your site, and the level of competition in your industry.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-8">SEO FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
