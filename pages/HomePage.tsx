
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
// --- INÍCIO DAS ALTERAÇÕES: Importação do novo componente DetailedFeatures ---
import DetailedFeatures from '../components/DetailedFeatures';
// --- FIM DAS ALTERAÇÕES ---
import Pricing from '../components/Pricing';
import Clients from '../components/Clients';
import Faq from '../components/Faq';
import Cta from '../components/Cta';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* --- INÍCIO DAS ALTERAÇÕES: Inserção do componente na ordem de renderização --- */}
      <DetailedFeatures />
      {/* --- FIM DAS ALTERAÇÕES --- */}
      <Pricing />
      <Clients />
      <Faq />
      <Cta />
    </>
  );
};

export default HomePage;
