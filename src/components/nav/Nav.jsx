import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {LuLanguages} from 'react-icons/lu'
import {useState} from 'react'
import DE from '../../assets/germany.png'
import FR from '../../assets/france.png'
import EN from '../../assets/united-kingdom.png'
import IT from '../../assets/italy.png'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      <div className="drop-menu">
        <a href="#footer" className='lang'><LuLanguages /></a>
        <ul className="dropdown">
          <li><a href="#"><img src={EN} alt="en" /></a></li>
          <li><a href="#"><img src={FR} alt="fr" /></a></li>
          <li><a href="#"><img src={IT} alt="it" /></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav