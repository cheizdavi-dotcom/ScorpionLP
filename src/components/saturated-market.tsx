import { BrainCircuit, Telescope, Target } from 'lucide-react';

const features = [
  {
    number: '01',
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Design Tático e Psicológico',
    description:
      'Cada elemento é posicionado com base em neuromarketing para guiar o olhar do usuário e maximizar a conversão. Não é apenas beleza, é ciência.',
  },
  {
    number: '02',
    icon: <Telescope className="h-10 w-10 text-primary" />,
    title: 'Estrutura Voltada à Venda',
    description:
      'Nossas landing pages são construídas com uma narrativa que educa, envolve e convence. A venda se torna uma consequência natural da experiência.',
  },
  {
    number: '03',
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Foco em Performance Extrema',
    description:
      'Código limpo e otimizado para um carregamento quase instantâneo. Em um mercado competitivo, cada milissegundo conta para não perder um lead.',
  },
];

const SaturatedMarket = () => {
  return (
    <section className="w-full bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase text-white sm:text-5xl lg:text-6xl">
            O MERCADO SATUROU DE <span className="text-primary">PÁGINAS COMUNS.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.number} className="feature-card group">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 text-9xl font-black text-primary/5 opacity-50 transition-opacity duration-300 group-hover:text-primary/10 -z-10"
              >
                {feature.number}
              </div>
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-base font-light text-[#CCCCCC]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaturatedMarket;
