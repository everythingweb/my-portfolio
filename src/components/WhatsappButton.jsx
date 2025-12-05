import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const WhatsAppButton = ({ phoneNumber, message }) => {
  // Format the phone number: full international format without + or spaces
  // Example: 15551234567
  const whatsappNumber = phoneNumber.replace(/[^\d]/g, '');

  // URL-encode the message
  const encodedMessage = encodeURIComponent(message);
  
  // The WhatsApp Click-to-Chat link structure
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      // Tailwind CSS classes for fixed positioning, styling, and bottom-left placement
      className="fixed bottom-10 right-5 z-50 
                 bg-[#2D3353] 
                 text-white font-bold py-3 px-3 rounded-full 
                 shadow-lg transition duration-300 ease-in-out
                 flex items-center space-x-2"
      aria-label="Chat with us on WhatsApp"
    >
      {/* WhatsApp Icon from heroicons (or use your own SVG) */}
      <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
      
      {/* Optional: Text that appears next to the icon */}
      <span className="sm:inline-block text-sm mr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;