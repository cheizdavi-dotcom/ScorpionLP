import { FileText, Layers, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Consultoria Gratuita',
    description: 'Vamos analisar qual é o melhor caminho para a sua empresa dominar o digital.',
    step: 'Passo 01',
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: 'Alinhando Ideias',
    description: 'Alinhar o que você deseja com o que iremos produzir, garantindo excelência em cada detalhe.',
    step: 'Passo 02',
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: 'Desenvolvimento',
    description: 'Desenvolver o projeto conforme o que foi alinhado entre você e a SCORPIONLP.',
    step: 'Passo 03',
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: 'Check Final',
    description: 'Momento onde vamos finalizar a sua estrutura com foco total em colocar o site no ar.',
    step: 'Passo 04',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Red Glow Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[700px] w-[700px] bg-primary/20 rounded-full blur-[200px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            COMO FUNCIONA
          </p>
          <h2 className="mt-3 font-black text-3xl uppercase text-white sm:text-4xl">
            Tenha resultados surpreendentes com apenas 4 etapas simples!
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Vertical separator for larger screens */}
              {index > 0 && (
                <div className="absolute top-0 bottom-0 -left-4 hidden lg:block w-px bg-primary/20"></div>
              )}
              
              <div className="relative mb-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                  {step.icon}
                </div>
              </div>
              
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{step.step}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-[250px] mx-auto">
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
