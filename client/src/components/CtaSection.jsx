import { useScrollFade } from '../hooks/useScrollFade';
import MouseTrailLogos, { useMouseTrail } from './MouseTrail';

export default function CtaSection({ cta }) {
  const h = useScrollFade();
  const b = useScrollFade(120);
  const { logos, onMouseMove } = useMouseTrail();

  return (
    <section
      className="relative py-20 pb-0 text-center bg-bg px-8 overflow-hidden hidden md:block"
      id="cta"
      onMouseMove={onMouseMove}
    >
      {/* Logos render here — inside section, above everything */}
      <MouseTrailLogos logos={logos} />

      <div className="relative z-[10000] w-full">
        <h2 ref={h} className="fade-in text-[clamp(36px,7vw,80px)] font-extrabold leading-tight tracking-[-2px] mb-9">
          {cta.heading}
        </h2>
        <div ref={b} className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a href={cta.email.href} className="btn-outline hover:rotate-3">
            <span>{cta.email.label}</span>
            <span className="icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
              </svg>
            </span>
          </a>
          <a href={cta.primary.href} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF4D00] border-2 border-[#FF4D00] rounded-xl text-xl font-semibold text-white transition-all duration-300 hover:-rotate-3">
            <span>{cta.primary.label}</span>
            <span className="fire-circle">🔥</span>
          </a>
        </div>
      </div>

    </section>
  );
}
