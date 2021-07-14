// General Imports:
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faMailBulk, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

// Styles:
import '../styles/Contact.css';
import '../styles/animation.css';

const Contact = () => {

    // Send Email:
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio_emailservice', e.target, 'user_IwUaX7a2WoY2b2r204CXT')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    // Scroll Animation:
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease'
        });
    }, [])


    return (

        // General Container:
        <section className='contact_container'>

            {/* Contact Tittle */}
            <h2 className='contact_tittle' data-aos='fade-right'>Contact Me</h2>
            <hr className='contact_tittle_line' data-aos='fade-left' />

            {/* Contact Form Container */}
            <div className='contact_form_container'>
                <div className='contact_info' data-aos='fade-up'>
                    <h4 className='contact_info_tittle'>Contact Info</h4>
                    <div className='contact_info_info'>
                        <FontAwesomeIcon icon={faMapPin} className='contact_info_icon' />
                        <h6>Mérida, Yucatán, México</h6>
                    </div>
                    <div className='contact_info_info'>
                        <FontAwesomeIcon icon={faMailBulk} className='contact_info_icon' />
                        <h6>fevek1989@gmail.com</h6>
                    </div>
                    <div className='contact_info_info'>
                        <FontAwesomeIcon icon={faPhoneVolume} className='contact_info_icon' />
                        <h6>+52 9993542161</h6>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={sendEmail} className="contact_form" data-aos='zoom-out'>

                    <label className='contact_form_label'>Name</label>
                    <input type="text" className="contact_form_input" placeholder='Type Your Name' name='name' required />

                    <label className='contact_form_label'>Email</label>
                    <input type="email" className="contact_form_input" placeholder=' Type Your Email' name='email' required />

                    <label className='contact_form_label'>Subject</label>
                    <input type="text" className="contact_form_input" placeholder='Type Your Subject' name='subject' required />

                    <label className='contact_form_label'>Message</label>
                    <textarea className="contact_form_textarea" id='' cols='30' rows='8' placeholder='Type Your Message Here' name='message' required />

                    <button type="submit" value="Send Message" className='contact_form_button' >Send Message</button>

                </form>


            </div>

        </section>

    );
}

export default Contact;