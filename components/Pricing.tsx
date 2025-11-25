
import React from 'react';

const CheckIconGreen: React.FC = () => (
    <svg className="h-5 w-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const CheckIconBlueCircle: React.FC = () => (
    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-viuu-blue-800 text-blue-400 flex-shrink-0">
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    </div>
);

const Pricing: React.FC = () => {

    const kits = [
        {
            name: 'Kit com 2 Câmeras',
            price: '1.633,00',
            popular: false,
            features: [
                'Kit com 2 Câmeras',
                'Instalação Profissional',
                'Configuração de Sistema',
                'Garantia de 12 Meses'
            ]
        },
        {
            name: 'Kit com 3 Câmeras',
            price: '2.090,00',
            popular: true,
            features: [
                'Kit com 3 Câmeras',
                'Instalação Profissional',
                'Configuração de Sistema',
                'Garantia de 12 Meses'
            ]
        },
        {
            name: 'Kit com 4 Câmeras',
            price: '2.540,00',
            popular: false,
            features: [
                'Kit com 4 Câmeras',
                'Instalação Profissional',
                'Configuração de Sistema',
                'Garantia de 12 Meses'
            ]
        },
    ];

    const monthlyFeatures = [
        "Acesso ilimitado ao Aplicativo",
        "Monitoramento em tempo real",
        "Suporte técnico especializado",
        "Manutenção contínua",
        "Sem fidelidade (cancele quando quiser)",
        "Garantia de funcionamento"
    ];

    return (
        <section id="pricing" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-viuu-blue-900">Kits e Planos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Adquira seu kit ideal para sua necessidade e conte com nosso serviço de monitoramento completo.
                    </p>
                </div>

                {/* Kits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
                    {kits.map((kit) => (
                        <div 
                            key={kit.name} 
                            className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                                kit.popular 
                                ? 'border-2 border-viuu-blue-900 shadow-2xl scale-105 z-10' 
                                : 'border border-slate-200 shadow-lg hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {kit.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-viuu-blue-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                                    Mais Popular
                                </div>
                            )}
                            
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Combo</span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{kit.name}</h3>
                            
                            <div className="mb-2">
                                <span className="text-4xl font-extrabold text-slate-900">R$ {kit.price}</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-8">Adesão e Instalação</p>

                            <ul className="space-y-4 flex-grow">
                                {kit.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckIconGreen />
                                        <span className="ml-3 text-slate-600 text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Banner de assinatura mensal */}
                <div className="max-w-7xl mx-auto bg-viuu-blue-900 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Preços e informações */}
                        <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-viuu-blue-800/50 relative">
                             {/* efeito de gradiente de fundo para profundidade */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center space-x-2 mb-4">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                    <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Assinatura Mensal</span>
                                </div>
                                
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Plano de <br/> Monitoramento</h3>
                                
                                <p className="text-blue-100 mb-8 text-base leading-relaxed max-w-md">
                                    Indispensável para o funcionamento do sistema. Inclui conectividade, armazenamento e acesso ao app.
                                </p>

                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl font-extrabold text-white tracking-tight">R$ 130,00</span>
                                    <span className="ml-2 text-xl text-blue-200">/mês</span>
                                </div>
                                <p className="text-xs text-blue-300 mb-8">* Sem fidelidade. Cancele a qualquer momento.</p>

                                <a href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Viuu." className="w-full block text-center bg-white text-viuu-blue-900 font-bold text-lg py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg" target="_blank">
                                    Contratar Agora
                                </a>
                            </div>
                        </div>

                        {/* Lista de recursos */}
                        <div className="p-8 md:p-12 lg:w-1/2 bg-viuu-blue-900/50 flex flex-col justify-center">
                            <h4 className="text-xl font-bold text-white mb-8 border-b border-viuu-blue-800 pb-4 inline-block lg:block">
                                Incluso na Mensalidade:
                            </h4>
                            <ul className="space-y-6">
                                {monthlyFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-blue-50">
                                        <CheckIconBlueCircle />
                                        <span className="ml-4 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-10 p-4 bg-viuu-blue-800/50 rounded-lg border border-viuu-blue-800 flex items-center">
                                <svg className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-sm text-blue-200">Pagamento recorrente via Boleto ou PIX.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;