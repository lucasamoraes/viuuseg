import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Viuu."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale Conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 transition-transform transform hover:scale-110"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;