import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
<<<<<<< HEAD
import male1 from '../assets/students/susan taylor.jpg';
import male2 from '../assets/students/white.jpg'
import female1 from '../assets/students/female1.png'
import male3 from '../assets/students/rodrigues.jpg';
import male4 from '../assets/students/mark wilson.webp'
import female2 from '../assets/students/david miller.jpg'
=======
import male1 from '../assets/students/male1.jpg';
import male2 from '../assets/students/white.jpg'
import female1 from '../assets/students/female1.png'
import male3 from '../assets/students/male3.jpg';
import male4 from '../assets/students/male4.jpg'
import female2 from '../assets/students/female2.avif'
>>>>>>> 45a69552ca7c5a29f865084a2b20c7178ecd0760

const testimonials = [
  {
    id: 1,
    name: "Susan Taylor", 
    image: male1,
    text: "He delivered a flawless and fast website that immediately elevated our brand. I sincerely recommend him; he is a great person to work with.",
  },
  {
    id: 2,
    name: "Robert Smith",
    image: male2, 
    text: "Since launching the site Mubarak built, our leads have doubled, that's the bottom line. It wasn't just code; it was a major investment that's already paying off. Highly recommend!",
  },
  {
    id: 3,
    name: "Aaliyah Al-Hassan",
    image: female1,
    text: "Mubarak's communication was a breath of fresh air. He understood our exact vision immediately and kept us informed every step. It felt like he was part of our team.",
  },
  {
    id: 4,
    name: "Micheal Rodriguez",
    image: male3,
    text: "He didn't just build a website; he engineered a reliable, high-speed platform that handles our traffic spikes without breaking a sweat. That's real business stability.",

  },
  {
    id: 5,
    name: "Mark Wilson",
    image: male4, 
    text: "When our old site crashed daily, Mubarak rebuilt it from the ground up. His deep technical fix stabilized everything, making our operations reliable and profitable again.",
   },
  {
    id: 6,
     name: "David Miller",
    image: female2,
    text: "His technical skill and clear communication led to a site that genuinely boosted our business impact. A top-tier experience.",
   },

];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What our happy clients  say
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Things that make it the best place to start building
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-green-600"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
