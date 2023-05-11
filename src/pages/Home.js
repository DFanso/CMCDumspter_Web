import React, { useRef } from 'react'
import Header from '../components/Header'
import '../css/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Footer from '../components/Footer';
import indexPic1 from '../images/indexPic1.jpg';
import indexPic2 from '../images/indexPic2.jpg';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import MainHeader from '../components/MainHeader';

SwiperCore.use([Autoplay]);

function Home() {
  const swiperRef = useRef(null);
  return (
    <div className='body'>
      <MainHeader />
      <Swiper 
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide className='slide'>
          <img src={indexPic1} className='image' alt='image 1' />
          <div className='caption'>
            <span class="text">Optimizing Garbage Collection</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={indexPic2} width={'100%'} alt='image 2' />
          <div className='caption'>
            <span class="text">Green Task Force As Volunteers</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={'https://images.pexels.com/photos/4171694/pexels-photo-4171694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} width={'100%'} alt='image 3' />
          <div className='caption'>
            <span class="text">News & Articles for Public Knowledge</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg'} width={'100%'} alt='image 4' />
          <div className='caption'>
            <span class="text">Incidents are being reported</span>
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