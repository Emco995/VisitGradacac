import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Gradina.module.css';
import Navbar from "../../Components/Header/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import SimpleImageSlider from "react-simple-image-slider";
import location from '../Gradina/Gradina Slike/map-pin-alt.svg'
import clock from '../Gradina/Gradina Slike/clock-two.svg'
import mobile from '../Gradina/Gradina Slike/mobile-phone-smartphone.svg'
import globe from '../Gradina/Gradina Slike/globe.svg'

const Gradina = () => {
    const sliderImages = [
        {
           url: "https://visitbih.ba/wp-content/uploads/2017/10/VH-Gradacac-27.jpg",
        },
        {
           url: "https://cdn.oslobodjenje.ba/images/slike/2017/11/23/2359992.jpg",
        },
        {
           url: "https://furaj.ba/wp-content/uploads/2021/07/Gradac%CC%8Cac-Fotobaza.jpeg",
        },
        {
           url: "https://visitbih.ba/wp-content/uploads/2017/10/VH-Gradacac-70.jpg",
        },
        {
           url: "https://visitbih.ba/wp-content/uploads/2017/10/VH-Gradacac-80.jpg",
        },
        {
           url: "https://i.ytimg.com/vi/XTUo1ozd7pU/maxresdefault.jpg",
        },
     ];
    return(
        <div className={classes['gradina-container']}>
            <Navbar></Navbar>
            <div className={classes.background}>
               <h1 className={classes.title}>Fortress of Husein - Kapetan Gradascevic</h1>
            </div>
            
            <div className={classes['about-gradina']}>
                <div className={classes.text}>
                    <h3>Fortress of Husein - Kapetan Gradascevic</h3>
                    <p>The white tower is the symbol of Gradačac. It occupies the central place on the coat of arms of the City of Gradačac. The Old Town complex in Gradačac, which also houses the White Tower of Husein-Captain Gradaščević, is one of the most significant historical buildings in Bosnia and Herzegovina, and this national monument is visited by thousands of people every year. In 2003, the White Tower was restored under the supervision of the Commission for the Protection of National Monuments of Bosnia and Herzegovina, and adapted to modern catering needs. At the top of the tower, from where you can see the whole of Gradačac and its surroundings, today there is a restaurant, where traditional Bosnian dishes are served. Gradačac Castle has a fort with walls 18 metres high, built between 1765 and 1821, and a watchtower 22 metres high, built in 1824 by Husein-kapetan Gradaščević on foundations made originally by the Romans. It is finished in the 19th century. In 1831 general rallied the Bosnians against the Turkish occupation and drove the Ottomans out to Kosovo, winning Bosnia its sovereignty for the coming year. Therefore, fortification has great historic importance for Bosnians. It has been recently renovated.</p>
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
                      <p>Nenavište bb, Gradačac 76250</p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={clock} className={classes['info-img']}></Image>
                      <p> Monday: 09:00–23:00
                          <br></br>
                          Tuesday: 09:00–23:00
                          <br></br>
                          Wednesday: 09:00–23:00
                          <br></br>
                          Thursday: 09:00–23:00
                          <br></br>
                          Friday: 09:00–23:00
                          <br></br>
                          Saturday: 09:00–23:00
                          <br></br>
                          Sunday: 09:00-23:00
                        </p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={mobile} className={classes['info-img']}></Image>
                      <p> 061/017-555</p>
                </div>
                <div className={classes['info-location']}>
                      <Image src={globe} className={classes['info-img']}></Image>
                      <p><Link style={{color: 'black'}} href={`${'https://www.facebook.com/kulazmajaodbosne/?locale=hr_HR'}`}>'https://www.facebook.com/kulazmajaodbosne/?locale=hr_HR'</Link></p>
                </div>
            </div>
            <div className={classes['gradina-location']}>
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11308.928871613327!2d18.425433!3d44.877923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c3ce63b4b7627%3A0xe51db3efac6acebc!2sKula%20Zmaja%20od%20Bosne!5e0!3m2!1shr!2sba!4v1690455191761!5m2!1shr!2sba" style={{width:"100%", height: "400px", style: "border:0;"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Gradina;