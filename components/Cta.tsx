
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section id="cta" className="bg-white">
      <div className="container mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="bg-viuu-blue-900 rounded-2xl shadow-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Pronto para Proteger seu Patrimônio?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-200">
            Garanta mais segurança para seu veículo ou frota com a tecnologia de ponta da Viuu. Nossa equipe está pronta para te atender.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Viuu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-viuu-blue-900 text-lg font-bold rounded-xl shadow-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
              <svg className="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.22.362-1.079 3.962 3.996-1.044.336.216z"/>
              </svg>
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
