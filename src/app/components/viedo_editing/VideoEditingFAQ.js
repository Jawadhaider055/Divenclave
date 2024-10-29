'use client'
// components/VideoEditingFAQ.js
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

export default function VideoEditingFAQ() {
  const faqs = [
    {
      question: "What types of videos do you edit?",
      answer:
        "We edit all kinds of videos, including social media content, YouTube videos, promotional, and corporate videos.",
    },
    {
      question: "How long does it take to edit a video?",
      answer:
        "Basic edits take a few days, while more complex projects can take a week or more.",
    },
    {
      question: "Can I provide input during the editing process?",
      answer:
        "Yes, we welcome your input and offer revisions to ensure the video meets your expectations.",
    },
    {
      question: "Do you offer video editing for specific platforms like YouTube or Instagram?",
      answer:
        "Yes, we customize videos to fit the requirements of platforms like YouTube, Instagram, TikTok, and more.",
    },
    {
      question: "What do I need to provide for the editing process?",
      answer:
        "You’ll need to provide raw footage, branding elements, and any specific details or creative ideas you have.",
    },
    {
      question: "Can you add subtitles or text overlays to my video?",
      answer:
        "Yes, we can include subtitles, captions, and text overlays as needed.",
    },
    {
      question: "What file formats do you accept and deliver?",
      answer:
        "We accept and deliver in formats like MP4, MOV, and more, based on your needs.",
    },
    {
      question: "How much does video editing cost?",
      answer:
        "Costs depend on the project complexity and length; we provide custom quotes based on your needs.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes, we offer a set number of revision rounds to make sure the final video meets your expectations.",
    },
    {
      question: "Can you work with footage from any camera or device?",
      answer:
        "Yes, we can handle footage from most cameras, smartphones, and recording devices.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center md:text-left font-bold text-gray-800 mb-8">Video Editing FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
