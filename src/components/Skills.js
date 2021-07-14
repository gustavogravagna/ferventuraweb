// General Imports:
import React, { useEffect } from 'react';
import Aos from 'aos';

// Styles:
import '../styles/Skills.css';
import '../styles/animation.css';
import 'aos/dist/aos.css';

const Skills = () => {

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])

    return (

        // General Container:
        <div className='skills_container'>

            {/* Skills Tittle */}
            <h2 className='skills_tittle' data-aos='fade-right'>Skills</h2>
            <hr className='skills_tittle_line' data-aos='fade-left' />


            {/* Skill Project Container */}
            <div className='skills_project' data-aos='zoom-out' >
                <a href='https://fervenc.github.io/Todo-List/' className='skills_project_container'>Click Me</a>
            </div>

            {/* Skills Buttons Container */}
            <div className='skills_buttons_container'>

                <div className='skills_icon_container' data-aos='zoom-out'>
                    <div className='skills_icon'>
                        <img src='./images/svg/html.svg' alt='' className='skills_icon_html' />
                    </div>
                    <h5 className='skills_icon_name'>HTML</h5>
                </div>


                <div className='skills_icon_container' data-aos='zoom-in'>
                    <div className='skills_icon'>
                        <img src='./images/svg/css.svg' alt='' className='skills_icon_css' />
                    </div>
                    <h5 className='skills_icon_name'>CSS</h5>
                </div>


                <div className='skills_icon_container' data-aos='zoom-out'>
                    <div className='skills_icon'>
                        <img src='./images/svg/js.svg' alt='' className='skills_icon_js' />
                    </div>
                    <h5 className='skills_icon_name'>JavaScript</h5>
                </div>


                <div className='skills_icon_container' data-aos='zoom-in'>
                    <div className='skills_icon'>
                        <img src='./images/svg/react.svg' alt='' className='skills_icon_react' />
                    </div>
                    <h5 className='skills_icon_name'>React</h5>
                </div>



                <div className='skills_icon_container' data-aos='zoom-out'>
                    <div className='skills_icon'>
                        <img src='./images/svg/npm.svg' alt='' className='skills_icon_npm' />
                    </div>
                    <h5 className='skills_icon_name'>NPM</h5>
                </div>


            </div>

        </div>
    );
}

export default Skills;