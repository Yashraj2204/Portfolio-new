import { useEffect, useRef } from 'react';

/*
  useSandParticleText  —  scroll-aware edition
  ─────────────────────────────────────────────
  Canvas is position:absolute inside the <h1>'s
  nearest positioned ancestor, so it scrolls
  with the page instead of floating over it.

  Particle coords are relative to the canvas,
  which is sized to cover the h1 element.
  Mouse coords are converted to canvas-local space.
*/

const CFG = {
  sampleStep:      2,
  particleSize:    1.2,
  sizeVariance:    0.9,

  scatterWindMult: 0.30,
  burstMin:        4,
  burstMax:        11,

  gravity:         0.06,
  airDrag:         0.982,
  attractRadius:   200,
  attractForce:    1.6,

  returnSpring:    0.055,
  returnDamping:   0.78,

  autoRecallMs:    3500,
  recallDelayMs:   500,

  darkColors: [
    '#111111','#1a1a1a','#222222',
    '#2a2520','#1e1e2e','#0f0f0f','#333333',
  ],
  greyColors: [
    '#737373','#8a8a8a','#606060',
    '#6b7280','#9ca3af','#555555',
  ],
};

class Grain {
  constructor(ox, oy, color) {
    this.ox = ox; this.oy = oy;   // local to canvas
    this.x  = ox; this.y  = oy;
    this.vx = 0;  this.vy = 0;
    this.color = color;
    this.size  = CFG.particleSize * (1 + (Math.random() - 0.5) * CFG.sizeVariance);
    this.scattered    = false;
    this.scatterDelay = Math.random() * 0.18;
    this._acc = 0;
  }

  scatter(wx, wy) {
    if (this.scattered) return;
    this.scattered = true;
    this._acc = 0;
    const angle = Math.random() * Math.PI * 2;
    const burst = CFG.burstMin + Math.random() * (CFG.burstMax - CFG.burstMin);
    const mag   = Math.sqrt(wx * wx + wy * wy) || 1;
    const blend = Math.min(mag * 0.5, 5);
    this.vx = (wx / mag) * blend + Math.cos(angle) * burst;
    this.vy = (wy / mag) * blend + Math.sin(angle) * burst - Math.random() * 3;
  }

  recall() { this.scattered = false; }

