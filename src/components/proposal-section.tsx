import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ProposalSection = () => {
  const headshotImage = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section className="w-full bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/50 bg-black p-2">
          <div className="grid grid-cols-1 items-center gap-12 rounded-lg bg-[#0A0A0A] p-8 md:grid-cols-2 md:p-12">
            
            {/* Left Side: Image */}
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              {headshotImage ? (
                <Image
                  src={headshotImage.imageUrl}
                  alt={headshotImage.description}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out grayscale hover:grayscale-0"
                  data-ai-hint={headshotImage.imageHint}
                />
              ) : (
                <div className="h-[500px] w-full rounded bg-gray-700" />
              )}
              <div className="pointer-events-none absolute top-5 left-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-center">
                <p className="max-w-[90%] text-[10px] font-black uppercase leading-tight text-white">
                  Design Elite & Estratégia
                </p>
              </div>
            </div>

            {/* Right Side: Text */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="font-bold uppercase tracking-wider text-primary">
                Qual é a nossa proposta?
              </p>
              <h2 className="mt-4 font-black text-4xl uppercase text-white sm:text-5xl">
                A Nova Era de Sites Visuais
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Um site cheio de informações nem sempre é o ideal para o lead, pois raramente ele lê tudo. Por isso, nossa proposta é um site que, a cada seção, capte a atenção do lead por meio de um design estratégico e envolvente.
              </p>
              <Link href="https://wa.me/5551989760454?text=Olá,%20venho%20do%20seu%20site%20e%20queria%20mais%20informações,%20por%20favor." target="_blank" rel="noopener noreferrer" className="mt-8">
                <button className="btn-contact">
                  Saber Mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
