import { useState } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

const cardConfig = {
  bullit:      { border: 'border-[#FF4D00]', img: '/work-bullit.png',  hoverTilt: '-rotate-[2deg]' },
  roasta:      { border: 'border-[#2196F3]', img: '/work-roasta.png',  hoverTilt: 'rotate-[1.5deg]' },
  'loco-loco': { border: 'border-[#3EB489]', img: '/work-loco.png',    hoverTilt: '-rotate-[1.5deg]' },
};

const accentHex = {
  bullit:      '#FF4D00',
  roasta:      '#2196F3',
  'loco-loco': '#3EB489',
};

// Desktop stagger constants
const CARD_H  = 600;
const STAGGER = 100;
const CONTAINER_H = CARD_H + STAGGER * 2;

function WorkCard({ c, compact = false }) {
  const [hovered, setHovered] = useState(false);
  const cfg = cardConfig[c.slug] || { border: 'border-black', img: '' };

  return (
    <a
      href={c.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative rounded-[24px] overflow-hidden block w-full h-full
        border-[6px] lg:border-[8px] ${cfg.border}
        transition-transform duration-300 ease-out
        ${hovered ? cfg.hoverTilt : ''}
      `}
    >
      <div className="w-full h-full overflow-hidden">
        {cfg.img
          ? <img src={cfg.img} alt={c.client} className="w-full h-full object-cover" />
          : <div className="w-full h-full bg-gray-300" />
        }
      </div>

      {/* Trapezium overlay */}
      <div
        className="absolute"
        style={{
          bottom: '5px', left: '5px', right: '5px',
          height: compact ? '50%' : '44%',
        }}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path
            d="M 3,32 Q 3,26 12,24 L 88,5 Q 98,4 98,18 L 98,87 Q 98,96 92,96 L 8,96 Q 3,96 3,88 Z"
            fill={accentHex[c.slug] || '#000'}
          />
        </svg>
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          <div className="flex justify-end">
            <div className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-white flex items-center justify-center shadow-md`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.2">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </div>
          <div className=''>
            <h3 className={`text-white font-bold ${compact ? '': 'text-[19px] md:text-[26px] ml-3'} leading-snug mb-2`}>{c.title}</h3>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-white/25 rounded-lg lg:ml-3 mb-2">
              {c.client}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Work({ work }) {
  const h = useScrollFade();
  const offsets = [STAGGER * 2, STAGGER * 1, 0];

  return (
    <section className="py-16 md:py-24 bg-bg px-8" id="work">
      <div className="w-full">

        {/* Header */}
        <div ref={h} className="lg:m-20 fade-in mb-10 md:mb-14">
          <h2 className="text-[50px] md:text-[74px] lg:text-[clamp(36px,6vw,112px)] font-bold md:font-bold lg:font-extrabold leading-[50px] md:leading-[70px] lg:leading-[100px] tracking-[-1px] md:max-w-[400px] lg:max-w-[680px] mb-3 md:mb-4">
            {work.heading}
          </h2>
          <p className="text-[20px] md:text-[26px] leading-7 max-w-[480px] mb-5 md:mb-6 text-black font-semibold font-sans">
            {work.subheading}
          </p>
          <a href={work.cta.href} className="btn-outline">
            <span>{work.cta.label}</span>
            <span className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </a>
        </div>

        {/* ── DESKTOP (lg+): staggered layout ── */}
        <div className="lg:-mt-24 hidden lg:flex justify-center gap-12" style={{ height: `${CONTAINER_H}px` }}>
          {work.cases.map((c, i) => (
            <div key={c.slug} style={{ width: '26%', height: `${CARD_H}px`, marginTop: `${offsets[i]}px` }}>
              <WorkCard c={c} />
            </div>
          ))}
        </div>

        {/* ── TABLET (md): 3 equal cards grid ── */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-5" style={{ height: '420px' }}>
          {work.cases.map((c) => (
            <WorkCard key={c.slug} c={c} compact />
          ))}
        </div>

        {/* ── MOBILE: 1 card per row, stacked ── */}
        <div className="flex flex-col md:hidden gap-5">
          {work.cases.map((c) => (
            <div key={c.slug} style={{ height: '400px' }}>
              <WorkCard key={c.slug} c={c} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
