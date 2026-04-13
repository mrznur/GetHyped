import { useState } from 'react';

const colorMap = {
  blue:  'bg-[#2196F3]',
  green: 'bg-[#3EB489]',
};

const tilts = [-6, 4, -3, 5];

export default function Hero({ hero }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Desktop: stat, video, stat, video
  const desktopCards = [
    { type: 'stat',  stat: hero.stats[0], color: hero.stats[0].color, tilt: tilts[0] },
    { type: 'video', src: '/loop-salontopper.mp4',  tilt: tilts[1] },
    { type: 'stat',  stat: hero.stats[1], color: hero.stats[1].color, tilt: tilts[2] },
    { type: 'video', src: '/petrolhead-loop.mp4',   tilt: tilts[3] },
  ];

  // Mobile: stat, video, stat — 3 cards
  const mobileCards = [
    { type: 'stat',  stat: hero.stats[0], color: hero.stats[0].color, tilt: tilts[0] },
    { type: 'video', src: '/loop-salontopper.mp4',  tilt: tilts[1] },
    { type: 'stat',  stat: hero.stats[1], color: hero.stats[1].color, tilt: tilts[2] },
  ];

  const getTransform = (i, tilt) => {
    if (hoveredIndex === null) return `rotate(${tilt}deg)`;
    if (i === hoveredIndex) return 'rotate(0deg) scale(1.03)';
    const dir = i < hoveredIndex ? -1 : 1;
    return `rotate(${tilt}deg) translateX(${dir * 3}px)`;
  };

  const renderContent = (card) => {
    if (card.type === 'stat') {
      return (
        <>
          <span className="text-[clamp(48px,5vw,80px)] font-black leading-none text-black">
            {card.stat.value}
          </span>
          <div className="mt-auto">
            <div className="w-full h-px bg-black/25 mb-2" />
            <span className="block text-[14px] font-bold text-black leading-tight">{card.stat.label}</span>
            <span className="block text-[11px] text-black/60 mt-1">{card.stat.sub}</span>
          </div>
        </>
      );
    }
    return (
      <video
        src={card.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <section className="bg-bg pt-20 mt-10 lg:mt-20" id="hero">

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
        <div className="px-8 mb-8">
          <h1 className="text-[clamp(54px,7vw,116px)] font-semibold leading-[1.02] tracking-[-3px] max-w-[1200px] mb-5 text-left">
            {hero.title}
          </h1>
          <p className="text-[clamp(30px,1.5vw,20px)] font-semibold leading-snug text-left max-w-[460px]">
            {hero.subtitle}
          </p>
        </div>

        {/* Cards bleed below — container clips vertically */}
        <div className="relative h-[400px] overflow-visible">
          <div className="flex absolute top-0 left-8 right-8 h-[600px]">
            {desktopCards.map((card, i) => (
              <div
                key={i}
                className="flex-1 min-w-0"
                style={{
                  transform: (() => {
                    if (hoveredIndex === null) return `rotate(${card.tilt}deg)`;
                    if (i === hoveredIndex) return 'rotate(0deg)';
                    // push neighbours away from hovered card
                    const dist = i < hoveredIndex ? -18 : 18;
                    return `rotate(${card.tilt}deg) translateX(${dist}px)`;
                  })(),
                  transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                  zIndex: hoveredIndex === i ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-full h-full rounded-[24px] overflow-hidden ${
                  card.type === 'stat' ? `${colorMap[card.color]} p-6 flex flex-col` : ''
                }`}>
                  {renderContent(card)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden px-8">
        <h1 className="text-[40px] font-black leading-[1.02] tracking-[-2px] mb-3 text-left">
          {hero.title}
        </h1>
        <p className="text-[15px] font-medium text-black leading-snug mb-6 text-left">
          {hero.subtitle}
        </p>

        {/* 3 cards — bleed below */}
        <div className="relative h-[220px] overflow-visible">
          <div className="flex gap-2 absolute top-0 left-0 right-0">
            {mobileCards.map((card, i) => (
              <div
                key={i}
                className={`
                  flex-1 min-w-0 rounded-[18px] h-[360px]
                  ${card.type === 'stat' ? `${colorMap[card.color]} p-4 flex flex-col` : 'overflow-hidden'}
                `}
                style={{
                  transform: getTransform(i, card.tilt),
                  transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {renderContent(card)}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
