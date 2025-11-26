import React from 'react';

// texto como espaços reservados para logotipos.
const Logo1 = () => <svg viewBox="0 0 200 45" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet" fill="currentColor"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">Fernando Turismo</text></svg>;
const Logo2 = () => <svg viewBox="0 0 200 45" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet" fill="currentColor"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Verdana, sans-serif" fontSize="20" fontStyle="italic">Contrular</text></svg>;
const Logo3 = () => <svg viewBox="0 0 200 45" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet" fill="currentColor"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18">Mike Monitoramento</text></svg>;


const logos = [
    { id: 1, component: <Logo1 /> },
    { id: 2, component: <Logo2 /> },
    { id: 3, component: <Logo3 /> },
 
];

const Clients: React.FC = () => {
    return (
        <section id="clients" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-viuu-blue-900">Confiam em Nossa Tecnologia</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Empresas de todos os portes utilizam as soluções Viuu para proteger suas frotas e otimizar operações.
                    </p>
                </div>

                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                        {logos.map((logo) => (
                            <li key={`logo-${logo.id}`} className="flex-shrink-0">
                                <div className="h-12 w-36 text-slate-500 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    {logo.component}
                                </div>
                            </li>
                        ))}
                    </ul>
                     <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                        {logos.map((logo) => (
                            <li key={`logo-dup-${logo.id}`} className="flex-shrink-0">
                                <div className="h-12 w-36 text-slate-500 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    {logo.component}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Clients;