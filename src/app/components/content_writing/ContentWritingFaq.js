'use client'
// components/ContentWritingFAQ.js
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

export default function ContentWritingFAQ() {
  const faqs = [
    {
      question: "What types of content writing services do you offer?",
      answer:
        "We offer a variety of content writing services, including blog writing, copywriting, web content writing, social media content writing, and more. Each service is tailored to meet your specific needs and goals.",
    },
    {
      question: "How do you ensure the content is SEO-friendly?",
      answer:
        "Our team follows SEO best practices by conducting keyword research and naturally integrating relevant keywords into the content. We also focus on creating engaging headlines, meta descriptions, and using proper formatting to improve search engine visibility.",
    },
    {
      question: "Can I request revisions after the content is delivered?",
      answer:
        "Yes, we offer a revision process to ensure that the content meets your expectations. We encourage feedback and are happy to make necessary changes until you are satisfied with the final product.",
    },
    {
      question: "How long does it take to complete a content writing project?",
      answer:
        "The timeline for completing a content writing project depends on its scope and complexity. Generally, we provide a timeline during the initial consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you conduct research before writing the content?",
      answer:
        "Absolutely! Our writers conduct thorough research to gather accurate and relevant information for each piece. This ensures that the content is informative and adds value to your audience.",
    },
    {
      question: "How do you determine the pricing for your content writing services?",
      answer:
        "Pricing is based on various factors, including the type of content, length, complexity, and turnaround time. We provide a clear quote during the initial consultation based on your specific requirements.",
    },
    {
      question: "Can you write in different styles or tones?",
      answer:
        "Yes, our team is skilled in writing in various styles and tones, including professional, conversational, technical, and creative. We adapt our writing to match your brand voice and target audience.",
    },
    {
      question: "What if I have specific guidelines or preferences for the content?",
      answer:
        "We encourage clients to share any specific guidelines, preferences, or examples they have in mind. This helps us create content that aligns closely with your vision and expectations.",
    },
    {
      question: "Will the content be original and plagiarism-free?",
      answer:
        "Yes, all content we produce is original and written specifically for your project. We also run plagiarism checks to ensure that the content is unique and does not infringe on any copyrights.",
    },
    {
      question: "How can I track the progress of my content writing project?",
      answer:
        "We maintain open communication throughout the process. You can reach out to us anytime for updates, and we will provide you with progress reports as needed.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-8">Content Writing FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
