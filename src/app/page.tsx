import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-8 text-center">
      <div className="flex animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 ease-out flex-col items-center justify-center space-y-10">
        <div className="rounded-md border border-white/10 bg-black px-4 py-2 text-xs font-normal uppercase tracking-[2px] text-muted-foreground">
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
          className="mt-4 rounded-full bg-gradient-to-r from-red-900 to-red-600 px-10 py-6 text-base font-bold uppercase text-primary-foreground animate-glow transition-transform duration-300 ease-in-out hover:scale-105"
        >
          QUERO MINHA ESTRUTURA TÁTICA
        </Button>
      </div>
    </main>
  );
}
