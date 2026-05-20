import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MorphingTextAnimation = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const headings = containerRef.current.querySelectorAll('h1, h2, h3');
      const paragraphs = containerRef.current.querySelectorAll('p');

      // Heading animation
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1.5,
          markers: false,
        },
      })
        .to(
          headings,
          {
            fontSize: (i) => {
              const element = headings[i];
              const computedStyle = window.getComputedStyle(element);
              const originalSize = parseFloat(computedStyle.fontSize);
              return originalSize * 1.25;
            },
            letterSpacing: '0.02em',
            ease: 'power1.inOut',
          },
          0
        )
        .to(
          paragraphs,
          {
            lineHeight: '1.8',
            letterSpacing: '0.01em',
            ease: 'power1.inOut',
          },
          0
        );

      // Initial entrance
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          markers: false,
          once: true,
        },
        opacity: 0,
        y: 100,
        duration: 1.3,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default MorphingTextAnimation;
