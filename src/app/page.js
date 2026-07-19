import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Services from '../components/Services/Services';
import ContactFooter from '../components/ContactFooter/ContactFooter';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <ContactFooter />
    </main>
  );
}
