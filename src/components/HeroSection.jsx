import React from 'react';
import gemini from '../assets/gray.png'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Navigation */}
        <header className="absolute top-8 left-0 right-0 px-8 md:px-12 lg:px-16 flex justify-between items-center z-10">
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
        </header>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-24 lg:mt-0">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
             Upgrade your    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">online</span> potential
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Hi, I'm Mubarak! With more than 6 years of experience, I'm ready to be a part of your wonderful project!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                Hire Me
              </button>
              <a href="#courses" className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 text-lg font-medium flex items-center justify-center hover:bg-gray-50 transition duration-300">
                Previous Works <span className="ml-2">→</span>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-4xl font-bold text-gray-900">650+</p>
                <p className="text-md text-gray-500">Projects Done</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">99%</p>
                <p className="text-md text-gray-500">Happy Client</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">240+</p>
                <p className="text-md text-gray-500">Fine Artworks</p>
              </div>
            </div>
          </div>

          {/* Right Section - Image and Dotted Circles */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              {/* Main image */}
              <img
                src={gemini} // Replace with the actual URL of Image 2
                alt="Travis"
                className="rounded-full w-full h-full object-cover relative z-10 shadow-2xl"
              />

              {/* Dotted circles and icons */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="absolute w-[90%] h-[90%] border-2 border-dashed border-purple-300 rounded-full animate-spin-slow"></div>
                <div className="absolute w-[70%] h-[70%] border-2 border-dashed border-blue-300 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute w-[50%] h-[50%] border-2 border-dashed border-pink-300 rounded-full animate-spin-slow"></div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-10 -left-8 bg-white p-3 rounded-full shadow-lg flex items-center justify-center z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <i className="fas fa-desktop text-3xl text-blue-500"></i>
              </div>
              <div className="absolute top-1/4 -right-10 bg-white p-3 rounded-full shadow-lg flex items-center justify-center z-20 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <i className="fas fa-cube text-3xl text-purple-500"></i>
              </div>
              <div className="absolute bottom-10 left-16 bg-white p-3 rounded-full shadow-lg flex items-center justify-center z-20 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <i className="fas fa-paint-brush text-3xl text-pink-500"></i>
              </div>
              <div className="absolute bottom-1/4 -right-8 bg-white p-3 rounded-full shadow-lg flex items-center justify-center z-20 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <i className="fas fa-mobile-alt text-3xl text-green-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;