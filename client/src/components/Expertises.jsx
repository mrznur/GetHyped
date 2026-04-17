import { useEffect, useRef, useState } from 'react';

const bgMap = {
  cream: 'bg-white',
  pink:  'bg-[#e7a9ff]',
  green: 'bg-[#3EB489]',
  blue:  'bg-[#2196F3]',
};

function useScrollProgress(wrapperRef, total) {
  const [step, setStep] = useState(0); // 0 to total-1, with decimals

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wrapperH = el.offsetHeight;
      const windowH = window.innerHeight;
      // 0 = top, total-1 = bottom
      const raw = (-rect.top / (wrapperH - windowH)) * (total - 1);
      setStep(Math.min(Math.max(raw, 0), total - 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [wrapperRef, total]);

  return step;
}

export default function Expertises({ expertises }) {
  const wrapperRef = useRef(null);
  const n = expertises.length;
  // Each card gets 1 unit of scroll: 0.5 standing still + 0.5 transition
  // Total wrapper height = n * 100vh (last card just stands)
  const step = useScrollProgress(wrapperRef, n);

  return (
    <section className="px-6" id="expertises">

      {/* ── MOBILE: sticky stack — each card sticks as you scroll past ── */}
      <div className="md:hidden flex flex-col gap-0">
        {expertises.map((item, i) => (
          <div
            key={item.number}
            style={{ position: 'sticky', top: `${60 + i * 12}px`, zIndex: i + 1 }}
          >
            <ExpertiseCard
              item={item}
              index={i}
              style={{ position: 'relative', borderRadius: '20px' }}
            />
          </div>
        ))}
      </div>

      {/* ── DESKTOP: scroll-driven animation ── */}
      <div ref={wrapperRef} className="hidden md:block" style={{ height: `${n * 100}vh` }}>
        <div className="sticky top-20" style={{ height: 'calc(100vh - 80px)' }}>
          {expertises.map((item, i) => {
            const entryT = Math.min(Math.max((step - (i - 0.5)) / 0.5, 0), 1);
            const exitT  = Math.min(Math.max((step - (i + 0.5)) / 0.5, 0), 1);

            const slideY = i === 0 ? 0 : entryT === 0 ? 100 : (1 - entryT) * 60;
            const scale  = i === n - 1 ? 1 : 1 - exitT * 0.08;
            const pushY  = i === n - 1 ? 0 : exitT * 30;
            const hasEntered = entryT > 0 || i === 0;
            const zIndex = hasEntered ? i + 1 : 0;

            return (
              <ExpertiseCard
                key={item.number}
                item={item}
                index={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'visible',
                  transform: `translateY(${slideY}%) scale(${scale}) translateY(${pushY}px)`,
                  zIndex,
                  transformOrigin: 'center center',
                  transition: 'transform 0.1s ease-out',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
}

function ExpertiseCard({ item, index, style }) {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div className={`expertise-card ${bgMap[item.color]}`} style={style}>
      {/* Header */}
      <div className="flex justify-between items-start mb-1">
        <span className={`px-2 lg:px-4 py-1.5  text-md lg:text-xl font-semibold rounded-lg border border-black/[0.08] ${item.color === 'cream' ? 'bg-[#f5f2eb]' : 'bg-white'}`}>
          Expertise
        </span>
        <span className="text-[48px] md:text-[64px] lg:text-[96px] font-extrabold leading-[0.85] opacity-[0.12] tracking-[-2px]">
          {item.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[48px] md:text-[64px] lg:text-[96px] font-semibold md:font-bold lg:font-extrabold leading-none tracking-[-2px] md:mt-4 mb-6">
        {item.title}
      </h3>

      {/* Mobile: image sits between title and text */}
      <div className="md:hidden my-[42px]">
        {item.image ? (
          <img src={item.image} alt={item.title} loading="lazy"
            className={`w-[180px] -rotate-[3deg] h-[240px] object-cover rounded-2xl border-[4px] ${item.color === 'cream' ? 'border-[#FF4D00]' : 'border-white'}`}
          />
        ) : (
          <div className={`w-[200px] h-[220px] rounded-2xl border-[4px] border-white bg-gradient-to-br from-[#1565C0] to-[#42A5F5]`} />
        )}
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end mt-auto pb-4">
        <div>
          <h4 className="text-xl md:text-3xl font-bold mb-7">{item.subtitle}</h4>
          <p className="text-[16px] md:text-[18px] mb-7 max-w-[420px] md:font-semibold sm:leading-5 inter">{item.description}</p>          <a
            href={item.cta.href}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className={`inline-flex items-center gap-3 md:gap-4 px-2 md:px-4 py-1 md:py-2 text-base md:text-lg font-semibold rounded-xl hover:-rotate-[4deg] hover:italic hover:ease-in-out transition-colors duration-300 ${index === 0 ? 'bg-[#FF4D00] text-white hover:bg-[#e04400]' : 'bg-white text-black hover:bg-black hover:text-white'}`}
          >
            <span>{item.cta.label}</span>
            <span
              className={`pointer-events-none inline-flex items-center justify-center w-[36px] h-[36px] rounded-lg ${index === 0 ? 'bg-white' : 'bg-black'}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={index === 0 ? 'black' : 'white'} strokeWidth="2.5">
                <line x1="-2" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </a>
        </div>
        <div className="hidden md:flex justify-end items-end pb-4 pr-4">
          {item.image ? (
            <img src={item.image} alt={item.title} loading="lazy"
              className={`expertise-img w-[300px] h-[360px] object-cover rounded-2xl border-[5px] ${item.color === 'cream' ? 'border-[#FF4D00]' : 'border-white'}`}
            />
          ) : (
            <div className="expertise-img w-[300px] h-[360px] rounded-2xl border-[5px] border-white bg-gradient-to-br from-[#1565C0] to-[#42A5F5]" />
          )}
        </div>
      </div>
    </div>
  );
}
