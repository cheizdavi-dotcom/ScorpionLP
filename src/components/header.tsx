import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Header = () => {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-5">
        <Link href="/">
          {logo ? (
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              width={220}
              height={55}
              data-ai-hint={logo.imageHint}
              priority
            />
          ) : (
            <div className="h-[55px] w-[220px] rounded bg-gray-700" />
          )}
        </Link>
        <div className="flex items-center gap-[60px]">
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-[35px]">
              <li><Link href="#" className="text-[17px] font-bold text-primary">Home</Link></li>
              <li><Link href="#" className="text-[17px] font-bold text-white transition-colors hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="#" className="text-[17px] font-bold text-white transition-colors hover:text-primary">Valor</Link></li>
              <li><Link href="#" className="text-[17px] font-bold text-white transition-colors hover:text-primary">O Protocolo</Link></li>
            </ul>
          </nav>
          <button className="btn-contact hidden md:block">
            CONTATO
          </button>
          <button className="md:hidden">
             <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
