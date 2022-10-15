import React from 'react';
import Header from './components/Header';
// import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [navSelection, setNavSelection] = useState('Portfolio');

  return (
    <div>
      <Header 
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />
      <main>
        {/* <Portfolio /> */}
        <About />
        <Resume />
        <Contact />

        {/* {navSelection === Portfolio && <Portfolio />}
        {navSelection === About && <About />}
        {navSelection === Resume && <Resume />}
        {navSelection === Contact && <Contact />} */}
      </main>
      <Footer />
    </div>
  );
};

export default App;