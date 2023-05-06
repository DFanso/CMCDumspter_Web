import React from 'react'
import Header from '../components/Header'
import '../css/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// images
import indexPic1 from '../images/indexPic1.jpg';
import indexPic2 from '../images/indexPic2.jpg';
import indexPic3 from '../images/indexPic3.jpg';
import indexPic4 from '../images/indexPic4.jpg';
import Footer from '../components/Footer';



function Home() {
  return (
    <div>
      <Header />
      <Swiper navigation pagination >
        <SwiperSlide className='slide'>
          <img src={indexPic1} className='image' alt='hello' />
          <div className='caption'>
            <span class="text">Optimizing Garbage Collection</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={indexPic2} width={'100%'} alt='there' />
          <div className='caption'>
          <span class="text">Green Task Force As Volunteers</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={indexPic3} width={'100%'} alt='adoo' />
          <div className='caption'>
            <span class="text">News & Articles for Public Knowledge</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={indexPic4} width={'100%'} alt='adoo' />
          <div className='caption'>
          <span class="text">Indicents are being reported</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="about" id="about">
        <h1>About Us</h1>
        <p>
          Situated in the western province of Sri Lanka, Colombo is the island's
          capital. Diverse and vibrant, the city is the administrative and
          economic center of the country. Colombo is Sri Lanka's largest city,
          home to around a million people is also one of the busiest ports in the
          South Asia. Colombo was the capital for over two hundred years until the
          capital was shifted to nearby Sri Jayawardenepura, but remains the hub
          and heart of the city.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Home