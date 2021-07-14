// General Imports:
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


// Styles:
import '../styles/Menu.css'

const Menu = () => {

    // ========================================

    // Menu Background - Scroll Color Change Function:
    const [navMenu, setNavMenu] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 800) {
            setNavMenu(true);
        } else {
            setNavMenu(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    // Responsive Menu:
    const [ShowMenu, SetShowMenu] = useState(false);

    let menu =

        <ul className={ShowMenu ? 'menu_container_active' : 'menu_container_hide'}>

            <li className='menu_container_li'>
                <Link to='home_container'
                    className='menu_container_link'
                    smooth={true} duration={1000}>
                    Home
                </Link>
            </li>

            <li className='menu_container_li'>
                <Link to='about_container'
                    className='menu_container_link'
                    smooth={true} duration={1000}>
                    About
                </Link>
            </li>

            <li className='menu_container_li'>
                <Link to='skills_container'
                    className='menu_container_link'
                    smooth={true} duration={1000}>
                    Skills
                </Link>
            </li>

            <li className='menu_container_li'>
                <Link to='contact_container'
                    className='menu_container_link'
                    smooth={true} duration={1000}>
                    Contact
                </Link>
            </li>

        </ul>

    // ========================================

    return (

        // Nav Menu:
        <nav className={navMenu ? 'main_menu_active' : 'main_menu'}>

            {/* Menu Icon Logo */}
            <i className='menu_logo'>FvC</i>

            {/* Responsive Icon Menu */}
            <FontAwesomeIcon icon={faBars} onClick={() => SetShowMenu(!ShowMenu)} className='menu_responsive_icon' />
            {menu}

            {/* Nav Menu Container */}
            <ul className='menu_container' >

                <li>
                    <Link to='home_container'
                        className='menu_container_link'
                        smooth={true}
                        duration={1000}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='about'
                        className='menu_container_link'
                        smooth={true} duration={1000}>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='skills_container'
                        className='menu_container_link'
                        smooth={true} duration={1000}>
                        Skills
                    </Link>
                </li>

                <li>
                    <Link to='contact_container'
                        className='menu_container_link'
                        smooth={true} duration={1000}>
                        Contact
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default Menu;