import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvancedParallax = ({ children, intensity = 50 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax with vertical movement
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
          markers: false,
        },
      })
        .to(containerRef.current, {
          y: -intensity,
          ease: 'none',
        }, 0);

      // Additional fade-in animation on first view
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 35%',
          markers: false,
          once: true,
        },
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export default AdvancedParallax;
