import React from "react";
import Link from "next/link.js";
import Image from "next/image";
import Content from './Content.js';

// import img1 from '../../../../../../public/img1.JPEG'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, EffectCoverflow, Autoplay} from 'swiper/modules';

// import from '../' 'swiper/swiper-bundle.min.css';
import '../../../../../../node_modules/swiper/swiper-bundle.min.css'
import '../../../../../../node_modules/swiper/swiper.min.css';

import styles  from './Slider.module.css';

const ImageSlider = () => {
  return(
    <div className={styles.carousel}>
       {/* <div> */}
        <div className={styles.carouselContent}>
           <span>Discover</span>
           <h1>Top Attractions/Must Visit</h1>
           <hr></hr>
           <p>Explore Beautiful & Amazing City of Gradacac</p>
           {/* <Link href='#' className={styles.sliderBtn}/> */}
        </div>
       {/* </div> */}

       <Swiper 
         className={styles.mySwiper}
         modules={[Pagination, EffectCoverflow, Autoplay]}
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
         }}
         loop={true}
         pagination={{clickable: true}}
         slidesPerView={2}
         >
        {
          Content.map(data => (
            <SwiperSlide key={data.id} style={{ backgroundImage: `url(${data.image})` }} className={styles.mySwiperSlider}>
               <div>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <button className={styles.sliderBtn}>
                    <Link href='#'>Read More</Link>
                  </button>
               </div>
            </SwiperSlide>
          ))
        }
       </Swiper>
    </div>
  );
}

export default ImageSlider;

