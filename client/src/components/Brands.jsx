import { useState } from "react";

const brandLogos = [
  "/brand-1.png",
  "/brand-2.png",
  "/brand-3.png",
  "/brand-4.png",
  "/brand-5.png",
  "/brand-6.png",
  "/brand-7.png",
];

export default function Brands({ brands }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Triple for seamless loop — animation moves -33.33%
  const items = [...brandLogos, ...brandLogos, ...brandLogos];

  const getTransform = (i) => {
    const realIndex = i % brandLogos.length;
    const hoveredReal =
      hoveredIndex !== null ? hoveredIndex % brandLogos.length : null;

    if (hoveredReal === null) return "rotate(0deg)";
    if (realIndex === hoveredReal) return "rotate(-6deg) scale(1.05)";
    const dist = realIndex - hoveredReal;
    if (Math.abs(dist) === 1) return `translateX(${dist * 8}px)`;
    return "rotate(0deg)";
  };

  return (
    <section className="md:py-20 bg-bg" id="brands">
      <div className="px-8 mb-12 lg:mx-5 md:max-w-[700px]">
        <h2 className="text-[36px] md:text-[56px] lg:text-[84px] font-semibold  tracking-[-2px] md:tracking-tighter leading-[40px] md:leading-[80px]">
          {brands.heading}
        </h2>
      </div>

      {/* Infinite carousel */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-1 md:gap-4"
          style={{
            width: "max-content",
            animation: "ticker 15s linear infinite",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl overflow-hidden cursor-pointer w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]"
              style={{
                transform: getTransform(i),
                transition: "transform 0.3s ease",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={src}
                alt={`Brand ${(i % brandLogos.length) + 1}`}
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  imageRendering: "auto",
                  WebkitFontSmoothing: "antialiased",
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div>
          <hr className="mx-10 mt-20 border-black/25 px-8" />
        </div>
      </div>
    </section>
  );
}
