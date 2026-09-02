import './index.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Industries } from './components/sections/Industries';
import { WhatWeBuild } from './components/sections/WhatWeBuild';
import { Process } from './components/sections/Process';
import { SelectedWork } from './components/sections/SelectedWork';
import { Technology } from './components/sections/Technology';
import { About } from './components/sections/About';
import { CtaBanner } from './components/sections/CtaBanner';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Industries />
        <WhatWeBuild />
        <Process />
        <SelectedWork />
        <Technology />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
