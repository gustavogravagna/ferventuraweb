//  General Imports:
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import Aos from 'aos';

// Styles:
import '../styles/HireMe.css';
import '../styles/animation.css';

const HireMe = () => {

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])

    return (

        // HireMe Section Container:
        <div className='hireme'>

            {/* HireMe General Info */}
            <div className='hireme_container' data-aos='fade-up'>
                <h2 className='hireme_tittle'>Do you have a project in mind?</h2>
                <hr className='hireme_tittle_line' />
                <Link to='contact_container'
                    className='hireme_button'
                    smooth={true} duration={1000}>Hire Me</Link>
            </div>

        </div>

    );
}

export default HireMe;
