import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'elite-ecommerce',
    title: 'E-Commerce de Elite',
    tags: ['Vendas', 'Catálogo', 'Checkout'],
  },
  {
    id: 'elite-landing-page',
    title: 'Landing Page de Conversão',
    tags: ['Leads', 'Oferta Direta', 'Tráfego Pago'],
  },
  {
    id: 'elite-institutional',
    title: 'Site Institucional Premium',
    tags: ['Marca', 'Confiança', 'Portfólio'],
  },
  {
    id: 'elite-sales-page',
    title: 'Página de Vendas Matadora',
    tags: ['Infoproduto', 'Copywriting', 'Lançamento'],
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase text-white sm:text-5xl">
            NOSSOS PADRÕES DE PROJETO.
          </h2>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-muted-foreground">
            Não entregamos apenas sites bonitos. Desenvolvemos estruturas estratégicas validadas para diferentes objetivos de negócio. Veja os modelos que utilizamos para dominar mercados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((item) => (
            item && item.imageUrl && (
              <div 
                key={item.id} 
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#111111] border border-[#333333] transition-all duration-300 ease-in-out hover:border-primary hover:shadow-[0_0_30px_rgba(255,0,0,0.25)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint={item.imageHint}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
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
