import Header from '@/components/header';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Header />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 text-center">
        <div className="flex animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 ease-out flex-col items-center justify-center space-y-10">
          <div className="rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-foreground">
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

      {/* Background video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/2099401/2099401-hd_1280_720_24fps.mp4"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
    </div>
  );
}
