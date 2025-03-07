// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';
const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = '+1234567890';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;