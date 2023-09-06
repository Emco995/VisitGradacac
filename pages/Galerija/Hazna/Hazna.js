import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Hazna.module.css';
import Navbar from "../../Components/Header/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import SimpleImageSlider from "react-simple-image-slider";
import location from '../Gradina/Gradina Slike/map-pin-alt.svg'
import clock from '../Gradina/Gradina Slike/clock-two.svg'
import mobile from '../Gradina/Gradina Slike/mobile-phone-smartphone.svg'
import globe from '../Gradina/Gradina Slike/globe.svg'
// import hazna1 from '../Hazna/Hazna Slike/hazna1.JPEG'

const Hazna = () => {
    const sliderImages = [
        {
           url: "https://photos.wikimapia.org/p/00/06/77/68/40_big.jpg"
        },
        {
           url: "https://photos.wikimapia.org/p/00/06/77/68/41_big.jpg",
        },
        {
           url: "https://www.bistrobih.ba/nova/wp-content/uploads/2016/05/Hazna.jpg",
        },
        {
           url: "https://enovosti.ba/wp-content/uploads/2022/03/FOTO-4-1-1-1024x682.jpg",
        },
        {
           url: "https://aktuelno.ba/wp-content/uploads/2022/05/DSC_0199_1024x683.jpg",
        },
     ];
    return(
        <div className={classes['hazna-container']}>
            <Navbar></Navbar>
            <div className={classes.background}>
               <h1 className={classes.title}>Lake Hazna</h1>
            </div>
            
            <div className={classes['about-hazna']}>
                <div className={classes.text}>
                    <h3>Lake Hazna</h3>
                    <p>Lake Hazna is an artificial lake located in Bosnia and Herzegovina. The lake was built in 1967 after the river Hazna and lake Vidara flooded Gradačac in 1964 and 1967. The first stocking of the lake was carried out in 1967. A few years later a pontoon was built on the lake. Before the war, the lake was an important attraction in Gradačac where a large number of people bathed during the summer months. After the war, little care was taken of the lake, so it became polluted, so that today hardly anyone swims in it. There are several buildings around the lake (restaurant, hotel under construction, etc.).</p>
                </div>
                <div className={classes.carousel}>
                <SimpleImageSlider className={classes.slider}Name
                   width={500}
                   height={250}
                   images={sliderImages}
                   showNavs={true}
                />
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes['info-location']}>
                      <Image src={location} className={classes['info-img']}></Image>
                      <p>Hazna, Gradačac 76250</p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={clock} className={classes['info-img']}></Image>
                      <p> Monday: 8:00–23:00
                          <br></br>
                          Tuesday: 8:00–23:00
                          <br></br>
                          Wednesday: 8:00–23:00
                          <br></br>
                          Thursday: 8:00–23:00
                          <br></br>
                          Friday: 8:00–23:00
                          <br></br>
                          Saturday: 8:00–23:00
                          <br></br>
                          Sunday: 8:00-23:00
                        </p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={mobile} className={classes['info-img']}></Image>
                      <p>  061/142 022</p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={globe} className={classes['info-img']}></Image>
                      <p><Link style={{color: 'black'}} href={`${'https://www.facebook.com/JezeroHaznaa/?locale=hr_HR'}`}>https://www.facebook.com/JezeroHaznaa/?locale=hr_HR</Link></p>
                </div>
            </div>
            <div className={classes['hazna-location']}>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5654.403994903213!2d18.415494550000002!3d44.87853805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c3ceba8f73dd5%3A0x5927af2c40c4a23!2sHazna%20Lake!5e0!3m2!1shr!2sba!4v1690532156067!5m2!1shr!2sba" style={{width: "100%", height: "400px", border: 0}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Hazna;