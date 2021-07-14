// General Imports:
import React, { useState, useEffect } from 'react';

// Styles:
import '../styles/Home.css';

const Home = () => {

  // Parallax Effect:
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [])


  return (

    // Header Home Parallax Container:
    <section className='home_container'>

        <img src='./images/Sky.png' alt='' className='sky' />

        <img src='./images/Planet1.png' alt='' className='planet1'
          style={{ transform: `translateY(${offset * 0.8}px )` }} />

        <h2 className='header_text' style={{ transform: `translateY(${offset * 0.4}px )` }} >
          Hello! Welcome to my Space</h2>

        <img src='images/Planet2.png' alt='' className='planet2'
          style={{ transform: `translateY(${offset * 0.5}px )` }} />

        <img src='images/Mountain.png' alt='' className='mountain'
          style={{ transform: `translateY(${offset * 0.4}px )` }} />

        <img src='images/Clouds.png' alt='' className='clouds'
          style={{ transform: `translateY(${offset * 0.25}px )` }} />

    </section>
  );
}

export default Home;