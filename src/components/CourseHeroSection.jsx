import React from 'react';
import { FaClock, FaCalendarAlt, FaBook, FaMoon, FaWhatsapp } from 'react-icons/fa'; // Import necessary icons
import Hero from '../assets/design/new.jpg';
import { Link } from 'react-router';
import ActionButtons from './ActionButtons';
const CourseHeroSection = () => {
  return (
   
    <section className="bg-gradient-to-br from-gray-100 to-gray-50  flex items-center justify-center py-12">
        
      <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden md:gap-x-6 justify-between w-full">
          {/* Left Content Area */}
         <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
              <nav className="text-sm font-montserrat mb-8 text-gray-500">
          <Link to="/" className="hover:underline">Home</Link>   &gt; <span className="font-bold text-indigo-600">Website Development</span>
        </nav>
            <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Software Development Course - Full Stack
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
              689,000 NGN
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              In 20 weeks, immerse yourself in the world of web development, 
              learn to create robust web applications, and build a portfolio that 
              will attract recruiters.
            </p>

            {/* Buttons */}
           <ActionButtons />

            {/* Course Details List */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 text-lg">
                <FaClock className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Duration:</strong> 20 weeks</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <FaCalendarAlt className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Schedule:</strong> 12 hours/week</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <FaBook className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Format:</strong> Available in-person and online</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <FaMoon className="mr-4 text-green-600 text-2xl" />
                <span><strong className="font-semibold">Options:</strong> Evening classes available</span>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
      <div className="w-full md:w-[45%] bg-gray-200 min-h-[100px] md:min-h-[300px]">
            {/* Replace this with your actual image */}
            <img 
              src={Hero} 
              alt="Student working on a laptop" 
              className="w-full h-full object-cover" 
            />
            {/* If you want a placeholder without an image: */}
            {/* <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500 text-xl font-medium">Course Image</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;