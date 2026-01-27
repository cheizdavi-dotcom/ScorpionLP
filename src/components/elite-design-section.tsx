import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectTypes = [
  { id: 'elite-ecommerce', title: 'E-Commerce' },
  { id: 'elite-landing-page', title: 'Landing Page' },
  { id: 'elite-institutional', title: 'Site Institucional' },
  { id: 'elite-sales-page', title: 'Página de Vendas' },
];

const EliteDesignSection = () => {
    const portfolioImages = projectTypes.map(type => {
        const image = PlaceHolderImages.find(img => img.id === type.id);
        return {
            ...type,
            ...image,
        };
    });

  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-primary/20 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase text-white sm:text-5xl">
            A ELITE DO DESIGN DIGITAL
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground md:text-lg">
            Desenvolvemos estruturas de alto nível para quem não aceita o comum. Veja os modelos de projeto que entregamos para colocar sua marca no topo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {portfolioImages.map((item) => (
            item && item.imageUrl && (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] rounded-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                    data-ai-hint={item.imageHint}
                  />
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
