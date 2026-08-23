import { Hero } from '../components/landing/hero';
import { LogoMarquee, Services } from '../components/landing/services';
import { WhyUs, Process } from '../components/landing/why-process';
import {
  Work,
  Testimonials,
  Pricing,
  Faq,
  ContactCta,
} from '../components/landing/sections';

export function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <WhyUs />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <Faq />
      <ContactCta />
    </>
  );
}

export default HomePage;
