import React from 'react';
import Logo from './Logo';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const MikeLogo: React.FC = () => (
    <div className="flex flex-col items-center p-2 rounded-md bg-white shadow-sm">
        <span className="text-xs text-slate-500 font-medium">Parceira</span>
        <div className="flex items-center text-slate-800 font-bold">
            <span className="text-2xl">( (</span>
            <span className="text-3xl -mx-1">Mike</span>
            <span className="text-2xl">) )</span>
        </div>
        <span className="text-[8px] tracking-widest text-slate-600 -mt-1">MONITORAMENTO</span>
    </div>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-viuu-blue-900 text-white pt-16 pb-8 border-t border-viuu-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Coluna 1: Logo e Descrição */}
            <div className="space-y-6">
                <Logo/>
                <p className="text-blue-100 leading-relaxed max-w-md text-sm md:text-base">
                    Segurança em movimento. Tecnologia avançada para monitoramento veicular, garantindo proteção para sua frota e tranquilidade para você.
                </p>
                <p className="text-blue-200 text-sm">
                    Soluções integradas com 4G, Cloud Storage e Inteligência Artificial.
                </p>
            </div>

            {/* Coluna 2: Links Rápidos */}
             <div>
                <h3 className="text-lg font-bold text-white mb-6">Links Rápidos</h3>
                <ul className="space-y-4">
                    {/* --- INÍCIO DAS ALTERAÇÕES: Ajuste dos HREFs para âncoras locais --- */}
                    <li>
                        <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Início</a>
                    </li>
                    <li>
                        <a href="#features" className="text-blue-200 hover:text-white transition-colors duration-200">Funcionalidades</a>
                    </li>
                     <li>
                        <a href="#recursos-detalhados" className="text-blue-200 hover:text-white transition-colors duration-200">Benefícios</a>
                    </li>
                    <li>
                        <a href="#pricing" className="text-blue-200 hover:text-white transition-colors duration-200">Planos e Preços</a>
                    </li>
                    <li>
                        <a href="#faq" className="text-blue-200 hover:text-white transition-colors duration-200">Dúvidas Frequentes</a>
                    </li>
                    {/* --- FIM DAS ALTERAÇÕES --- */}
                </ul>
            </div>

            {/* Coluna 3: Fale Conosco */}
            <div>
                 <h3 className="text-lg font-bold text-white mb-6">Fale Conosco</h3>
                 <p className="text-blue-200 mb-6 text-sm">
                    Ficou com dúvidas ou quer solicitar um orçamento personalizado? Entre em contato agora mesmo.
                 </p>
                 <div className="flex flex-col space-y-4">
                     <a 
                        href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Viuu%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg transition-colors shadow-lg"
                     >
                         <WhatsAppIcon className="h-5 w-5 mr-2" />
                         Chamar no WhatsApp
                     </a>
                 </div>
            </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-viuu-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-blue-300 text-center md:text-left">
            &copy; {new Date().getFullYear()} Viuu Vigilância Veicular. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
              <span className="text-xs text-blue-300">Parceira:</span>
              <MikeLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;