
import React from 'react';
import { CameraIcon } from './icons/CameraIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { CloudIcon } from './icons/CloudIcon';
import { WifiIcon } from './icons/WifiIcon';
import { VideoCameraIcon } from './icons/VideoCameraIcon';
import { SunIcon } from './icons/SunIcon';
import { MicrophoneIcon } from './icons/MicrophoneIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-viuu-blue-900 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-viuu-blue-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <CameraIcon className="h-6 w-6" />,
      title: 'Câmeras Inteligentes Full HD',
      description: 'Equipamentos modernos com resolução nítida e design discreto para qualquer tipo de veículo.',
    },
    {
      icon: <VideoCameraIcon className="h-6 w-6" />,
      title: 'Monitoramento em Tempo Real',
      description: 'Transmissão ao vivo de imagem e áudio com cobertura 4G. Acesso remoto pelo celular, de qualquer lugar.',
    },
    {
      icon: <CloudIcon className="h-6 w-6" />,
      title: 'Gravação Inteligente',
      description: 'Detecção de movimento e opção de gravação contínua com armazenamento em SD e nuvem para máxima segurança.',
    },
    {
      icon: <WifiIcon className="h-6 w-6" />,
      title: 'Conectividade Garantida',
      description: 'Transmissor 4G integrado. Em áreas sem cobertura, a gravação continua no cartão SD, sem perda de dados.',
    },
    {
      icon: <SunIcon className="h-6 w-6" />,
      title: 'Visão Noturna com Infravermelho',
      description: 'Captação de imagens nítidas mesmo nos ambientes mais escuros ou durante a noite.',
    },
    {
      icon: <MicrophoneIcon className="h-6 w-6" />,
      title: 'Captação de Áudio Ambiente',
      description: 'Microfones integrados para gravação de som, ideal para registrar conversas e ruídos externos relevantes.',
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: 'Justiça em Acidentes',
      description: 'Registro imparcial dos fatos, oferecendo evidências objetivas para proteger os inocentes e responsabilizar os culpados.',
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: 'Aplicativo Intuitivo',
      description: 'Interface amigável para visualização das câmeras, notificações em tempo real e acesso ao histórico de gravações.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-viuu-blue-900">Solução Completa em Vigilância Veicular</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Tecnologia de ponta para garantir a segurança e a transparência que você e sua frota precisam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
