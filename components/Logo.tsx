import React from 'react';

// logo principal
import logoImg from './images/logo.png'; 

interface LogoProps {
  className?: string;
  
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImg} 
        alt="Viuu - Segurança em movimento" 
        className="h-14 w-auto object-contain" 
      />
    </div>
  );
};

export default Logo;