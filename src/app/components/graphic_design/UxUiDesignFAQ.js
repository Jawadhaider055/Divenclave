'use client'
// components/UxUiDesignFAQ.js
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

export default function UxUiDesignFAQ() {
  const faqs = [
    {
      question: "What graphic design services do you offer?",
      answer:
        "We offer a variety of graphic design services, including logo design, marketing materials, illustration, and UX/UI design.",
    },
    {
      question: "How long does it take to complete a graphic design project?",
      answer:
        "The timeline depends on the project scope. Simple designs may take a few days, while comprehensive branding projects can take several weeks.",
    },
    {
      question: "Can you help with branding and identity design?",
      answer:
        "Yes, we specialize in branding and identity design, helping you create a cohesive visual identity that reflects your brand values.",
    },
    {
      question: "Do you provide revisions for your designs?",
      answer:
        "Absolutely! We offer revisions to ensure that the final design aligns with your vision and expectations.",
    },
    {
      question: "What is the difference between UX and UI design?",
      answer:
        "UX design focuses on the overall user experience, while UI design deals with the visual elements and interactivity of a product.",
    },
    {
      question: "Can I see samples of your previous work?",
      answer:
        "Yes, we have a portfolio showcasing our previous graphic design projects. We’d be happy to share it with you.",
    },
    {
      question: "How do you ensure designs are unique and original?",
      answer:
        "We conduct thorough research and collaborate closely with clients to develop unique designs tailored to their specific needs.",
    },
    {
      question: "What files will I receive upon project completion?",
      answer:
        "You will receive high-resolution files in various formats, including PNG, JPEG, and vector files, depending on the project.",
    },
    {
      question: "Do you offer ongoing design support?",
      answer:
        "Yes, we provide ongoing support for updates and additional design needs as your business grows.",
    },
    {
      question: "How can I get started with your graphic design services?",
      answer:
        "Simply contact us through our website, and we’ll schedule a consultation to discuss your needs and project goals.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-8">UX/UI Design FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
