import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ZoomTextAnimation = ({ children, triggerScrub = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Get text elements
      const textElements = containerRef.current.querySelectorAll('h1, h2, h3, h4, p');

      // Create timeline for zoom effect
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: triggerScrub,
          markers: false,
        },
      })
        .to(
          textElements,
          {
            fontSize: (i) => {
              const element = textElements[i];
              const computedStyle = window.getComputedStyle(element);
              const originalSize = parseFloat(computedStyle.fontSize);
              return originalSize * 1.3;
            },
            letterSpacing: '0.05em',
            opacity: 1,
            ease: 'none',
          },
          0
        );

      // Initial fade-in
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 35%',
          markers: false,
          once: true,
        },
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, [triggerScrub]);

  return <div ref={containerRef}>{children}</div>;
};

export default ZoomTextAnimation;
