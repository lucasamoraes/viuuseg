
import React from 'react';
// --- INÍCIO DAS ALTERAÇÕES: Importação de ícones ajustada para o diretório atual de componentes ---
import { CameraIcon, ShieldCheckIcon, WifiIcon, SunIcon } from './icons';
// --- FIM DAS ALTERAÇÕES ---
// Importacao das imagens
import onibusImg from '../components/images/onibus.png';
import appImg from '../components/images/app.png';
import noturnaImg from '../components/images/noturna.png';
import segurancaImg from '../components/images/seguranca.png';
interface FeatureDetailProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    points: string[];
    imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ icon, title, subtitle, points, imageUrl, imageAlt, reverse = false }) => {
    
    // Função auxiliar para formatar o texto com negrito
    const renderPoint = (text: string) => {
        const parts = text.split('**');
        return parts.map((part, index) => {
            // Se o índice for ímpar, significa que estava entre ** **, então renderiza em negrito
            if (index % 2 === 1) {
                return <strong key={index} className="font-bold text-slate-900">{part}</strong>;
            }
            return part;
        });
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <div className="lg:w-1/2">
                    <img src={imageUrl} alt={imageAlt} className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
                </div>
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                         <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-viuu-blue-900">
                           {icon}
                         </div>
                        <h2 className="text-3xl font-bold text-viuu-blue-900">{title}</h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">{subtitle}</p>
                    <ul className="space-y-4">
                        {points.map((point, index) => (
                             <li key={index} className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700">
                                    {renderPoint(point)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// --- INÍCIO DAS ALTERAÇÕES: Criação do componente DetailedFeatures para substituir a FeaturesPage ---
const DetailedFeatures: React.FC = () => {
    const featureDetails = [
        {
            icon: <CameraIcon className="h-6 w-6" />,
            title: "Câmeras Inteligentes",
            subtitle: "Olhos atentos na estrada, registrando tudo com clareza e discrição para sua máxima segurança.",
            points: [
                "**Resolução Full HD:** Imagens cristalinas para não perder nenhum detalhe importante.",
                "**Design Compacto e Discreto:** Instalação limpa, que não altera a originalidade do seu veículo.",
                "**Certificação IP:** Alta resistência a poeira e água, garantindo durabilidade em qualquer ambiente.",
                "**Armazenamento Flexível:** Opção de gravação em Cartão SD e em nuvem para segurança reforçada."
            ],
             imageUrl: onibusImg,
            imageAlt: "Câmera veicular instalada no para-brisa de um carro.",
            reverse: false,
        },
        {
            icon: <WifiIcon className="h-6 w-6" />,
            title: "Monitoramento e Conectividade",
            subtitle: "Controle total e acesso em tempo real ao seu veículo, de qualquer lugar, a qualquer momento.",
            points: [
                "**Transmissão Ao Vivo 4G:** Acompanhe imagens e áudio em tempo real de onde estiver, com alta velocidade.",
                "**Acesso Remoto via App:** Gerencie e visualize tudo na palma da sua mão com nosso aplicativo intuitivo.",
                "**Conexão Ininterrupta:** Mesmo em áreas sem cobertura, a gravação continua no cartão SD.",
                "**Compatibilidade Universal:** Funciona com qualquer operadora de telefonia móvel do Brasil."
            ],
             imageUrl: appImg,
            imageAlt: "Pessoa monitorando frota de veículos em um tablet.",
            reverse: true,
        },
        {
            icon: <SunIcon className="h-6 w-6" />,
            title: "Gravação Inteligente e Visão Noturna",
            subtitle: "Tecnologia que pensa por você, capturando os momentos certos, seja sob o sol ou na escuridão.",
            points: [
                "**Detecção de Movimento:** O sistema grava apenas quando há atividade, economizando espaço.",
                "**Visão Noturna Infravermelho:** Imagens nítidas e claras mesmo na escuridão total.",
                "**Captação de Áudio Ambiente:** Microfones de alta sensibilidade para registrar sons e conversas relevantes.",
                "**Backup em Nuvem:** Proteja suas gravações contra furto ou danos ao dispositivo. Seus arquivos sempre seguros."
            ],
            imageUrl: noturnaImg,
            imageAlt: "Estrada à noite com visão de câmera infravermelha.",
            reverse: false,
        },
        {
            icon: <ShieldCheckIcon className="h-6 w-6" />,
            title: "Segurança e Transparência",
            subtitle: "Ferramentas essenciais para promover responsabilidade e justiça no trânsito, protegendo o que mais importa.",
            points: [
                "**Registro Imparcial de Fatos:** Evidências visuais claras que eliminam interpretações subjetivas em acidentes.",
                "**Proteção Legal:** Provas concretas para proteger motoristas inocentes e agilizar processos de seguro.",
                "**Apoio a Autoridades:** Facilite investigações, ajude a reduzir fraudes e acelere indenizações.",
                "**Valorização da Marca:** Demonstre o compromisso da sua empresa com a segurança e fortaleça sua reputação."
            ],
            imageUrl: segurancaImg,
            imageAlt: "Dois motoristas trocando informações de seguro após uma colisão de carro.",
            reverse: true,
        }
    ];

    return (
        // Alterado o ID para 'recursos-detalhados'
        <section id="recursos-detalhados" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-viuu-blue-900">Recursos Detalhados</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Explore a tecnologia de ponta que desenvolvemos para proteger seu patrimônio e garantir sua tranquilidade.
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    {featureDetails.map((feature, index) => (
                        <FeatureDetail key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};
// --- FIM DAS ALTERAÇÕES ---

export default DetailedFeatures;
