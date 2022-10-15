import React from 'react';
// import Header from './components/Header';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        {/* <Portfolio /> */}
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;