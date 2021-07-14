import React from 'react';
import config from 'react-reveal/globals';

// Styles:
import './styles/normalize.css';
import './styles/main_styles.css';

// Components:
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (

    <div className='wrapper'>

      <Menu />
      <Home />
      <About />
      <Skills />
      <HireMe />
      <Contact />
      <Footer />

    </div>

  );
}

config({ ssrFadeout: true });
export default App;
