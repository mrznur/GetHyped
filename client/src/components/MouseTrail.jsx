import { useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Logo from '../assets/Logo.png';

const COLORS = ['#3EB489', '#2196F3', '#FF4D00', '#e7a9ff'];
const ROTATIONS = [-8, -4, 4, 8, -12, 12, -6, 6];

// Hook — use this on any parent element
export function useMouseTrail() {
  const [logos, setLogos] = useState([]);
  const counterRef = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e) => {
    // No spawning on touch/mobile devices or md tablets (< 1024px)
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.innerWidth < 1024) return;

    const x = e.clientX;
    const y = e.clientY;

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < 80) return;
    lastPos.current = { x, y };

    const id = counterRef.current++;
    const color = COLORS[id % COLORS.length];
    const rotation = ROTATIONS[id % ROTATIONS.length];
    const jitterX = (Math.random() - 0.5) * 40;
    const jitterY = (Math.random() - 0.5) * 30;

    setLogos((prev) => [...prev.slice(-12), { id, x: x + jitterX, y: y + jitterY, color, rotation }]);
    setTimeout(() => setLogos((prev) => prev.filter((l) => l.id !== id)), 2500);
  }, []);

  return { logos, onMouseMove };
}

// Renderer — portalled to document.body so no parent overflow can clip it
export default function MouseTrailLogos({ logos }) {
  const nodes = logos.map((logo) => {
    const nearRight = logo.x > window.innerWidth - 120;
    const translateX = nearRight ? '-100%' : '-50%';
    return (
      <div
        key={logo.id}
        className="fixed pointer-events-none select-none"
        style={{
          left: logo.x,
          top: logo.y,
          transform: `translate(${translateX}, -50%) rotate(${logo.rotation}deg)`,
          animation: 'logoSpawn 2.5s ease-out forwards',
          borderRadius: '10px',
          background: logo.color,
          zIndex: 9999,
        }}
      >
        <img
          src={Logo}
          alt=""
          style={{ height: '96px', width: 'auto', display: 'block' }}
          draggable={false}
        />
      </div>
    );
  });

  return createPortal(nodes, document.body);
}
