// General Imports:
import React, { useEffect } from 'react';
import Aos from 'aos';

// Styles:
import '../styles/About.css';
import '../styles/animation.css';
import 'aos/dist/aos.css';

const About = () => {

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])

    return (
        //General Container:
        <section className='about_container'>

            {/* About Container: */}
            <div className='about'>

                {/* About Info: */}
                <div className='about_info' data-aos='fade-up' >
                    <h2 className='about_tittle' data-aos='fade-right'>About Me</h2>
                    <hr className='about_tittle_line' data-aos='fade-left' />
                    <p className='about_text01'>I´m Fernando Ventura Front End Developer from México</p>
                    <p className='about_text02'>Using the most up-to-date technology, I turn ideas into websites and applications with an elegant design and a better user experience.
                        When I'm not coding I'm learning to keep improving my work day by day.</p>
                    <a href='https://drive.google.com/uc?export=download&id=17lgvw6H8tetiexVNRKJ2EQFM2Lc9z5rv' className='about_download_link' >Download CV</a>
                </div>

                {/* About Photo: */}
                <div className='about_photo' data-aos='fade-left'></div>

            </div>
        </section>
    );
}

export default About;