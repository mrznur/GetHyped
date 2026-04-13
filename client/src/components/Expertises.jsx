const bgMap = {
  cream: 'bg-cream',
  pink:  'bg-pink',
  green: 'bg-hyped-green',
  blue:  'bg-hyped-blue',
};

export default function Expertises({ expertises }) {
  return (
    <section className="py-16 px-8" id="expertises">
      <div className="w-full flex flex-col gap-0">
        {expertises.map((item, i) => (
          <div
            key={item.number}
            className={`expertise-card ${bgMap[item.color]}`}
            style={{ top: `${80 + i * 20}px`, zIndex: i + 1 }}
          >
            {/* Header row */}
            <div className="flex justify-between items-start mb-1">
              <span className="px-3 py-1 text-xs font-medium bg-white/70 rounded-pill border border-black/[0.08]">
                Expertise
              </span>
              <span className="text-[96px] font-extrabold leading-[0.85] opacity-[0.18] tracking-[-2px]">
                {item.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-none tracking-[-2px] mb-auto">
              {item.title}
            </h3>

            {/* Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mt-auto pt-8">
              <div>
                <h4 className="text-lg font-bold mb-3">{item.subtitle}</h4>
                <p className="text-[15px] leading-relaxed mb-5 max-w-[420px] opacity-85">{item.description}</p>
                <a href={item.cta.href} className="btn-outline text-sm px-4 py-2">
                  <span>{item.cta.label}</span>
                  <span className="icon-circle !w-6 !h-6">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </a>
              </div>

              <div className="flex justify-end items-end">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={`expertise-img w-[300px] h-[360px] object-cover rounded-2xl border-[5px] ${item.color === 'cream' ? 'border-hyped-orange' : 'border-white'}`}
                  />
                ) : (
                  <div className="expertise-img w-[300px] h-[360px] rounded-2xl border-[5px] border-white bg-gradient-to-br from-[#1565C0] to-[#42A5F5]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
