import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // set default state of nav selection to About and track changes
  const [navSelection, setNavSelection] = useState('About');

  return (
    <div className='container'>
      <Header 
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />
      <main>
        {navSelection === "Portfolio" && <Portfolio />}
        {navSelection === "About" && <About />}
        {navSelection === "Resume" && <Resume />}
        {navSelection === "Contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;