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

  // testing to make sure navSelection changes on navbar click
  console.log('app code: ' + navSelection);

  return (
    <div>
      <Header 
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />
      <main>
        {navSelection === "Portfolio" && <Portfolio />}
        {navSelection === "About" && <About />}
        {navSelection === "Resume" && <Resume />}
        {navSelection === "Contact" && <Contact />}
        {/* <Portfolio />
        <About />
        <Resume />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;