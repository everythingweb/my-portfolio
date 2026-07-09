import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dev1 from '../assets/websites/blog.jpg';
import dev2 from '../assets/websites/business.jpg';
import dev3 from '../assets/websites/ecommerce.jpg';
import dev4 from '../assets/websites/educational.png';
import dev5 from '../assets/websites/entertainment.jpg';
import soft1 from '../assets/websites/event.jpg';
import soft2 from '../assets/websites/informational.jpg';
import soft3 from '../assets/websites/news.jpg';
import soft4 from '../assets/websites/Nike.jpg';
import data1 from '../assets/websites/online forum.jpg';
import data2 from '../assets/websites/portfolio.png';
import data3 from '../assets/websites/startup.jpg';
import design1 from '../assets/websites/travel.jpg';
import design2 from '../assets/websites/University.jpg';
import { FaEye, FaGithub } from 'react-icons/fa';
import { ExternalLink, Zap } from "lucide-react";

// --- FRAMER MOTION HELPER UTILITIES ---
const fadeIn = (direction, delay) => ({
    hidden: {
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.6,
            delay: delay,
            ease: 'easeOut',
        },
    },
});

const textVariant = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1.0, delay } },
});
// --------------------------------------

const courseData = {
    'All': [
        { level: 'Just Launched', title: 'Online forum website', description: 'A community-driven discussion platform featuring categorized boards and real-time user interactions.', imageSrc: data1, route: 'https://everythingweb.github.io/online-forum/', githubUrl: 'https://github.com', outcome: "Increased user engagement by 40% through gamification." },
        { level: 'Latest', title: 'Business website', description: 'Professional corporate presence showcasing service offerings and integrated lead generation contact forms.', imageSrc: dev2, route: 'https://everythingweb.github.io/business/', githubUrl: 'https://github.com', outcome: "Boosted lead conversion rates by 25% via SEO." },
        { level: 'Just Launched', title: 'Portfolio website', description: 'Creative digital showcase highlighting professional projects with an interactive, high-performance media gallery.', imageSrc: data2, route: 'https://everythingweb.github.io/my-portfolio/', githubUrl: 'https://github.com/everythingweb/my-portfolio', outcome: "Secured five high-value freelance contracts within month one." },
        { level: 'New', title: 'Educational website', description: 'Interactive learning management system providing structured course modules and automated student assessments.', imageSrc: dev4, route: 'https://everythingweb.github.io/bucregaltech/', githubUrl: 'https://github.com/everythingweb/bucregaltech', outcome: "Improved student completion rates by 50% using analytics." },
        { level: 'Just Launched', title: 'University website', description: 'Comprehensive academic portal managing student admissions, faculty directories, and campus resource scheduling.', imageSrc: design2, route: 'https://everythingweb.github.io/harvod/', githubUrl: 'https://github.com', outcome: "Streamlined application processing time by 15% using automation." },
        { level: 'Highlights', title: 'Event website', description: 'Dynamic event management site featuring live ticketing updates and integrated speaker schedules.', imageSrc: soft1, route: 'https://everythingweb.github.io/convention/', githubUrl: 'https://github.com/everythingweb/convention', outcome: "Sold out early-bird tickets in under three hours." },
        { level: 'Trending', title: 'Informational website', description: 'Centralized knowledge base providing searchable documentation and structured guides for technical users.', imageSrc: soft2, route: 'https://everythingweb.github.io/informational/', githubUrl: 'https://github.com/everythingweb/informational', outcome: "Reduced support tickets by 20% using better navigation." },
        { level: 'Just Launched', title: 'NEWS website', description: 'High-traffic editorial platform delivering breaking news stories with automated social media sharing.', imageSrc: soft3, route: 'https://everythingweb.github.io/news/', githubUrl: 'https://github.com', outcome: "Achieved 1M monthly views using optimized caching strategies." },
        { level: 'Just Launched', title: 'Entertainment website', description: 'Immersive media platform hosting streaming video content and interactive celebrity fan polls.', imageSrc: dev5, route: 'https://everythingweb.github.io/entertainment/', githubUrl: 'https://github.com', outcome: "Expanded subscriber base by 35% through viral content." },
        { level: 'Just Launched', title: 'Travel website', description: 'Global travel agency portal offering real-time flight bookings and curated destination guides.', imageSrc: design1, route: 'https://everythingweb.github.io/travel/', githubUrl: 'https://github.com', outcome: "Reduced booking abandonment by 12% via UX redesign." },
        { level: 'Introduction', title: 'E-commerce website', description: 'Scalable online storefront featuring secure payment processing and automated inventory management systems.', imageSrc: dev3, route: 'https://everythingweb.github.io/e-commerce/', githubUrl: 'https://github.com', outcome: "Increased average order value by 18% through cross-selling." },
        { level: 'Introduction', title: 'Nike website', description: 'Premium athletic commerce experience featuring custom product builders and high-fidelity product imagery.', imageSrc: soft4, route: 'https://everythingweb.github.io/nike/', githubUrl: 'https://github.com', outcome: "Decreased mobile checkout friction by 22% using Apple-Pay." },
        { level: 'Introduction', title: 'Start up website', description: 'Modern landing page designed to validate product-market fit and capture early-adopter emails.', imageSrc: data3, route: 'https://everythingweb.github.io/startup/', githubUrl: 'https://github.com', outcome: "Acquired 5,000 waitlist signups during the pre-launch phase." }
    ],
    'Productivity Web Apps': [
        { level: 'Just Launched', title: 'Online forum website', description: 'A community-driven discussion platform featuring categorized boards and real-time user interactions.', imageSrc: data1, route: 'https://everythingweb.github.io/online-forum/', githubUrl: 'https://github.com', outcome: "Increased user engagement by 40% through gamification." },
        { level: 'Latest', title: 'Business website', description: 'Professional corporate presence showcasing service offerings and integrated lead generation contact forms.', imageSrc: dev2, route: 'https://everythingweb.github.io/business/', githubUrl: 'https://github.com', outcome: "Boosted lead conversion rates by 25% via SEO." },
        { level: 'Just Launched', title: 'Portfolio website', description: 'Creative digital showcase highlighting professional projects with an interactive, high-performance media gallery.', imageSrc: data2, route: 'https://everythingweb.github.io/my-portfolio/', githubUrl: 'https://github.com/everythingweb/my-portfolio', outcome: "Secured five high-value freelance contracts within month one." },
        { level: 'New', title: 'Educational website', description: 'Interactive learning management system providing structured course modules and automated student assessments.', imageSrc: dev4, route: 'https://everythingweb.github.io/bucregaltech/', githubUrl: 'https://github.com/everythingweb/bucregaltech', outcome: "Improved student completion rates by 50% using analytics." },
        { level: 'Just Launched', title: 'University website', description: 'Comprehensive academic portal managing student admissions, faculty directories, and campus resource scheduling.', imageSrc: design2, route: 'https://everythingweb.github.io/harvod/', githubUrl: 'https://github.com', outcome: "Streamlined application processing time by 15% using automation." },
        { level: 'Highlights', title: 'Event website', description: 'Dynamic event management site featuring live ticketing updates and integrated speaker schedules.', imageSrc: soft1, route: 'https://everythingweb.github.io/convention/', githubUrl: 'https://github.com/everythingweb/convention', outcome: "Sold out early-bird tickets in under three hours." }
    ]
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" id="courses">
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Header Texts */}
        <div className="text-center mb-16">
          <motion.p 
            variants={fadeIn('up', 0.1)}
            className="text-sm font-semibold tracking-wider text-purple-600 uppercase"
          >
            My Portfolio
          </motion.p>
          <motion.h2 
            variants={textVariant(0.2)}
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Recent Built Products
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Explore production-grade interfaces engineered for speed, conversions, and clean semantic architecture.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <motion.div 
          variants={fadeIn('up', 0.4)}
          className="flex justify-center space-x-4 mb-12"
        >
          {Object.keys(courseData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full font-medium transition duration-300 ${
                activeTab === tab 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {courseData[activeTab]?.map((item, index) => (
              <motion.div
                key={`${activeTab}-${item.title}`} 
                variants={fadeIn('up', index * 0.15)} 
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col group h-full justify-between"
              >
                <div>
                  {/* Image Block */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a 
                        href={item.route} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
                      >
                        <FaEye size={18} />
                      </a>
                      <a 
                        href={item.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                    <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {item.level}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Performance Metrics Footer */}
                <div className="px-6 pb-6 pt-2">
                  {item.outcome && (
                    <div className="mb-4 p-3 bg-purple-50 border border-purple-100 rounded-xl flex items-start space-x-2">
                      <Zap size={16} className="text-purple-600 shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-purple-800 leading-normal">
                        {item.outcome}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                    <a 
                      href={item.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-semibold text-gray-600 hover:text-purple-600 flex items-center space-x-1.5 transition-colors"
                    >
                      <FaGithub size={16} />
                      <span>Codebase</span>
                    </a>
                    <a 
                      href={item.route} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center space-x-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
};

export default PortfolioSection;
