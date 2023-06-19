import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Name 1',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui ex quaerat exercitationem sit nisi quidem doloremque magni, maxime iure perspiciatis atque ullam, aliquid dolorum, quia repudiandae quasi nobis porro.'
  },
  {
    avatar: AVTR2,
    name: 'Name 2',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui ex quaerat exercitationem sit nisi quidem doloremque magni, maxime iure perspiciatis atque ullam, aliquid dolorum, quia repudiandae quasi nobis porro.'
  },
  {
    avatar: AVTR3,
    name: 'Name 3',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui ex quaerat exercitationem sit nisi quidem doloremque magni, maxime iure perspiciatis atque ullam, aliquid dolorum, quia repudiandae quasi nobis porro.'
  },
  {
    avatar: AVTR4,
    name: 'Name 4',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui ex quaerat exercitationem sit nisi quidem doloremque magni, maxime iure perspiciatis atque ullam, aliquid dolorum, quia repudiandae quasi nobis porro.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Lorem ipsum dolor sit.</h5>
      <h2>Lorem.</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client_review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials