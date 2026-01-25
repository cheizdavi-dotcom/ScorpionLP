import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black p-8 text-center">
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        {/* 
            This is a placeholder video. You can replace the src with your own video file.
            This video is from Pexels: https://www.pexels.com/video/background-of-a-glittering-spec-of-dust-in-motion-2099401/
          */}
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/2099401/2099401-hd_1280_720_24fps.mp4"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="flex animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 ease-out flex-col items-center justify-center space-y-10">
        <div className="rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-normal uppercase tracking-[2px] text-foreground">
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

        <Button
          size="lg"
          className="mt-4 rounded-full bg-gradient-to-r from-primary to-[#FF4D4D] px-10 py-6 text-base font-bold uppercase text-primary-foreground shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-transform duration-300 ease-in-out hover:scale-105"
        >
          QUERO MINHA ESTRUTURA TÁTICA
        </Button>
      </div>
    </main>
  );
}
