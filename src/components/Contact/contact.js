import React from 'react';
import './contact.css';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedIn.webp';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>
                Please fill out the form below to discuss any work opportunities.
            </span>

            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>

                <div className='links'>
                    <img src={Instagram} alt='Instagram Icon' className='link1'/>
                    <img src={LinkedIn} alt='LinkedIn Icon' className='link2'/>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;