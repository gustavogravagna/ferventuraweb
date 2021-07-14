// General Imports:
import React from 'react';

// Styles:
import '../styles/Footer.css';
import '../styles/animation.css'

const Footer = () => {
    return (

        // General Container:
        <footer className='footer'>


            {/* Footer Top Text */}
            <h5 className='footer_text'>Follow Me</h5>

            {/* Footer Icons */}
            <div className='footer_icon_container'>
                <a href='https://www.instagram.com/fer_azaf'>
                    <img src='./images/svg/instagram.svg' alt='' className='footer_social' />
                </a>
                <a href='https://www.linkedin.com/in/fernando-ventura-c'>
                    <img src='./images/svg/linkedin.svg' alt='' className='footer_social' />
                </a>
                <a href='https://github.com/FerVenc'>
                    <img src='./images/svg/github.svg' alt='' className='footer_social' />
                </a>
            </div>

            {/* Footer Copy Right */}
            <div className='footer_cr'>
                <p>Copyright &copy; 2021</p>
                <p className='footer_cr_name'>Fernando Ventura.</p>
            </div>


        </footer>

    );
}

export default Footer;