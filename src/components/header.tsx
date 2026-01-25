import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Header = () => {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/">
          {logo ? (
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              width={140}
              height={35}
              data-ai-hint={logo.imageHint}
              priority
            />
          ) : (
            <div className="h-[35px] w-[140px] rounded bg-gray-700" />
          )}
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li><Link href="#" className="text-sm font-medium text-white transition-colors hover:text-primary">Home</Link></li>
              <li><Link href="#" className="text-sm font-medium text-white transition-colors hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="#" className="text-sm font-medium text-white transition-colors hover:text-primary">Valor</Link></li>
              <li><Link href="#" className="text-sm font-medium text-white transition-colors hover:text-primary">O Protocolo</Link></li>
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
