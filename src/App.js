import React from 'react';

import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header>
        <Nav />
      </Header> */}
      <main>
        {/* <About />
        <Portfolio /> */}
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;