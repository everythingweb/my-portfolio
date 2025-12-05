import React from 'react';
import { useState, useEffect } from 'react';
import heroImage from '../assets/fullstack-2.jpg';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FaClock, FaCalendarAlt, FaBook, FaMoon, FaWhatsapp } from 'react-icons/fa'; // Import necessary icons
import { Link } from 'react-router';
import ActionButtons from './ActionButtons';
// This is a single-file React application that replicates the hero section
// from the provided image, with a new color palette and typography.
// It uses Tailwind CSS for a responsive layout.
// All components, logic, and styling are contained within this one file.

const Hero = () => {
  const [email, setEmail] = useState('');

  // Added state and phrases for the dynamic text animation
  const phrases = [
    "Unlock tech potential",
    "Launch Tech Journey",
    "Master New Skills",
    "Innovate and Create",
    "Join a Growing Field"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Set an interval to change the phrase every 3 seconds
    const interval = setInterval(() => {
      // Start fade-out animation
      setIsFading(true);

      // After the fade-out, change the phrase and fade back in
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 500); // This should match the fade-out duration
    }, 3000); // Time between phrase changes

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [phrases.length]); // Re-run effect if phrases array changes

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat] overflow-hidden">
      {/* Custom Styles for the fonts */}
      <style>
        {`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Syne:wght@700;800&display=swap');
        `}
      </style>
      
      {/* Container with the new background color */}
      <div className="min-h-screen">
      {/* Header with Navigation */}
    

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 pt-0 md:pt-0 lg:pt-0 gap-8">
        <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-10 pb-10 container mx-auto">
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <div className="invisible flex items-center gap-2 bg-[#474a58] w-fit px-4 py-2 rounded-full hover:bg-[#5a5d6a] transition-colors cursor-pointer group">
                <span className="text-[#66D7AE] group-hover:scale-110 transition-transform">★</span>
                <span className="text-sm font-medium text-gray-300">Get started today</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[Syne]">
            Break into Tech and 
              <span className={`
                  text-[#66D7AE] relative inline-block transition-opacity duration-500
                  ${isFading ? 'opacity-0' : 'opacity-100'}
                `}>
                {phrases[currentPhraseIndex]}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg/60"></span>
              </span> with Buc Regal Tech
              <span className="inline-block ml-2 animate-pulse">⏰</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl font-[Montserrat]">
              Go from learner to leading professional in as little as four months—no need to quit your job!
            </p>
            {/* Buttons */}
                       <ActionButtons />
          </div>
          <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
            <div className="relative">
              <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
            </div>
          </div>
        </section>
      </main>
      </div>
    </div>
  );
};

export default Hero;
