import CourseHeroSection from './CourseHeroSection';
import SkillsShowcase from './SkillsShowcase';
import WebDevTraining from './WebDevTraining';
import TestimonialsSection from './TestimonialsSection'
import Footer from './Footer';
import JoinTrainingBanner from './JoinTrainingBanner';
import NewsletterSection from './NewsletterSection'
import NextSessions from './NextSessions';

const SinglePageDetail = () => {
  return (
    <div> <CourseHeroSection />
              <SkillsShowcase />
              <TestimonialsSection />
              <WebDevTraining />
              <NextSessions />
              <JoinTrainingBanner />
               <NewsletterSection />
               <Footer /></div>
  )
}

export default SinglePageDetail