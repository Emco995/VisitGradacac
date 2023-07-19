import React, {useState, useEffect} from "react";
import '@fortawesome/fontawesome-svg-core/styles.css'
import classes from '../Image Slider/ImageSlider.module.css';
import dataSlider from './dataSlider.js';
import ButtonSlider from "./ButtonSlider";
import Image from 'next/image';

const ImageSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
 
    const nextSlide = () => {
       if(slideIndex !== dataSlider.length){
          setSlideIndex(slideIndex + 1)
       } else if(slideIndex === dataSlider.length){
        setSlideIndex(1)
       }
    }
 
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
         } else if(slideIndex === 1){
          setSlideIndex(dataSlider.length)
         }
    }
 
     return(
       <div className={classes['container-slider']}>
         <div className={classes['left-slide']}>
         {dataSlider.map((obj, index) => {
           return (
               <div style={{backgroundColor: `${obj.backgroundColor}`}} key={obj.id} 
                    className={slideIndex === index + 1 ? 'slide active-anim'  : 'slide'}> 
                  <h2>{obj.title}</h2>
                  <p className="subtitle">{obj.subTitle}</p>
               </div>
           )
       })}
       </div>   
 
       <div className="right-slide">
       {dataSlider.map((obj, index) => {
           return (
               <div key={obj.id} 
                    className={slideIndex === index + 1 ? `${classes.slide} ${classes['active-anim']}` : `${classes.slide}`}> 
                   <Image 
                    //  src={process.env.PUBLIC_URL + `/img${index + 1}.JPEG`} 
                     width={500}
                     height={500}
                     alt="">
                   </Image>
               </div>
           )
       })}
       <ButtonSlider moveSlide={nextSlide} direction={classes.up}></ButtonSlider>
       <ButtonSlider moveSlide={prevSlide} direction={classes.down}></ButtonSlider> 
   </div>
   </div>
     )
 }
 
 export default ImageSlider;