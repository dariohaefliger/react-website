import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import DE from '../../assets/germany.png'
import FR from '../../assets/france.png'
import EN from '../../assets/united-kingdom.png'
import IT from '../../assets/italy.png'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Dario Häfliger</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/" target='_blank'><FaGithub /></a>
        <a href="https://dribbble.com/" target='_blank'><FiDribbble /></a>
      </div>

      <div className="footer__lang">
        <a href="#"><img src={DE} alt="de" /></a>
        <a href="#"><img src={EN} alt="en" /></a>
        <a href="#"><img src={FR} alt="fr" /></a>
        <a href="#"><img src={IT} alt="it" /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
      </div>
    </footer>
  )
}

export default Footer