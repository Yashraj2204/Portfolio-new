import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextAnimator = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Split text into characters
      const text = textRef.current;
      const original = text.innerHTML;
      const chars = original.split('').map(char => 
        char === ' ' ? '<span class="space"> </span>' : `<span class="char">${char}</span>`
      ).join('');
      text.innerHTML = chars;

      // Animate each character
      gsap.from('.char', {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 30%',
          markers: false,
          once: true,
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.05,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, [children]);

  return <div ref={textRef}>{children}</div>;
};

export default TextAnimator;
