import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import StatsMarquee from '../components/StatsMarquee/StatsMarquee';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import About from '../components/About/About';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import ContactFooter from '../components/ContactFooter/ContactFooter';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsMarquee />
      <WhyChooseUs />
      <About />
      <FeaturedProjects />
      <Team />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
