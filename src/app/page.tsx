import Header from '@/components/header';
import ParticlesBackground from '@/components/particles-background';
import ProposalSection from '@/components/proposal-section';
import SaturatedMarket from '@/components/saturated-market';
import TacticalVisionSection from '@/components/tactical-vision-section';
import AlertStrip from '@/components/alert-strip';
import DesignPerformanceSection from '@/components/design-performance-section';
import HowItWorksSection from '@/components/how-it-works-section';

export default function Home() {
  return (
    <div className="w-full bg-black">
      <div className="relative">
        <Header />
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 text-center">
          <div className="flex animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 ease-out flex-col items-center justify-center space-y-10">
            <div className="rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-black uppercase tracking-[2px] text-foreground">
              BEM-VINDO A SCORPIONLP
            </div>

            <h1 className="font-black text-6xl uppercase text-foreground md:text-7xl">
              DESIGN QUE IMPÕE.{' '}
              <span className="text-primary">ESTRUTURA QUE VENDE.</span>
            </h1>

            <p className="max-w-[700px] text-lg font-normal text-muted-foreground md:text-xl">
              Sua marca merece uma landing page de alto padrão que converte tráfego em
              lucro real. Pare de perder dinheiro com páginas amadoras e adquira
              agora sua estrutura com design tático.
            </p>

            <button className="btn-main">
              QUERO MINHA ESTRUTURA TÁTICA
            </button>
          </div>
        </main>
        <div className="absolute inset-0 z-0 h-full w-full">
          <ParticlesBackground />
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-primary/30"></div>
      </div>

      <SaturatedMarket />

      {/* Separator */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-primary/30"></div>
      </div>

      <ProposalSection />

      {/* Separator */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-primary/30"></div>
      </div>

      <TacticalVisionSection />

      {/* Separator */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-primary/30"></div>
      </div>

      <HowItWorksSection />

      {/* Separator */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-12 h-[1px] w-full bg-primary/30"></div>
      </div>

      <AlertStrip />
      
      <DesignPerformanceSection />
    </div>
  );
}
