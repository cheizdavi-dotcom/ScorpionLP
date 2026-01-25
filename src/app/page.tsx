import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
      <div className="flex animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 ease-out flex-col items-center justify-center space-y-6">
        <div className="text-xs font-bold uppercase tracking-[2px] text-muted-foreground">
          BEM-VINDO A SCORPIONLP
        </div>

        <h1 className="font-headline text-5xl font-bold leading-tight text-foreground md:text-7xl">
          DESIGN QUE IMPÕE.{' '}
          <span className="text-primary">ESTRUTURA QUE VENDE.</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Sua marca merece uma landing page de alto padrão que converte tráfego em
          lucro real. Pare de perder dinheiro com páginas amadoras e adquira
          agora sua estrutura com design tático.
        </p>

        <Button
          size="lg"
          className="mt-4 rounded-full px-10 py-6 text-base font-bold uppercase animate-glow shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        >
          QUERO MINHA ESTRUTURA TÁTICA
        </Button>
      </div>
    </main>
  );
}
