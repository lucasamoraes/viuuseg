import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Clients from '../components/Clients';
import Faq from '../components/Faq';
import Cta from '../components/Cta';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Clients />
      <Faq />
      <Cta />
    </>
  );
};

export default HomePage;