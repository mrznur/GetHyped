import { useScrollFade } from '../hooks/useScrollFade';

export default function About({ about }) {
  const h = useScrollFade();
  const c = useScrollFade(120);

  return (
    <section className="pt-[180px] md:pt-[320px] pb-24 bg-bg px-8" id="about">
      <div className="w-full">

        {/* Heading */}
        <h2 ref={h} className="fade-in text-[clamp(28px,4.5vw,54px)] font-bold leading-[1.15] tracking-[-1.5px] max-w-[900px] mb-8">
          {about.heading}
        </h2>

        {/* 3rd hero card — only on mobile, sits below the heading */}
        <div className="md:hidden mb-8 rounded-[20px] overflow-hidden h-[260px]">
          <video
            src="/petrolhead-loop.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content grid */}
        <div ref={c} className="fade-in grid grid-cols-1 md:grid-cols-[240px_1fr_auto] gap-10 items-start">
          {/* Image — desktop only */}
          <div className="hidden md:block rounded-2xl overflow-hidden">
            <img src={about.image} alt="Get Hyped team" className="w-full h-[280px] object-cover rounded-2xl" />
          </div>

          {/* Text */}
          <div className="max-w-[480px]">
            <p className="text-[17px] font-medium leading-relaxed mb-6">{about.body}</p>
            <a href={about.cta.href} className="btn-outline">
              <span>{about.cta.label}</span>
              <span className="icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Scroll arrow — desktop only */}
          <div className="hidden md:flex items-end pb-2">
            <a href="#expertises" className="flex items-center justify-center w-11 h-11 rounded-full border border-black text-[#FF4D00] hover:bg-black hover:text-white transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
