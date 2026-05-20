import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageAnimator = ({ children, perspective = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (perspective) {
        // 3D perspective animation
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 35%',
            markers: false,
            once: true,
          },
          opacity: 0,
          rotationX: 15,
          rotationY: -15,
          scale: 0.8,
          duration: 1.2,
          ease: 'power2.out',
          transformOrigin: 'center center',
        });
      } else {
        // Clip-path reveal animation
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 35%',
            markers: false,
            once: true,
          },
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      // Hover effect with scale
      containerRef.current.addEventListener('mouseenter', () => {
        gsap.to(containerRef.current, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      containerRef.current.addEventListener('mouseleave', () => {
        gsap.to(containerRef.current, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });

    return () => ctx.revert();
  }, [perspective]);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ perspective: perspective ? '1200px' : 'none' }}
    >
      {children}
    </div>
  );
};

export default ImageAnimator;
