import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
           <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            ÚLTIMOS PROJETOS
          </p>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Confira alguns dos últimos projetos realizados
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {portfolioProjects.map((item) => (
              item && item.imageUrl && (
                <CarouselItem key={item.id} className="pl-8 md:basis-1/2">
                  <div>
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
                </CarouselItem>
              )
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default EliteDesignSection;
