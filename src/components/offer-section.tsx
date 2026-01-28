import { Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const features = [
  'Logotipo feita do zero',
  'Banners profissionais',
  'Design Personalizado',
  'Estrutura Responsiva',
  'SEO Básico',
  'Conteúdo Visual',
  'Configuração de Domínio',
  'Garantia de Desempenho',
  '2 Rodadas completas de alterações',
  'Formulário de Captura de Leads (opcional)',
  'Estrutura 100% Personalizada',
];

const OfferSection = () => {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-full bg-primary/10 rounded-full blur-[250px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Quanto custa?</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white max-w-4xl mx-auto">
          Investimento Inteligente Para Resultados Extraordinários
        </h2>

        <div className="mt-16 max-w-md mx-auto">
          <div className="rounded-2xl bg-[#181818] text-left shadow-[0_0_80px_rgba(255,0,0,0.3)] overflow-hidden border border-primary/20">
            
            {/* Card Header */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 text-center rounded-t-xl">
                <h3 className="text-3xl font-black text-white">Landing Page</h3>
                <div className="flex justify-center items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-white/90 text-sm mt-1">4.8 (97 avaliações)</p>
            </div>

            {/* Card Body */}
            <div className="p-8">
                <div className="text-center">
                    <p className="text-6xl font-black text-white">
                        R$597
                    </p>
                    <p className="mt-1 text-lg text-muted-foreground">
                        Ou 12x de R$60
                    </p>
                </div>
                
                <div className="w-16 h-px bg-primary/50 mx-auto my-8"></div>

                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start pb-4 border-b border-white/10 last:border-b-0">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" fill="hsl(var(--primary))" color="black" />
                      <span className="text-base text-white/90 ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
            
                <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="mt-10 block">
                     <button className="btn-offer w-full">
                        QUERO UMA!
                     </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
