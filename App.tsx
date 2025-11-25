
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
// --- INÍCIO DAS ALTERAÇÕES: Remoção da importação e lógica da FeaturesPage ---

// export type Page = 'home' | 'features'; // Tipo não é mais necessário

const App: React.FC = () => {
  // O estado 'currentPage' e a lógica de 'hashchange' foram removidos
  // pois agora todo o conteúdo está em uma única página (HomePage).

  // Mantive apenas o useEffect simples para lidar com scroll suave se houver hash na URL ao carregar
  useEffect(() => {
     const handleLoad = () => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
     }
     // Pequeno delay para garantir renderização
     setTimeout(handleLoad, 100);
  }, []);
  
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      {/* Header não precisa mais da prop navigate */}
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
// --- FIM DAS ALTERAÇÕES ---

export default App;
