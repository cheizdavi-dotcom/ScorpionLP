import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProgressBars from './progress-bars';

const DesignPerformanceSection = () => {
  const performanceImage = PlaceHolderImages.find((img) => img.id === 'design-performance-bg');

  return (
    <section className="tech-grid w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="lg:pr-8">
              <h2 className="font-black text-4xl uppercase text-white sm:text-5xl">
                DESIGN E <span className="text-primary">PERFORMANCE</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Desenvolvemos estruturas focadas em converter visitantes em clientes. Cada detalhe é pensado para garantir que sua página seja rápida, funcional e visualmente atraente.
              </p>
              <ProgressBars />
            </div>
          </div>

          <div className="relative min-h-[450px] lg:min-h-0">
            {performanceImage ? (
              <Image
                src={performanceImage.imageUrl}
                alt={performanceImage.description}
                fill
                className="object-cover"
                data-ai-hint={performanceImage.imageHint}
              />
            ) : (
              <div className="h-full w-full bg-gray-700" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPerformanceSection;
