import { useEffect, useState } from 'react';
import axios from 'axios';
import homepageData from './data/homepage.json';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertises from './components/Expertises';
import Work from './components/Work';
import Brands from './components/Brands';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(homepageData);

  useEffect(() => {
    axios
      .get('/api/homepage')
      .then((res) => setData(res.data))
      .catch(() => {});
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
