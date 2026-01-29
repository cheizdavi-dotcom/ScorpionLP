import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TacticalVisionSection = () => {
  const tacticalBg = PlaceHolderImages.find((img) => img.id === 'tactical-bg');

  return (
    <section className="tech-grid w-full py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Card */}
          <div className="relative flex min-h-[550px] flex-col justify-end overflow-hidden rounded-lg border border-primary/50 bg-black p-8 shadow-[0_0_25px_rgba(255,0,0,0.2)] md:p-12">
            {tacticalBg && (
              <Image
                src={tacticalBg.imageUrl}
                alt={tacticalBg.description}
                fill
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
                data-ai-hint={tacticalBg.imageHint}
              />
            )}
            <div className="relative z-10 flex flex-col">
              <p className="font-bold uppercase tracking-wider text-primary">
                NOSSOS VALORES
              </p>
              <h2 className="mt-4 font-black text-3xl uppercase text-white sm:text-4xl">
                Estruturas que Vendem. Design que Domina. A Sua Marca em Outro Nível.
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Não criamos apenas páginas bonitas. Desenvolvemos ferramentas de vendas projetadas para conectar sua oferta ao cliente certo e maximizar suas conversões, sem desperdiçar tráfego.
              </p>
            </div>
            <Link href="https://wa.me/5551989760454?text=Olá,%20venho%20do%20seu%20site%20e%20queria%20mais%20informações,%20por%20favor." target="_blank" rel="noopener noreferrer" className="relative z-10 mt-8 self-start">
              <button className="btn-contact">
                SABER MAIS
              </button>
            </Link>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Right Card */}
            <div className="relative flex-1 overflow-hidden rounded-lg bg-primary p-8 text-white">
              <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/20"></div>
              <div className="relative flex h-full flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                  NOSSA VISÃO
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  Ser a Referência Absoluta em Estruturas de Alta Conversão.
                </h3>
                <p className="mt-4 text-base text-white/90">
                  Nossa visão é que cada cliente nosso deixe de competir por atenção e passe a dominar o seu nicho com um posicionamento digital inquestionável.
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="relative flex-1 overflow-hidden rounded-lg bg-primary p-8 text-white">
              <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/20"></div>
              <div className="relative flex h-full flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                  NOSSA MISSÃO
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  Transformar Visualizações em Lucro Real.
                </h3>
                <p className="mt-4 text-base text-white/90">
                  Nossa missão é eliminar o amadorismo. Entregamos estruturas que funcionam, convertem e colocam dinheiro no seu bolso, focando 100% no resultado do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TacticalVisionSection;
