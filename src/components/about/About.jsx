import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Lorem ipsum dolor sit.</h5>
      <h2>Lorem, ipsum.</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Lorem.</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Lorem.</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Lorem.</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sequi aspernatur impedit vero nihil quaerat perspiciatis aliquid, eaque totam non obcaecati blanditiis est culpa nulla. Totam nihil deleniti eius quia.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About