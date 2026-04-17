import { useScrollFade } from '../hooks/useScrollFade';
import Social from "../../src/assets/social.jpg";

export default function About({ about }) {
  const h = useScrollFade();
  const c = useScrollFade(120);

  return (
    <section className="pt-[100px] md:pt-[300px] pb-16 md:pb-24 bg-bg px-8" id="about">

      {/* Heading */}
      <h2
        ref={h}
        className="lg:ml-[120px] lg:max-w-[1300px] fade-in font-semibold leading-[1.05] tracking-[-1.25px] md:tracking-[-3px] md:mb-14 text-left"
        style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
      >
        {about.heading}
      </h2>

      {/* Mobile video card — below heading */}
      <div className="my-10 w-[330px] md:hidden rounded-[20px] overflow-hidden h-[400px] justify-center" style={{ transform: 'rotate(3deg)' }}>
        <video
          src="/petrolhead-loop.mp4"
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3-col grid */}
      <div ref={c} className="md:my-20 fade-in grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 items-stretch justify-items-center">

        {/* Col 1 — Portrait image (desktop only) */}
        <div className="rounded-2xl overflow-hidden justify-self-start hidden md:block md:col-span-1">
          <img
            src={Social}
            alt="Get Hyped team"
            className="w-full md:h-[320px] lg:h-[460px] object-cover"
          />
        </div>

        {/* Col 2 — Body text + CTA */}
        <div className="md:col-span-2 md:pl-8">
          <p className="lg:mt-20 text-[20px] md:text-[25px] lg:text-[28px] leading-[1.19] mb-8 font-semibold">{about.body}</p>
          <a
            href={about.cta.href}
            className="inline-flex items-center gap-3 px-3 py-2 border border-black rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:bg-black hover:text-white group"
          >
            <span>{about.cta.label}</span>
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-black text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="2" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Col 3 — Down arrow (desktop only, bottom right) */}
        <div className="hidden md:flex justify-end items-end w-full h-full self-end md:col-span-1">
          <a
            href="#expertises"
            className="flex items-center justify-center w-14 h-14 rounded-xl border border-black/50 text-[#FF4D00] hover:bg-black hover:text-white transition-all duration-300"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
