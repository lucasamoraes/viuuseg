
import React, { useState } from 'react';
import Logo from './Logo';
import { Page } from '../App';

interface HeaderProps {
    navigate: (page: Page, section?: string) => void;
    currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: Page, section?: string) => {
    if (currentPage === page && section) {
        document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage !== page) {
        
        const url = new URL(window.location.toString());
        if (section) {
            url.searchParams.set('section', section);
        } else {
            url.searchParams.delete('section');
        }
            navigate(page, section);
    }
    setIsOpen(false);
  };
  
  const navLinks = [
    { page: 'home' as Page, label: 'Benefícios', section: '#features' },
    { page: 'features' as Page, label: 'Recursos', section: '#recursos-page' },
    { page: 'home' as Page, label: 'Preços', section: '#pricing' },
    { page: 'home' as Page, label: 'Dúvidas', section: '#faq' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} aria-label="Página inicial da Viuu">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.page === 'features' ? '#recursos' : link.section} onClick={(e) => { e.preventDefault(); handleNavClick(link.page, link.section);}} className="text-base font-medium text-slate-600 hover:text-viuu-blue-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Viuu." className="hidden sm:inline-block ml-8 px-5 py-2.5 bg-viuu-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-viuu-blue-800 focus:outline-none focus:ring-2 focus:ring-viuu-blue-900 focus:ring-opacity-75 transition-transform transform hover:scale-105" target="_blank">
              Fale Conosco
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
              <a key={link.label} href={link.page === 'features' ? '#recursos' : link.section} onClick={(e) => { e.preventDefault(); handleNavClick(link.page, link.section);}} className="text-base font-medium text-slate-600 hover:text-viuu-blue-900 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Viuu." className="hidden sm:inline-block ml-8 px-5 py-2.5 bg-viuu-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-viuu-blue-800 focus:outline-none focus:ring-2 focus:ring-viuu-blue-900 focus:ring-opacity-75 transition-transform transform hover:scale-105" target="_blank">
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
