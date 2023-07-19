import React from "react";
import classes from './ImageSlider.module.css';
import downArrow from './Icons/down-arrow.svg';
import upArrow from './Icons/up-arrow.svg';
import Image from 'next/image';

const ButtonSlider = ({direction, moveSlide}) => {
    return (
        <button onClick={moveSlide}
        className={direction === `${classes.down}` ? `${classes['btn-slide']} ${classes.up}` : `${classes['btn-slide']} ${classes.down}}`}>
           <Image src={direction === `${classes.down}` ? upArrow : downArrow} alt=""></Image>
        </button>
    )
}

export default ButtonSlider;