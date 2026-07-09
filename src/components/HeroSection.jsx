import React from 'react';
import gemini from '../assets/gray.png';
import resumeFile from '../assets/resume.pdf'; 
import { motion } from "framer-motion";

// --- PASTE HELPER FUNCTIONS HERE IF NOT IMPORTING ---
const fadeIn = (direction, delay) => ({
  hidden: {
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    opacity: 0,
  },
  show: { x: 0, y: 0, opacity: 1, transition: { type: 'tween', duration: 0.8, delay, ease: 'easeOut' } },
});

const textVariant = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1.25, delay } },
});
// ----------------------------------------------------

const HeroSection = () => {
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Main card wrapper container */}
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-[98%] lg:w-[90%] mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center relative overflow-hidden"
      >        
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Navigation */}
        <motion.header 
          variants={fadeIn('down', 0.4)}
          className="absolute top-8 left-0 right-0 px-8 md:px-12 lg:px-16 flex justify-between items-center z-10"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">E</div>
            <span className="text-xl font-bold text-gray-800">Everything Web</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#about" className="hover:text-purple-600 transition duration-300">About</a>
            <a href="#" className="hover:text-purple-600 transition duration-300">Service</a>
            <a href="#courses" className="hover:text-purple-600 transition duration-300">Portfolio</a>
            <a href="#courses" className="hover:text-purple-600 transition duration-300">Projects</a>
            <a href="#" className="hover:text-purple-600 transition duration-300">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-instagram"></i></a>
          </div>
        </motion.header>

        {/* Content Area */}
        <div className="flex flex-col items-center justify-center w-full mt-30 lg:mt-4">
          <div className="w-full text-center mb-10">
            
            {/* Animated Main Title */}
            <motion.h1 
              variants={textVariant(0.4)}
              className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto"
            >
              Outperform your competitors {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              websites.
              </span>
            </motion.h1>

            {/* Animated Subtitle Description */}
            <motion.p 
              variants={fadeIn('up', 0.6)}
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Your competitors are winning because of better performance. I provide a comprehensive technical audit of your niche to identify their strengths, then build you a faster, more unique React-powered platform that dominates search rankings and doubles your conversion potential.
            </motion.p>

            {/* Animated Action Buttons */}
            <motion.div 
              variants={fadeIn('up', 0.8)}
              className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="https://wa.me."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-center w-64 sm:w-auto"
              >
                Hire Me
              </a>
              <a
                href={resumeFile}
                download="My_Resume.pdf"
                className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 text-lg font-medium flex items-center justify-center hover:bg-gray-50 transition duration-300 w-64 sm:w-auto"
              >
                Download Resume <span className="ml-2">↓</span>
              </a>
            </motion.div>

            {/* Animated Stats Numbers Footer */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
              <motion.div variants={fadeIn('right', 1.0)}>
                <p className="text-4xl font-bold text-gray-900">650+</p>
                <p className="text-md text-gray-500">Projects Done</p>
              </motion.div>
              <motion.div variants={fadeIn('up', 1.1)}>
                <p className="text-4xl font-bold text-gray-900">99%</p>
                <p className="text-md text-gray-500">Happy Clients</p>
              </motion.div>
              <motion.div variants={fadeIn('left', 1.2)}>
                <p className="text-4xl font-bold text-gray-900">240+</p>
                <p className="text-md text-gray-500">Fine Artworks</p>
              </motion.div>
            </div>

          </div>
        </div>
      
      </motion.div>
    </div>
  );
};

export default HeroSection;
