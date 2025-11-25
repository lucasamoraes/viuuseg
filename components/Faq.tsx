import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 py-6">
      <dt>
        <button onClick={onClick} className="w-full flex justify-between items-center text-left text-slate-800">
          <span className="text-lg font-medium">{question}</span>
          <span className="ml-6 h-7 flex items-center">
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
            />
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-base text-slate-600 pt-4">{answer}</p>
      </dd>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
     {
      question: 'Como funciona a instalação?',
      answer: 'A Instalação é simples e descomplicada, Sem alteração das características do veículo, Nosso sistema de vigilância veicular é instalado de forma rápida, discreta e sem qualquer modificação estrutural no veículo. Utilizamos equipamentos compactos e de fácil adaptação, preservando a estética e a originalidade do automóvel, caminhão ou utilitário.',
    },
    {
      question: 'Preciso de um contrato de fidelidade?',
      answer: 'Não. Nosso serviço é sem fidelidade. O cliente pode cancelar a qualquer momento, sem multas ou burocracia, garantindo total flexibilidade.',
    },
    {
      question: 'O que acontece se eu ficar sem sinal 4G?',
      answer: 'Não se preocupe! Em áreas sem cobertura, a gravação continua normalmente no cartão SD do equipamento. Assim que a conexão for restabelecida, os dados podem ser acessados ou sincronizados.',
    },
    {
      question: 'O que está incluso na mensalidade de R$ 130,00?',
      answer: 'A mensalidade inclui o monitoramento contínuo, suporte técnico especializado, manutenção, acesso completo ao aplicativo, atualizações e a garantia de funcionamento do sistema.',
    },
    {
      question: 'Como funciona a garantia dos equipamentos?',
      answer: 'Oferecemos uma garantia de 12 meses sobre os equipamentos instalados, cobrindo defeitos de fabricação. Após este período, os custos de reparo ou substituição são de responsabilidade do cliente, mas nosso suporte técnico continua disponível.',
    },
    {
      question: 'Como é feito o pagamento?',
      answer: 'O pagamento é recorrente e pode ser feito de forma prática via boleto ou PIX, facilitando o controle e a gestão financeira para você.',
    },
     {
      question: 'O que acontece se cancelar o plano?',
      answer: 'O cancelamento é simples e sem custo, caso o cliente opte por cancelar o plano, basta entrar em contato com a equipe da Viuu para agendar a retirada dos equipamentos instalados no veículo. Esse processo é realizado sem qualquer custo adicional, de forma rápida e organizada.',
    },
    
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-viuu-blue-900">Dúvidas Frequentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <dl className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;