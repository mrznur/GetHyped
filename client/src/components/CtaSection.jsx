import { useScrollFade } from '../hooks/useScrollFade';

export default function CtaSection({ cta }) {
  const h = useScrollFade();
  const b = useScrollFade(120);

  return (
    <section className="relative py-20 pb-32 text-center bg-bg px-8" id="cta">
      <div className="w-full">
        <h2 ref={h} className="fade-in text-[clamp(36px,6vw,72px)] font-extrabold leading-tight tracking-[-2px] mb-9">
          {cta.heading}
        </h2>
        <div ref={b} className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a href={cta.email.href} className="btn-outline">
            <span>{cta.email.label}</span>
            <span className="icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
              </svg>
            </span>
          </a>
          <a href={cta.primary.href} className="btn-cta">
            <span>{cta.primary.label}</span>
            <span className="fire-circle">🔥</span>
          </a>
        </div>
      </div>

      {/* Spinning badge */}
      <div className="absolute right-[8%] bottom-5 w-[110px] h-[110px]">
        <div className="spin-badge relative w-full h-full bg-pink rounded-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path id="cp" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
            </defs>
            <text>
              <textPath href="#cp" fontSize="8.5" fill="#000" fontWeight="600" letterSpacing="1">
                GET RESULTS • GET HYPED • GET NOTICED •
              </textPath>
            </text>
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black">GH</span>
        </div>
      </div>
    </section>
  );
}
