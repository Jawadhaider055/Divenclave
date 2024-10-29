'use client'
// components/DigitalMarketingFAQ.js
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

export default function DigitalMarketingFAQ() {
  const faqs = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing refers to the use of online channels like search engines, social media, email, and websites to promote a business, product, or service.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary based on strategy, but generally, you can expect to see significant results from digital marketing efforts within 3 to 6 months.",
    },
    {
      question: "Why is SEO important in digital marketing?",
      answer:
        "SEO improves your website's visibility on search engines, driving organic traffic and making it easier for potential customers to find you.",
    },
    {
      question: "What is the difference between organic and paid digital marketing?",
      answer:
        "Organic marketing focuses on building long-term engagement without paid ads, while paid marketing involves placing ads through PPC or social media to gain immediate visibility.",
    },
    {
      question: "How does social media marketing benefit my business?",
      answer:
        "Social media marketing helps increase brand awareness, engage with your audience, and drive traffic and leads through both organic content and targeted ads.",
    },
    {
      question: "What is PPC, and how does it work?",
      answer:
        "Pay-per-click (PPC) is an online advertising model where you pay each time someone clicks on your ad. It's a way to buy visits to your website rather than earning them organically.",
    },
    {
      question: "How do you measure the success of a digital marketing campaign?",
      answer:
        "We measure success using key performance indicators (KPIs) like traffic, conversions, engagement rates, ROI, and more, depending on the goals of your campaign.",
    },
    {
      question: "Can digital marketing work for small businesses?",
      answer:
        "Yes, digital marketing is highly effective for small businesses. It allows you to target specific audiences and compete with larger companies on a smaller budget.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-8">Digital Marketing FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
