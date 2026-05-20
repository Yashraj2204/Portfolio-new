import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function useScatterText() {
  const textRef = useRef(null);
  const charsRef = useRef([]);
  const originalPositionsRef = useRef([]);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const text = element.textContent;
    
    // Clear and rebuild with individual chars in spans
    element.innerHTML = text
      .split('')
      .map((char) => `<span class="inline-block" style="display:inline-block;position:relative;">${char}</span>`)
      .join('');

    charsRef.current = element.querySelectorAll('span');

    // Store original positions
    originalPositionsRef.current = Array.from(charsRef.current).map((char) => {
      const rect = char.getBoundingClientRect();
      return {
        x: 0,
        y: 0,
        rotation: 0,
      };
    });

    const onMouseEnter = () => {
      const chars = charsRef.current;
      
      gsap.to(chars, {
        x: () => gsap.utils.random(-60, 60),
        y: () => gsap.utils.random(-60, 60),
        rotation: () => gsap.utils.random(-180, 180),
        opacity: () => gsap.utils.random(0.3, 1),
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      const chars = charsRef.current;
      
      gsap.to(chars, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.03,
        ease: 'elastic.out(1.2, 0.6)',
      });
    };

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return textRef;
}
