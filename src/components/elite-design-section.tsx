import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const EliteDesignSection = () => {
  const mainProjectImage = PlaceHolderImages.find(img => img.id === 'comando-financeiro-mockup');
  const paduProjectImage = PlaceHolderImages.find(img => img.id === 'padu-studios-mockup');

  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2/3 bg-primary/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            ÚLTIMOS PROJETOS
          </p>
          <h2 className="mt-3 font-black text-4xl text-white sm:text-5xl">
            Confira alguns dos últimos projetos realizados
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-start">
        
          {/* Left Column: Case Real (Comando Financeiro) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {mainProjectImage && (
              <div className="relative w-full aspect-video mb-8">
                 <Image
                  src={mainProjectImage.imageUrl}
                  alt={mainProjectImage.description}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(255,0,0,0.25)]"
                  data-ai-hint={mainProjectImage.imageHint}
                />
              </div>
            )}
            <h2 className="text-2xl font-black text-white uppercase leading-tight">COMANDO FINANCEIRO: DESIGN DE ALTA CONVERSÃO.</h2>
            <p className="mt-6 text-base text-muted-foreground max-w-lg">
              Desenvolvemos o novo site oficial para esta ferramenta de gestão avançada. O desafio foi traduzir uma solução técnica complexa em uma experiência de venda fluida, unindo design de alto padrão e foco total em resultados.
            </p>
            <Link href="https://fimdocaosfinanceiro.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
              <button className="btn-contact">
                CONHECER ESTRUTURA AO VIVO
              </button>
            </Link>
          </div>

          {/* Right Column: Case Real (Padu Studios) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {paduProjectImage && (
              <div className="relative w-full aspect-video mb-8">
                 <Image
                  src={paduProjectImage.imageUrl}
                  alt={paduProjectImage.description}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(255,0,0,0.25)]"
                  data-ai-hint={paduProjectImage.imageHint}
                />
              </div>
            )}
            <h2 className="text-2xl font-black text-white uppercase leading-tight">PADU STUDIOS: DESIGN DE ELITE E PERFORMANCE.</h2>
            <p className="mt-6 text-base text-muted-foreground max-w-lg">
              Desenvolvemos a nova presença digital para o Padu Studios. O desafio foi migrar uma estrutura antiga para uma arquitetura moderna no Firebase, focada em transformar visitantes em agendamentos reais via WhatsApp.
            </p>
            <Link href="https://padustudios.com.br/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
              <button className="btn-contact">
                CONHECER ESTRUTURA AO VIVO
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EliteDesignSection;
