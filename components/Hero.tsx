import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { VideoCameraIcon } from './icons/VideoCameraIcon';
import { CloudIcon } from './icons/CloudIcon';

import bannerImg1 from './images/banner1.png'; 
import bannerImg2 from './images/banner2.png'; 


// Caso precisar add mais banners e ajustar a posição da imagem
const slides = [
  { 
    url: bannerImg1, 
    position: 'bg-center' // O Banner 1 fica centralizado (padrão)
  },
  { 
    url: bannerImg2, 
    position: 'bg-top'    // O Banner 2 fixa no topo (para não cortar o logo)
  },
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
       setCurrentImage((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen w-full text-white overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.url}
              // Em vez de fixar bg-center ou bg-top, usamos a variável {slide.position}
          className={`absolute inset-0 bg-cover ${slide.position} transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.url})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Vigilância Veicular Inteligente
          <br className="hidden md:block"/>
          para sua Frota e Segurança
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-100 drop-shadow-md">
          Proteja seu patrimônio com a mais avançada tecnologia de monitoramento. Câmeras Full HD, acesso em tempo real e gravação de vídeo e áudio.
        </p>
        <div className="mt-10 hidden md:flex md:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/5532991310073?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Viuu."
            className="w-full sm:w-auto px-8 py-4 bg-viuu-blue-900 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-viuu-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition-transform transform hover:scale-105" target="_blank"
          >
            Fale Conosco
          </a>
          <a
            href="#recursos"
            className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
          >
            Recursos
          </a>
        </div>
      </div>

       {/* Bottom Feature Icons */}
       <div className="hidden md:block absolute bottom-0 left-0 right-0 z-10 pb-8 md:pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                            <VideoCameraIcon className="h-7 w-7 text-white" />
                        </div>
                        <span className="font-semibold text-white drop-shadow-md">Gravação Full HD</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                             <ShieldCheckIcon className="h-7 w-7 text-white" />
                        </div>
                        <span className="font-semibold text-white drop-shadow-md">Acesso Remoto Seguro</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                            <VideoCameraIcon className="h-7 w-7 text-white" />
                        </div>
                        <span className="font-semibold text-white drop-shadow-md">Gravaçao de Vídeo e Áudio</span>
                    </div>
                </div>
            </div>
       </div>

    </section>
  );
};

export default Hero;