import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Footer = () => {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/30 py-12">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-12 md:gap-x-8 md:text-left">
            {/* Column 1: Logo and Description */}
            <div className="flex flex-col items-center md:col-span-4 md:items-start lg:col-span-5">
              {logo && (
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.description}
                    width={200}
                    height={50}
                    data-ai-hint={logo.imageHint}
                  />
                </Link>
              )}
              <p className="max-w-sm text-sm text-muted-foreground">
                A SCORPIONLP cria soluções personalizadas, modernas e funcionais para destacar seu negócio online. Transformamos sua ideia em sucesso digital!
              </p>
              <div className="mt-6 flex gap-4">
                <Link href="https://www.instagram.com/scorpionlp.br/" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-3 lg:col-span-3" />

            {/* Column 2 & 3 - Links */}
            <div className="col-span-1 grid grid-cols-2 gap-8 md:col-span-5 lg:col-span-4">
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-primary">Suporte</h3>
                <ul className="mt-4 space-y-3">
                  <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-white">Central de Ajuda</Link></li>
                  <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-white">FAQ</Link></li>
                  <li><Link href="https://wa.me/5551989760454?text=Olá,%20venho%20do%20seu%20site%20e%20queria%20mais%20informações,%20por%20favor." target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-white">Contato</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-primary">Empresa</h3>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-white">Home</Link></li>
                  <li><Link href="#sobre-nos" className="text-sm text-muted-foreground transition-colors hover:text-white">Sobre Nós</Link></li>
                  <li><Link href="#valor" className="text-sm text-muted-foreground transition-colors hover:text-white">Valor</Link></li>
                  <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-white">Projetos</Link></li>
                  <li><Link href="https://wa.me/5551989760454?text=Olá,%20venho%20do%20seu%20site%20e%20queria%20mais%20informações,%20por%20favor." target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-white">Contato</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/30 py-6 text-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ScorpionLP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
