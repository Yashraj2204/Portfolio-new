import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children, delay = 0, stagger = false, type = 'default' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (type === 'default') {
        // Standard fade-in-up with parallax
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 35%',
            markers: false,
            once: true,
          },
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: 'power3.out',
          delay: delay / 1000,
        });

        // Parallax effect
        gsap.to(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.5,
            markers: false,
          },
          y: -40,
          opacity: 1,
          ease: 'none',
        });
      } else if (type === 'reveal') {
        // Staggered reveal animation
        const elements = containerRef.current.querySelectorAll('[data-animate]');
        gsap.from(elements, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 30%',
            markers: false,
            once: true,
          },
          opacity: 0,
          y: 80,
          x: (i) => (i % 2 === 0 ? -100 : 100),
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
        });
      } else if (type === 'scale') {
        // Scale and fade animation
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 35%',
            markers: false,
            once: true,
          },
          opacity: 0,
          scale: 0.85,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: delay / 1000,
        });
      } else if (type === 'blur') {
        // Blur and fade animation
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 35%',
            markers: false,
            once: true,
          },
          opacity: 0,
          filter: 'blur(10px)',
          y: 40,
          duration: 1.3,
          ease: 'power2.out',
          delay: delay / 1000,
        });
      }
    });

    return () => ctx.revert();
  }, [delay, type]);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export default ScrollAnimation;
