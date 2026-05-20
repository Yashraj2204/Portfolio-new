import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function useMagneticScatterText() {
  const textRef = useRef(null);
  const charsRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Get all text nodes and convert to individual character spans
    const processNode = (node) => {
      if (node.nodeType === 3) { // Text node
        const text = node.textContent;
        const span = document.createElement('span');
        span.innerHTML = text
          .split('')
          .map((char) => `<span class="inline-block" style="display:inline-block;position:relative;">${char}</span>`)
          .join('');
        node.parentNode.replaceChild(span, node);
      } else {
        Array.from(node.childNodes).forEach(processNode);
      }
    };

    // Clone and process to avoid modifying original
    const clone = element.cloneNode(true);
    processNode(clone);
    element.innerHTML = clone.innerHTML;

    charsRef.current = element.querySelectorAll('span > span');

    let isHovering = false;

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseMove = (e) => {
      if (!isHovering) return;

      mousePos.current = { x: e.clientX, y: e.clientY };

      const chars = charsRef.current;
      chars.forEach((char) => {
        const charRect = char.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const charCenterY = charRect.top + charRect.height / 2;

        // Calculate attraction vector (towards cursor)
        const distX = mousePos.current.x - charCenterX;
        const distY = mousePos.current.y - charCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // If cursor is within 200px, attract the letter towards cursor with scatter
        if (distance < 200) {
          const angle = Math.atan2(distY, distX);
          const force = (200 - distance) / 200;
          
          // Letters move towards cursor with random scatter (like sand)
          const randomScatter = 25;
          const scatterX = (Math.random() - 0.5) * randomScatter;
          const scatterY = (Math.random() - 0.5) * randomScatter;
          
          const pullX = Math.cos(angle) * force * 80 + scatterX;
          const pullY = Math.sin(angle) * force * 80 + scatterY;

          gsap.to(char, {
            x: pullX,
            y: pullY,
            opacity: 0.65,
            scale: 0.92,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        } else {
          // Return to original position smoothly
          gsap.to(char, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'elastic.out(1.3, 0.7)',
            overwrite: 'auto',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      const chars = charsRef.current;
      gsap.to(chars, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'elastic.out(1.3, 0.7)',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return textRef;
}
