import React from "react";
import classes from './Footer.module.css';
import Image from 'next/image';
import facebookIcon from './Icons/facebook-color.svg';
import instagramIcon from './Icons/instagram-1.svg';
import twitterIcon from './Icons/twitter.svg';

const Footer = () => {
    return(
        <div className={classes.footer}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path fill="#fff" d="M0,128L120,122.7C240,117,480,107,720,112C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
         </svg>
          <div className={classes['footer-container']}>
             <div className={classes['footer-top']}>
               <div className={classes['footer-information']}>
                 <h2>visitGradacac</h2>
                 <p>visitGradacac is an informative tourist site, <br></br> which will make it easier for you to explore <br></br> the natural beauty and historical places in <br></br> Gradacac, speed up the way to delicious <br></br> food in top restaurants, as well as various <br></br> hotels and overnight stays.</p>
                 <select className={classes['translate-dropdown']}><option>English</option><option value="/auto/de">Deutsch</option><option value="/auto/fr">Français</option><option value="/auto/it">Italiano</option><option value="/auto/ru">Русский</option></select>
               </div>
               <div className={classes['footer-menu']}>
                 <div className={classes['quick-links']}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Accommodation</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Interactive Map</a></li>
                    </ul>
                 </div>
                 <div className={classes['social-media']}>
                    <h4>Follow Us on:</h4>
                   <a href="https://www.facebook.com/groups/GradacacORG/?locale=hr_HR"><Image src={facebookIcon} alt=""></Image></a>  
                   <a href="https://www.instagram.com/explore/locations/277765498/gradacac-bosnia-herzegovina/"><Image src={instagramIcon} alt=""></Image></a>
                   <a href="#"><Image src={twitterIcon} alt=""></Image></a>  
                 </div>
               </div>
             </div>
          </div>
          <hr className={classes.line}></hr>
          <p className={classes.rights}>@2023 visitGradacac. All rights reserved.</p>
        </div>
    )
}

export default Footer;