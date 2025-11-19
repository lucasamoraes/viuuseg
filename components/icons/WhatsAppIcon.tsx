import React from 'react';

// Importamos a imagem.
// O "../" significa "volte uma pasta" (sai de icons) e entre em "images".
// Se der erro, tente usar './images/whatsapp.png' (se estiverem na mesma pasta).
import whatsappImg from '../images/whatsapp.png';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img 
        src={whatsappImg} 
        alt="WhatsApp" 
        // Mantemos a className para que o botão controle o tamanho (width/height)
        className={className} 
        style={{ objectFit: 'contain' }}
    />
);