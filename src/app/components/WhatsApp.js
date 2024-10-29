"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon from react-icons

const WhatsAppChat = () => {
  const phoneNumber = '+923493778737'; // The contact number

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank'); // Open the chat in a new tab
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </button>
    </div>
  );
};

export default WhatsAppChat;
