
import React, { useState } from 'react';
import Logo from './Logo';

// --- INÍCIO DAS ALTERAÇÕES: Remoção da interface de props e simplificação da lógica de navegação ---
// interface HeaderProps { ... } foi removido

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função simples apenas para fechar o menu mobile ao clicar
  const handleNavClick = () => {
    setIsOpen(false);
  };
  
  // Atualização dos links para apontar diretamente para os IDs na mesma página
  const navLinks = [
    { label: 'Recursos', href: '#recursos-detalhados' }, // Agora aponta para a nova seção
    { label: 'Preços', href: '#pricing' },
    { label: 'Dúvidas', href: '#faq' },
  ];
// --- FIM DAS ALTERAÇÕES ---

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="Página inicial da Viuu">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-base font-medium text-slate-600 hover:text-viuu-blue-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a href="#cta" className="hidden sm:inline-block ml-8 px-5 py-2.5 bg-viuu-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-viuu-blue-800 focus:outline-none focus:ring-2 focus:ring-viuu-blue-900 focus:ring-opacity-75 transition-transform transform hover:scale-105">
              Fale com um Especialista
            </a>
            <div className="md:hidden ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-viuu-blue-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={handleNavClick} className="text-base font-medium text-slate-600 hover:text-viuu-blue-900 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#cta" onClick={handleNavClick} className="w-11/12 text-center mt-2 px-5 py-2.5 bg-viuu-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-viuu-blue-800 transition-transform transform hover:scale-105">
              Fale com um Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
