'use client';

import { useState } from 'react';
import { generateAlternativeHeadline } from '@/ai/flows/generate-alternative-headline';
import { Sparkles, Loader2 } from 'lucide-react';

const AIHeadlineTester = () => {
  const [headline, setHeadline] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!headline) return;
    setLoading(true);
    try {
      const response = await generateAlternativeHeadline({ originalHeadline: headline });
      setResult(response.alternativeHeadline);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative w-full bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/30 bg-[#0A0A0A] p-8 shadow-[0_0_50px_rgba(255,0,0,0.1)] md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <Sparkles className="h-4 w-4" /> SCORPION AI
            </div>
            <h2 className="text-3xl font-black text-white uppercase sm:text-4xl">
              Sua Headline é <span className="text-primary">Tática?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Teste o poder da nossa inteligência artificial. Insira sua chamada atual e veja como a Scorpion a transformaria em uma máquina de vendas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Ex: Vendo consultoria de marketing digital"
                className="w-full rounded-xl border border-white/10 bg-black p-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={loading || !headline}
                className="mt-4 w-full rounded-xl bg-primary py-4 font-black uppercase text-white transition-all hover:bg-primary/90 disabled:opacity-50 md:absolute md:right-2 md:top-2 md:mt-0 md:w-auto md:px-8 md:py-2"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : 'OTIMIZAR'}
              </button>
            </div>

            {result && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">RESULTADO TÁTICO:</p>
                <p className="text-xl font-bold text-white leading-tight">"{result}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHeadlineTester;
