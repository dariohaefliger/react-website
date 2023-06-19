import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2fyij1k', 'template_veb16od', form.current, 'ipiAVplJHbCGJT3yM');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__opion-icon'/>
            <h4>Email</h4>
            <h5>email@email.com</h5>
            <a href="mailto:email@email.com" target='_blank'>Lorem, ipsum dolor.</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__opion-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/phone-number" target='_blank'>Lorem, ipsum dolor.</a>
          </article>
        </div>
        {/* END OF CONTACT FORM */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Dein Name' required/>
          <input type="email" name='email' placeholder='Deine Email-Adresse' required/>
          <textarea name="message" rows="7" placeholder='Deine Nachricht' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact