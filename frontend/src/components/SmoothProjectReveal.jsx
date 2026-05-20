import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothProjectReveal = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('article');

      // Smooth staggered reveal on scroll
      gsap.from(items, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
          once: true,
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Smooth hover lift effect with shadow
      items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -10,
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default SmoothProjectReveal;
