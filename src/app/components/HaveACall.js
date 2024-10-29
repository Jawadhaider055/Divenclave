'use client'; // This line indicates that this component runs on the client side

import { PhoneIcon, ChatBubbleLeftEllipsisIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function CallUsSection() {
  return (
    <section className="bg-white py-12 relative">
      <div className="container mx-auto">
        {/* H1 Heading */}
        <h1 className="text-4xl font-bold text-black text-center mb-8">Have a Call</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 md:px-0">
          
          {/* Call Us Now */}
          <div className="border-2 border-black py-8 px-4 rounded-lg">
            <PhoneIcon className="h-12 w-12 mx-auto text-[#27275B] mb-4 hover:animate-ring" />
            <h3 className="text-black text-lg font-bold mb-2">Have Questions? Call Us Now!</h3>
            <p className="text-black text-lg">+1 908 248 4944</p>
          </div>

          {/* Live Chat with Expert */}
          <div className="border-2 border-black py-8 px-4 rounded-lg">
            <ChatBubbleLeftEllipsisIcon className="h-12 w-12 mx-auto text-[#27275B] mb-4 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h3 className="text-black text-lg font-bold mb-2">Live Chat with Expert</h3>
            <p className="text-black text-lg">It's Free 24/7</p>
          </div>

          {/* Estimate Your Project's Cost */}
          <div className="border-2 border-black py-8 px-4 rounded-lg">
            <DocumentTextIcon className="h-12 w-12 mx-auto text-[#27275B] mb-4 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h3 className="text-black text-lg font-bold mb-2">Estimate Your Project's Cost</h3>
            <p className="text-black text-lg">Talk to Consultant</p>
          </div>

        </div>
      </div>
    </section>
  );
}
