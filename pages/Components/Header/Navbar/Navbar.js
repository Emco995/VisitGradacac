import React, {useState, useEffect} from "react";
import Image from 'next/image';
import logo from '../../../assets/logo.png';
import styles from './Navbar.module.css';
// import aboutGradacac from "../../../About Page/aboutGradacac";
import Link from 'next/link';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const changeNavBackground = () => {
            if(window.scrollY >= 80){
             setNavbar(true);
            } else {
             setNavbar(false);
            }
         }
         window.addEventListener('scroll', changeNavBackground);
    })
   

    return(
        <div>
        <div className={navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`}>
            <Image src={logo} alt="" className={styles.logo}></Image>
            <h3 className={styles['page-title']}>visitGradačac</h3>
            <ul className={styles.mainMenu}>
                <li><a href="/">Guide</a>
                  {/* <ul className={styles.subMenu}>
                      <li><a href='/'>Food & Beverage</a></li>
                      <li><a href='/'>Accommodation</a></li>
                      <li><a href='/'>Sports & Entertainment</a></li>
                      <li><a href='/'>Retail</a></li>
                      <li><a href='/'>Services & Help</a></li>
                  </ul> */}
                  </li>
                <li><Link href="/About/about"><i class="fa-solid fa-circle-info"></i> About</Link></li>
                <li><a href="/locations">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/map">Interactive Map</a></li>
            </ul>
        </div>

        <div className={styles.stationNav}>
           <div className={styles.stationNavLeftPart}>
             <Image src={logo} alt="" className={styles.stationNavLogo}></Image>
             <h3 className={styles.stationNavTitle}>visitGradačac</h3>
           </div>

           <div className={styles.stationNavRightPart}>
                <div className={styles.stationNavElements}>
                    <ul className={styles.navElementsLinks}>
                       <li><a href="/" className={styles.navLinkHome}>Home <span></span></a></li>
                       <li><Link href="/About/about" className={styles.navLinkAbout}>About <span></span></Link></li>
                       <li><a href="/locations" className={styles.navLinkLocations}>Locations <span></span></a></li>
                       <li><a href="/contact" className={styles.navLinkContact}>Contact <span></span></a></li>
                       <li><a href="/contact" className={styles.navLinkMap}>Map</a></li>
                    </ul>
                </div>
           </div>
        </div>

        </div>
    )
}

export default Navbar;