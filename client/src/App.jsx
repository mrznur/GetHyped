import { useState } from "react";
import homepageData from "./data/homepage.json";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertises from "./components/Expertises";
import Work from "./components/Work";
import Brands from "./components/Brands";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  const [data] = useState(homepageData);

  return (
    <>
      <div className="mt-5 mb-0">
        <Header nav={data.nav} />
        {/* Global layout */}
        <div>
          <main>
            <Hero hero={data.hero} />
            <About about={data.about} />
            <Expertises expertises={data.expertises} />
            <Work work={data.work} />
            <Brands brands={data.brands} />
            <CtaSection cta={data.cta} />
          </main>
          <Footer footer={data.footer} />
        </div>
      </div>
    </>
  );
}

export default App;
