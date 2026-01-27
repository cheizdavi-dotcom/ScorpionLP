import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'elite-ecommerce',
    title: 'E-COMMERCE ELITE',
    tag: 'Vendas & Performance',
  },
  {
    id: 'elite-landing-page',
    title: 'LANDING PAGE DE ALTA CONVERSÃO',
    tag: 'Captura & Leads',
  },
  {
    id: 'elite-institutional',
    title: 'INSTITUCIONAL PREMIUM',
    tag: 'Autoridade & Branding',
  },
  {
    id: 'elite-sales-page',
    title: 'PÁGINA DE VENDAS DIRETA',
    tag: 'Oferta & Velocidade',
  },
];

const EliteDesignSection = () => {
    const portfolioProjects = projects.map(project => {
        const image = PlaceHolderImages.find(img => img.id === project.id);
        return {
            ...project,
            ...image,
        };
    });

  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 bg-primary/20 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-white sm:text-5xl">
            NOSSOS PADRÕES DE PROJETO.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Estruturas estratégicas validadas que utilizamos para dominar mercados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioProjects.map((item) => (
            item && item.imageUrl && (
              <div key={item.id}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white uppercase">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary font-semibold uppercase tracking-wider">{item.tag}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default EliteDesignSection;
