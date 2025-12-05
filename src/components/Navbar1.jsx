import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logoSrc from '../assets/logo2.png';

// A single component for the responsive navbar.
const Navbar1 = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className="fixed top-0 left-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section with Image */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center" onClick={() => onNavClick('home')}>
             <img src={logoSrc} alt="Company Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div  className="hidden md:block">
            <div  className="ml-10 flex items-baseline space-x-4">
              <a href="#" onClick={() => onNavClick('home')} className={`text-#66D7AE-400 hover:text-#66D7AE px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === 'home' ? 'text-[#66D7AE] font-bold' : ''}`}>
                Home
              </a>
              <a href="#about" onClick={() => onNavClick('about')} className={`text-#66D7AE-400 hover:text-#66D7AE px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === 'about' ? 'text-[#66D7AE] font-bold' : ''}`}>
                About Us
              </a>
              <a href="#courses" onClick={() => onNavClick('services')} className={`text-#66D7AE-400 hover:text-#66D7AE px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === 'services' ? 'text-[#66D7AE] font-bold' : ''}`}>
                Our Service
              </a>
              <a href="#testimonials" onClick={() => onNavClick('testimonials')} className={`text-#66D7AE-400 hover:text-#66D7AE px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === 'testimonials' ? 'text-[#66D7AE] font-bold' : ''}`}>
                Testimonials
              </a>
              
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#66D7AE] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#66D7AE] transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Close icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            onClick={() => { onNavClick('home'); toggleMenu(); }}
            className="block text-gray-400 hover:bg-gray-800 hover:text-[#66D7AE] rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => { onNavClick('about'); toggleMenu(); }}
            className="block text-gray-400 hover:bg-gray-800 hover:text-[#66D7AE] rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#courses"
            onClick={() => { onNavClick('services'); toggleMenu(); }}
            className="block text-gray-400 hover:bg-gray-800 hover:text-[#66D7AE] rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Our Service
          </a>
          <a
            href="#testimonials"
            onClick={() => { onNavClick('testimonials'); toggleMenu(); }}
            className="block text-gray-400 hover:bg-gray-800 hover:text-[#66D7AE] rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Testimonials
          </a>
         
        </div>
      </div>
    </nav>
  );
};


export default Navbar1;
