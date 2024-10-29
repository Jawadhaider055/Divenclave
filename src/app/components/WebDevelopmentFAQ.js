'use client'
// components/WebDevelopmentFAQ.js
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

export default function WebDevelopmentFAQ() {
  const faqs = [
    {
      question: "Do you offer support after the website launch?",
      answer:
        "Yes, we offer post-launch support to fix any issues or make adjustments to ensure your site continues to run smoothly.",
    },
    {
      question: "Can you integrate third-party services like payment providers or newsletters?",
      answer:
        "Yes, we can seamlessly integrate third-party services such as payment gateways and email marketing platforms into your site.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "The timeline for completing your project depends on its complexity. On average, here are our typical timelines:\n" +
        "WordPress Websites: Approximately 10 business days.\n" +
        "Shopify and Wix Websites: Around 15 business days.\n" +
        "Custom Websites: Typically, 25 to 30 business days, depending on the specific requirements and scope of the project.\n" +
        "We strive to deliver high-quality results within these timelines while ensuring that each project meets your expectations.",
    },
    {
      question: "Do you offer ongoing support after the website is live?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure your website runs smoothly even after it’s launched. Our support includes:\n" +
        "For WordPress: 15 days of free support starting from the final delivery date, along with a user manual video and documentation to empower you to make changes independently.\n" +
        "For Shopify: 15 days of free support starting from the final delivery date, plus a user manual video and documentation for easy self-management.\n" +
        "For Wix: 15 days of free support starting from the final delivery date, along with a user manual video and documentation to help you manage your site.\n" +
        "For Custom Websites: 40 days of free support starting from the final delivery date for any issues that may arise. Rest assured, our custom developments are thoroughly tested to minimize issues.\n" +
        "We're here to help you navigate any challenges and ensure your site continues to perform optimally.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-8">Web Development FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
