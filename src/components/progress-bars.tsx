'use client';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'Design & Branding', value: 97 },
  { name: 'Site Institucional', value: 91 },
  { name: 'Landing Pages', value: 99 },
  { name: 'E-Commerce', value: 94 },
];

const ProgressBars = () => {
  const [progressValues, setProgressValues] = useState<number[]>(
    skills.map(() => 0)
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const newValues = skills.map(skill => skill.value);
          
          requestAnimationFrame(() => {
            setProgressValues(newValues);
          });
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className="mt-12 space-y-8">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-white uppercase tracking-wider">{skill.name}</p>
            <p className="font-bold text-lg text-primary">{progressValues[index]}%</p>
          </div>
          <Progress 
            value={progressValues[index]} 
            className="h-2 bg-primary/20 [&>div]:duration-[2500ms]" 
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