  update(dt, localMouse, CW, CH) {
    if (this.scattered) {
      this._acc += dt;
      if (this._acc < this.scatterDelay) return;

      this.vy += CFG.gravity;
      this.vx *= CFG.airDrag;
      this.vy *= CFG.airDrag;

      // Attract toward mouse in canvas-local coords
      const dx   = localMouse.x - this.x;
      const dy   = localMouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CFG.attractRadius && dist > 1) {
        const f = ((CFG.attractRadius - dist) / CFG.attractRadius) * CFG.attractForce;
        this.vx += (dx / dist) * f;
        this.vy += (dy / dist) * f;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Bounce off canvas edges
      if (this.x < 0)   { this.x = 0;   this.vx =  Math.abs(this.vx) * 0.3; }
      if (this.x > CW)  { this.x = CW;  this.vx = -Math.abs(this.vx) * 0.3; }
      if (this.y > CH)  { this.y = CH;  this.vy = -Math.abs(this.vy) * 0.3; this.vx *= 0.6; }
      if (this.y < 0)   { this.y = 0;   this.vy =  Math.abs(this.vy) * 0.3; }
    } else {
      const dx = this.ox - this.x;
      const dy = this.oy - this.y;
      this.vx += dx * CFG.returnSpring;
      this.vy += dy * CFG.returnSpring;
      this.vx *= CFG.returnDamping;
      this.vy *= CFG.returnDamping;
      this.x  += this.vx;
      this.y  += this.vy;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ── Rasterise one span into grains (coords local to canvasRect) ── */
function rasteriseSpan(span, canvasRect, particles, palette) {
  const rect = span.getBoundingClientRect();
  if (rect.width < 1 || rect.height < 1) return;

  const cs = getComputedStyle(span);
  const fs = parseFloat(cs.fontSize);

  const pad = 8;
  const oc  = document.createElement('canvas');
  oc.width  = Math.ceil(rect.width)  + pad * 2;
  oc.height = Math.ceil(rect.height) + pad * 2;
  const oc2 = oc.getContext('2d');

  oc2.font         = `${cs.fontStyle} ${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
  oc2.textBaseline = 'top';
  oc2.fillStyle    = '#000';
  try {
    const ls = cs.letterSpacing;
    if (ls && ls !== 'normal') oc2.letterSpacing = ls;
  } catch {
    // Some browsers/canvas contexts don't support letterSpacing.
  }
  oc2.fillText(span.textContent, pad, pad);

  const imgData = oc2.getImageData(0, 0, oc.width, oc.height);
  const data    = imgData.data;

  // Convert screen coords → canvas-local coords
  const offsetX = rect.left - canvasRect.left;
  const offsetY = rect.top  - canvasRect.top;

  for (let py = 0; py < oc.height; py += CFG.sampleStep) {
    for (let px = 0; px < oc.width; px += CFG.sampleStep) {
      const idx = (py * oc.width + px) * 4;
      if (data[idx + 3] > 60) {
        const jx = (Math.random() - 0.5) * CFG.sampleStep;
        const jy = (Math.random() - 0.5) * CFG.sampleStep;
        const lx = offsetX + px - pad + jx;
        const ly = offsetY + py - pad + jy;
        const c  = palette[Math.floor(Math.random() * palette.length)];
        particles.push(new Grain(lx, ly, c));
      }
    }
  }
}

/* ── Hook ── */
export default function useSandParticleText(isDarkMode = false) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const palettes = isDarkMode
      ? {
          primary: ['#ffffff'],
          grey: ['#9ca3af', '#a3a3a3', '#bdbdbd'],
        }
      : {
          primary: CFG.darkColors,
          grey: CFG.greyColors,
        };

    /* ── Find / create a positioned wrapper ──
       The canvas must live inside a position:relative parent
       so it scrolls with the content. We wrap the h1 in a
       relative div if its parent isn't already positioned.   */
    let wrapper = el.parentElement;
    if (getComputedStyle(wrapper).position === 'static') {
      wrapper.style.position = 'relative';
    }

    /* ── Canvas: absolute inside wrapper ── */
    const canvas = document.createElement('canvas');
    canvas.style.cssText = [
      'position:absolute',
      'top:0',
      'left:0',
      'pointer-events:none',
      'z-index:10',
    ].join(';');
    wrapper.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    /* Size canvas to exactly cover the h1 element */
    let canvasRect = null;   // bounding rect of canvas in page coords
    const sizeCanvas = () => {
      const elRect = el.getBoundingClientRect();
      const wRect  = wrapper.getBoundingClientRect();

      // Position canvas over h1, relative to wrapper
      const top  = elRect.top  - wRect.top  + wrapper.scrollTop;
      const left = elRect.left - wRect.left;

      // Give extra room so scattered particles don't clip
      const OVERFLOW = 300;
      canvas.style.top  = `${top  - OVERFLOW}px`;
      canvas.style.left = `${left - OVERFLOW}px`;
      canvas.width  = elRect.width  + OVERFLOW * 2;
      canvas.height = elRect.height + OVERFLOW * 2;

      // canvasRect in viewport coords (used for mouse→local conversion)
      canvasRect = canvas.getBoundingClientRect();
    };

    /* Hide the real DOM text — canvas IS the text */
    el.style.opacity    = '0';
    el.style.userSelect = 'none';

    let particles       = [];
    let overText        = false;
    let globalScattered = false;
    let scatterTimer    = null;
    let rafId           = null;

    const mouse  = { x: -999, y: -999 };   // screen coords
    const pmouse = { x: -999, y: -999 };
    let windX = 0, windY = 0;

    /* ── Build ── */
    const build = () => {
      sizeCanvas();
      particles = [];
      canvasRect = canvas.getBoundingClientRect();

      const spans = el.querySelectorAll('[data-particle]');
      if (spans.length > 0) {
        spans.forEach(span => {
          const grey = span.hasAttribute('data-particle-grey');
          rasteriseSpan(span, canvasRect, particles, grey ? palettes.grey : palettes.primary);
        });
      } else {
        rasteriseSpan(el, canvasRect, particles, palettes.primary);
      }
    };

    /* ── Scatter / recall ── */
    const scatterAll = () => {
      if (globalScattered) return;
      globalScattered = true;
      const mag = Math.sqrt(windX * windX + windY * windY) || 1;
      particles.forEach(p => p.scatter((windX / mag) * 7, (windY / mag) * 7));
      clearTimeout(scatterTimer);
      scatterTimer = setTimeout(recallAll, CFG.autoRecallMs);
    };

    const recallAll = () => {
      globalScattered = false;
      particles.forEach(p => p.recall());
      clearTimeout(scatterTimer);
    };

    /* ── Hit-test against h1 in screen coords ── */
    const hitTest = (mx, my) => {
      const r   = el.getBoundingClientRect();
      const pad = 24;
      return mx >= r.left - pad && mx <= r.right  + pad &&
             my >= r.top  - pad && my <= r.bottom + pad;
    };

    /* ── Mouse → canvas-local coords ── */
    const toLocal = (mx, my) => {
      const cr = canvas.getBoundingClientRect();
      return { x: mx - cr.left, y: my - cr.top };
    };

    /* ── Mouse handlers ── */
    const onMove = e => {
      pmouse.x = mouse.x; pmouse.y = mouse.y;
      mouse.x = e.clientX; mouse.y = e.clientY;
      windX = (mouse.x - pmouse.x) * CFG.scatterWindMult;
      windY = (mouse.y - pmouse.y) * CFG.scatterWindMult;

      const over = hitTest(mouse.x, mouse.y);
      if (over && !overText)  { overText = true;  scatterAll(); }
      if (!over && overText)  {
        overText = false;
        clearTimeout(scatterTimer);
        scatterTimer = setTimeout(recallAll, CFG.recallDelayMs);
      }
    };

    const onLeave = () => {
      overText = false;
      clearTimeout(scatterTimer);
      scatterTimer = setTimeout(recallAll, CFG.recallDelayMs);
    };

    const onResize = () => build();

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize',     onResize);

    /* ── Render loop ── */
    let last = 0;
    const loop = ts => {
      const dt = Math.min((ts - last) / 16.67, 3);
      last = ts;

      const CW = canvas.width;
      const CH = canvas.height;
      ctx.clearRect(0, 0, CW, CH);

      const lm = toLocal(mouse.x, mouse.y);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(dt, lm, CW, CH);
        particles[i].draw(ctx);
      }

      windX *= 0.88;
      windY *= 0.88;
      rafId = requestAnimationFrame(loop);
    };

    /* ── Init ── */
    const init = () => {
      setTimeout(() => {
        build();
        rafId = requestAnimationFrame(loop);
      }, 400);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(scatterTimer);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize',     onResize);
      el.style.opacity    = '';
      el.style.userSelect = '';
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [isDarkMode]);

  return textRef;
}