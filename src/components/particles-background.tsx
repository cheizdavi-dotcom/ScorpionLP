'use client';

import React, { useRef, useEffect } from 'react';

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx!.fillStyle = '#FF0000'; // Cor da Partícula
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    let particlesArray: Particle[] = [];
    
    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.5 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.3 - 0.15;
        const speedY = Math.random() * 0.3 - 0.15;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    function connect() {
      const connectDistance = 120;
      const mouseRadius = 150;
      const mouse = mousePositionRef.current;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = Math.sqrt(
            (particlesArray[a].x - particlesArray[b].x) ** 2 +
            (particlesArray[a].y - particlesArray[b].y) ** 2
          );
          
          let lineOpacity = 0;
          let isNearMouse = false;

          if (mouse.x && mouse.y) {
              const distanceToMouseA = Math.sqrt((particlesArray[a].x - mouse.x)**2 + (particlesArray[a].y - mouse.y)**2);
              const distanceToMouseB = Math.sqrt((particlesArray[b].x - mouse.x)**2 + (particlesArray[b].y - mouse.y)**2);
              if(distanceToMouseA < mouseRadius || distanceToMouseB < mouseRadius) {
                  isNearMouse = true;
              }
          }

          if (distance < connectDistance) {
             const baseOpacity = isNearMouse ? 0.7 : 0.4;
             lineOpacity = (1 - distance / connectDistance) * baseOpacity;
          }
          
          if (lineOpacity > 0) {
            ctx!.strokeStyle = `rgba(255, 0, 0, ${lineOpacity})`; // Cor da linha
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      mousePositionRef.current = { x: null, y: null };
    };

    const handleResize = () => {
        resizeCanvas();
        init();
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full bg-transparent"
    />
  );
};

export default ParticlesBackground;
