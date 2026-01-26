import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProgressBars from './progress-bars';

const DesignPerformanceSection = () => {
  const performanceImage = PlaceHolderImages.find((img) => img.id === 'design-performance-bg');

  return (
    <section className="tech-grid relative w-full overflow-hidden bg-black py-24 sm:py-32 flex items-center justify-center min-h-[80vh]">
      {performanceImage ? (
        <Image
          src={performanceImage.imageUrl}
          alt={performanceImage.description}
          fill
          className="absolute inset-0 h-full w-full object-cover"
          data-ai-hint={performanceImage.imageHint}
        />
      ) : (
        <div className="absolute inset-0 h-full w-full bg-gray-700" />
      )}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="font-black text-4xl uppercase text-white sm:text-5xl">
            DESIGN E <span className="text-primary">PERFORMANCE</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Desenvolvemos estruturas focadas em converter visitantes em clientes. Cada detalhe é pensado para garantir que sua página seja rápida, funcional e visualmente atraente.
          </p>
          <ProgressBars />
        </div>
      </div>
    </section>
  );
};

export default DesignPerformanceSection;
