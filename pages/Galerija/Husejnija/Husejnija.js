import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Husejnija.module.css';
import Navbar from "../../Components/Header/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import SimpleImageSlider from "react-simple-image-slider";
import location from '../Gradina/Gradina Slike/map-pin-alt.svg'
import clock from '../Gradina/Gradina Slike/clock-two.svg'
import mobile from '../Gradina/Gradina Slike/mobile-phone-smartphone.svg'
import globe from '../Gradina/Gradina Slike/globe.svg'
// import hazna1 from '../Hazna/Hazna Slike/hazna1.JPEG'

const Husejnija = () => {
    const sliderImages = [
        {
           url: "https://tourism-tk.ba/wp-content/uploads/2019/12/be28adfff47893c4519c1307dc6b8866_XL.jpg"
        },
        {
           url: "https://muftijstvotz.ba/new/wp-content/uploads/2023/04/HusejnijadzamijaGradacac_4_WEB.jpg",
        },
        {
           url: "https://bastina.ba/wp-content/uploads/2018/07/naslovna.JPG",
        },
        {
           url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRXJLNtpJhAQOyyc88L-aR7agmJkcniUJdw&usqp=CAU",
        },
     ];
    return(
        <div className={classes['husejnija-container']}>
            <Navbar></Navbar>
            <div className={classes.background}>
               <h1 className={classes.title}>Mosque Husejnija</h1>
            </div>
            
            <div className={classes['about-husejnija']}>
                <div className={classes.text}>
                    <h3>Mosque Husejnija</h3>
                    <p>Husejnija Mosque is a mosque in Gradačac and has been declared a national monument of Bosnia and Herzegovina. It was built by Husein-captain Gradaščević in 1826 and represents his greatest architectural contribution. The national monument consists of: a mosque, ablutions, a library, a harem with sights and entrance gates. The exterior dimensions of the mosque (including sofas) are 18.59 x 13.90 meters. It contains an octagonal dome and a very high minaret (25 meters). Three smaller octagonal domes are located above the veranda. Islamic decorations can be seen on the door, wall as well as the interior. The entire complex is surrounded by a small stone wall and gate. The mosque is located some 40-50 meters outside the city walls of the Gradačac fortress.</p>
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
                      <p>Titova bb, Gradačac 76250</p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={clock} className={classes['info-img']}></Image>
                      <p> Monday: 00:00–23:00
                          <br></br>
                          Tuesday: 00:00–23:00
                          <br></br>
                          Wednesday: 00:00–23:00
                          <br></br>
                          Thursday: 00:00–23:00
                          <br></br>
                          Friday: 00:00–23:00
                          <br></br>
                          Saturday: 00:00–23:00
                          <br></br>
                          Sunday: 00:00-23:00
                        </p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={mobile} className={classes['info-img']}></Image>
                      <p> - </p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={globe} className={classes['info-img']}></Image>
                      <p><Link style={{color: 'black'}} href={`${'https://bastina.ba/husejnija-dzamija-u-gradaccu/'}`}>https://bastina.ba/husejnija-dzamija-u-gradaccu/</Link></p>
                </div>
            </div>
            <div className={classes['husejnija-location']}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11308.9966576217!2d18.4264912!3d44.8775781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c3ce645cd81a5%3A0xed11f97fce9803cc!2sHusejnija%20d%C5%BEamija%20Grada%C4%8Dac!5e0!3m2!1shr!2sba!4v1690613563105!5m2!1shr!2sba" style={{ width: "100%", height: "400", border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Husejnija;