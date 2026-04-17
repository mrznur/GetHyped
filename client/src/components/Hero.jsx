import { useState } from "react";

const colorMap = {
  blue: "bg-[#2196F3]",
  green: "bg-[#3EB489]",
};

const tilts = [-6, 4, -3, 5];

export default function Hero({ hero }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Desktop (lg+): stat, video, stat, video
  const desktopCards = [
    { type: "stat",  stat: hero.stats[0], color: hero.stats[0].color, tilt: tilts[0] },
    { type: "video", src: "/loop-salontopper.mp4",  tilt: tilts[1] },
    { type: "stat",  stat: hero.stats[1], color: hero.stats[1].color, tilt: tilts[2] },
    { type: "video", src: "/petrolhead-loop.mp4",   tilt: tilts[3] },
  ];

  // Tablet (md): stat, video, stat
  const tabletCards = [
    { type: "stat",  stat: hero.stats[0], color: hero.stats[0].color, tilt: tilts[0] },
    { type: "video", src: "/loop-salontopper.mp4",  tilt: tilts[1] },
    { type: "stat",  stat: hero.stats[1], color: hero.stats[1].color, tilt: tilts[2] },
  ];

  // Mobile: stat + video
  const mobileCards = [
    { type: "stat",  stat: hero.stats[0], color: hero.stats[0].color, tilt: tilts[0] },
    { type: "video", src: "/loop-salontopper.mp4",  tilt: tilts[1] },
  ];

  const getTransform = (i, tilt) => {
    if (hoveredIndex === null) return `rotate(${tilt}deg)`;
    if (i === hoveredIndex) return "rotate(0deg) scale(1.05)";
    const dir = i < hoveredIndex ? -1 : 1;
    return `rotate(${tilt}deg) translateX(${dir * 3}px)`;
  };

  const renderContent = (card, size = "desktop") => {
    if (card.type === "stat") {
      const isSmall = size === "mobile";
      const isMd    = size === "tablet";
      return (
        <>
          <span className={`font-bold leading-none text-black ${
            isSmall ? "text-[48px]" : isMd ? "text-[56px]" : "text-[clamp(64px,6vw,88px)]"
          }`}>
            {card.stat.value}
          </span>
          <div className="mt-auto">
            <span className={`block font-bold text-black leading-tight ${
              isSmall ? "text-[15px]" : isMd ? "text-[18px]" : "text-[24px]"
            }`}>
              {card.stat.label}
            </span>
            <div className="w-full h-px bg-black my-1" />
            <span className={`block text-black ${
              isSmall ? "text-[12px]" : isMd ? "text-[14px]" : "text-[18px]"
            }`}>
              {card.stat.sub}
            </span>
          </div>
        </>
      );
    }
    return (
      <video
        src={card.src}
        autoPlay muted loop playsInline
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <section className="bg-bg pt-24" id="hero">

      {/* ── DESKTOP (lg+) ── */}
      <div className="mt-10 hidden lg:block">
        <div className="px-8 mb-6">
          <h1 className="text-[clamp(54px,7vw,116px)] font-semibold leading-[1.02] tracking-[-3px] max-w-[1200px] mb-4 text-left">
            {hero.title}
          </h1>
          <p className="text-[clamp(16px,2vw,26px)] font-semibold leading-snug text-left max-w-[460px]">
            {hero.subtitle}
          </p>
        </div>
        <div className="relative h-[420px] overflow-visible mt-16">
          <div className="flex absolute top-0 left-0 right-0 h-[580px] justify-center">
            {desktopCards.map((card, i) => (
              <div
                key={i}
                className={`w-[23%] shrink-0 rounded-[24px] overflow-hidden ${
                  card.type === "stat" ? `${colorMap[card.color]} p-6 flex flex-col` : ""
                }`}
                style={{
                  transform: hoveredIndex === i ? "rotate(0deg)" : `rotate(${card.tilt}deg)`,
                  marginLeft:  hoveredIndex !== null && i > hoveredIndex ? "40px" : "0px",
                  marginRight: hoveredIndex !== null && i < hoveredIndex ? "40px" : "0px",
                  zIndex: hoveredIndex === i ? 10 : 1,
                  transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), margin 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {renderContent(card, "desktop")}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TABLET (md only) ── */}
      <div className="hidden md:block lg:hidden">
        <div className="px-8 mb-6">
          <h1 className="text-[clamp(58px,8.5vw,104px)] font-semibold leading-[1.03] tracking-[-2px] max-w-[900px] mb-4 text-left">
            {hero.title}
          </h1>
          <p className="text-[clamp(18px,2.7vw,28px)] font-semibold leading-snug text-left max-w-[400px]">
            {hero.subtitle}
          </p>
        </div>
        <div className="relative h-[340px] overflow-visible mt-12">
          <div className="flex gap-4 absolute top-0 left-4 right-4 h-[420px]">
            {tabletCards.map((card, i) => (
              <div
                key={i}
                className={`flex-1 rounded-[20px] overflow-hidden ${
                  card.type === "stat" ? `${colorMap[card.color]} p-5 flex flex-col` : ""
                }`}
                style={{
                  transform: `rotate(${card.tilt}deg)`,
                  transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${card.tilt}deg)`)}
              >
                {renderContent(card, "tablet")}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden px-8 my-5">
        <h1 className="text-[56px] w-[330px] font-semibold leading-[0.94] tracking-[-1px] mb-3 text-left">
          {hero.title}
        </h1>
        <p className="w-[320px] text-[22px] font-semibold text-black leading-[1.3] mb-6 text-left">
          {hero.subtitle}
        </p>
        <div className="relative h-[260px] overflow-visible">
          <div className="flex gap-3 absolute top-0 left-0 right-0">
            {mobileCards.map((card, i) => (
              <div
                key={i}
                className={`flex-1 min-w-0 rounded-[18px] h-[320px] ${
                  card.type === "stat" ? `${colorMap[card.color]} p-4 flex flex-col` : "overflow-hidden"
                }`}
                style={{
                  transform: getTransform(i, card.tilt),
                  transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {renderContent(card, "mobile")}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
