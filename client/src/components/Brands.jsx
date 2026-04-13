export default function Brands({ brands }) {
  const items = [...brands.items, ...brands.items];
  return (
    <section className="py-20 bg-bg px-8" id="brands">
      <div className="w-full">
        <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-center mb-12 tracking-[-1px]">
          {brands.heading}
        </h2>
      </div>
      <div className="brands-ticker">
        <div className="brands-track">
          {items.map((name, i) => (
            <div key={i} className="brand-pill">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
