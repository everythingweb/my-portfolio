import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming FaWhatsapp is imported

const ActionButtons = ({ phoneNumber = '2347018952882', message = 'Hello, I would like to know more about the training.' }) => {
  // WhatsApp link format: https://wa.me/PHONE_NUMBER?text=PRE_FILLED_MESSAGE
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
      {/* 1. WhatsApp Link Button (Changed from <button> to <a>) */}
      <a 
        href={whatsappLink}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="flex items-center justify-center px-12 py-4 bg-[#71e9bdc4]   text-#66D7AE font-semibold rounded-lg text-lg  transition duration-300 shadow-md whitespace-nowrap" // Added whitespace-nowrap for better mobile layout
      >
        <FaWhatsapp className="mr-3 text-xl" /> Let's Talk
      </a>
      
      {/* 2. Standard Button (Remains a <button>) */}
     
    </div>
  );
};

export default ActionButtons;