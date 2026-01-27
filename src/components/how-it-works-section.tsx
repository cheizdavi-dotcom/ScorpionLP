import { FileText, Layers, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-white" />,
    title: 'Consultoria Gratuita',
    description: 'Vamos analisar qual é o melhor caminho para a sua empresa dominar o digital.',
    step: 'Passo 01',
  },
  {
    icon: <Layers className="h-10 w-10 text-white" />,
    title: 'Alinhando Ideias',
    description: 'Alinhar o que você deseja com o que iremos produzir, garantindo excelência em cada detalhe.',
    step: 'Passo 02',
  },
  {
    icon: <Code className="h-10 w-10 text-white" />,
    title: 'Desenvolvimento',
    description: 'Desenvolver o projeto conforme o que foi alinhado entre você e a SCORPIONLP.',
    step: 'Passo 03',
  },
  {
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: 'Check Final',
    description: 'Momento onde vamos finalizar a sua estrutura com foco total em colocar o site no ar.',
    step: 'Passo 04',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative w-full bg-black py-24 sm:py-32 overflow-hidden">
      {/* Red Glow Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[700px] w-[700px] bg-primary/25 rounded-full blur-[250px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-bold uppercase tracking-wider text-primary">
            COMO FUNCIONA
          </p>
          <h2 className="mt-4 font-black text-3xl uppercase text-white sm:text-4xl md:text-5xl">
            Tenha resultados surpreendentes com apenas 4 etapas simples!
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-x-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Vertical separator for larger screens */}
              {index > 0 && (
                <div className="absolute top-0 bottom-0 -left-6 hidden lg:block w-px bg-primary/20"></div>
              )}
              
              <div className="relative mb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                  {step.icon}
                </div>
              </div>
              
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{step.step}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-base text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
