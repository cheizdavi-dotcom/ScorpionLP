import { Check } from 'lucide-react';
import Link from 'next/link';

const features = [
  'Design Exclusivo',
  'Copywriting Estratégico',
  'Performance de Elite',
  'Suporte Pós-Entrega',
];

const OfferSection = () => {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/10 rounded-full blur-[250px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
          O INVESTIMENTO PARA DOMINAR O SEU MERCADO.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Uma estrutura de elite não é um custo, é o seu ativo mais valioso. Pare de perder leads para sites amadores.
        </p>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="rounded-2xl border border-primary bg-[#111111] p-8 text-left shadow-[0_0_40px_rgba(255,0,0,0.2)]">
            <h3 className="text-lg font-bold uppercase tracking-wider text-primary text-center">
              ESTRUTURA SCORPIONLP
            </h3>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mr-3 mt-1" />
                  <span className="text-base text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
                <p className="text-lg text-muted-foreground line-through">
                    R$ 2.497
                </p>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                    Consulte condições no WhatsApp
                </p>
            </div>
            
            <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="mt-8 block">
                 <button className="btn-main w-full">
                    QUERO MINHA ESTRUTURA DE ELITE
                 </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
