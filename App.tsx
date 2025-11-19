import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';

export type Page = 'home' | 'features';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'recursos') {
        setCurrentPage('features');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check hash on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (page: Page, section?: string) => {
    if (page === 'features') {
      window.location.hash = 'recursos';
    } else {
      if (window.location.hash) {
        window.location.hash = '';
      } else {
        // Already on home, just scroll
        if (section) {
          document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setCurrentPage(page);
    if (!section) {
       window.scrollTo(0, 0);
    }
  };

  // Effect to scroll to section after returning to home page
  useEffect(() => {
    if (currentPage === 'home') {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      if (section) {
        setTimeout(() => {
          document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [currentPage]);
  
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Header navigate={navigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'features' && <FeaturesPage />}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;