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
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
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

  useEffect(() => {
    if (isIntersecting) {
      // Set final values after a delay to trigger CSS transitions.
      // Staggering the start of each bar's animation.
      const timers = skills.map((skill, index) =>
        setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = skill.value;
            return newValues;
          });
        }, 150 * index)
      );

      return () => {
        timers.forEach(clearTimeout);
      };
    }
  }, [isIntersecting]);

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
            className="h-2 bg-primary/20" 
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
