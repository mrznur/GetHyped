import { useScrollFade } from '../hooks/useScrollFade';

// Card accent colors matching the screenshot
const accentColor = {
  bullit:     'bg-[#FF4D00]',   // orange-red
  roasta:     'bg-[#2196F3]',   // blue
  'loco-loco':'bg-[#3EB489]',   // green
};

const borderColor = {
  bullit:     'border-[#FF4D00]',
  roasta:     'border-[#2196F3]',
  'loco-loco':'border-[#3EB489]',
};

// Placeholder bg when no real image
const placeholderBg = {
  bullit:     'bg-[#c0392b]',
  roasta:     'bg-[#bdc3c7]',
  'loco-loco':'bg-[#27ae60]',
};

export default function Work({ work }) {
  const h = useScrollFade();

  return (
    <section className="py-24 bg-bg px-8" id="work">
      <div className="w-full">

        {/* Header */}
        <div ref={h} className="fade-in mb-14">
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-extrabold leading-tight tracking-[-1px] mb-4">
            {work.heading}
          </h2>
          <p className="text-[17px] leading-relaxed max-w-[520px] mb-6 text-black/60">
            {work.subheading}
          </p>
          <a href={work.cta.href} className="btn-outline">
            <span>{work.cta.label}</span>
            <span className="icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {work.cases.map((c, i) => (
            <a
              key={c.slug}
              href={c.href}
              className={`
                group relative rounded-[20px] overflow-hidden
                border-[3px] ${borderColor[c.slug] || 'border-gray-300'}
                transition-transform duration-300 ease-out
                hover:-translate-y-2
              `}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Photo fills card */}
              <div className={`w-full aspect-[3/4] ${placeholderBg[c.slug] || 'bg-gray-400'}`}>
                {/* Real images would go here as <img> */}
              </div>

              {/* Colored info overlay — bottom of card */}
              <div className={`absolute bottom-0 left-0 right-0 ${accentColor[c.slug] || 'bg-black'} p-5 rounded-b-[17px]`}>
                {/* Arrow icon top-right */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>

                <h3 className="text-white font-bold text-[17px] leading-snug mb-3 pr-8">
                  {c.title}
                </h3>

                {/* Client pill */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white border border-white/40 rounded-full">
                  {c.client}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
