import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const EliteDesignSection = () => {
  const mainProjectImage = PlaceHolderImages.find(img => img.id === 'comando-financeiro-mockup');

  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2/3 bg-primary/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
        
          {/* Left Column: Case Real */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {mainProjectImage && (
              <div className="relative w-full mb-8">
                 <Image
                  src={mainProjectImage.imageUrl}
                  alt={mainProjectImage.description}
                  width={1000}
                  height={650}
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(255,0,0,0.25)]"
                  data-ai-hint={mainProjectImage.imageHint}
                />
              </div>
            )}
            <h2 className="text-4xl font-black text-white uppercase">COMANDO FINANCEIRO</h2>
            <p className="mt-2 text-lg font-bold text-primary tracking-wider">Sistemas de Gestão & Inteligência de Dados.</p>
            <p className="mt-6 text-base text-muted-foreground max-w-lg">
              A prova de que a complexidade pode ser elegante. Um dashboard focado em UX para quem exige controle total da sua operação.
            </p>
            <Link href="#" className="mt-8 inline-block">
              <button className="btn-contact">
                VER PROJETO AO VIVO
              </button>
            </Link>
          </div>

          {/* Right Column: Slot de Reserva */}
          <div className="flex items-center justify-center h-full min-h-[400px] w-full p-8 bg-black/30 border-2 border-dashed border-primary/50 rounded-2xl backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                PROJETO EM DESENVOLVIMENTO
              </h3>
              <p className="mt-4 text-base text-muted-foreground max-w-xs mx-auto">
                Estamos criando uma estrutura de elite para o nosso próximo cliente. Esta vaga pode ser sua.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EliteDesignSection;
