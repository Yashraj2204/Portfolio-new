import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StaggeredZoomReveal = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('[data-zoom-item]');

      // Staggered zoom reveal
      gsap.from(items, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
          markers: false,
          once: true,
        },
        scale: 0.5,
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.15,
        ease: 'back.out(1.5)',
      });

      // Continuous scroll effect with zoom
      gsap.to(items, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        scale: 1.08,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default StaggeredZoomReveal;
