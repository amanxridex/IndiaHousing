import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import StatsMarquee from '../components/StatsMarquee/StatsMarquee';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import About from '../components/About/About';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Services from '../components/Services/Services';
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
      <Services />
      <ContactFooter />
    </main>
  );
}
