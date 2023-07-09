import React, {useState, useEffect} from "react";
import Image from 'next/image';
import logo from '../../../assets/logo.png';
import classes from './Navbar.module.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const changeNavBackground = () => {
            if(window.scrollY >= 80 ){
             setNavbar(true);
            } else {
             setNavbar(false);
            }
         }
         window.addEventListener('scroll', changeNavBackground);
    })
   

    return(
        <div className={navbar ? `${classes.navbar} ${classes.active}` : `${classes.navbar}`}>
            <Image src={logo} alt="" className={classes.logo}></Image>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Visit</a></li>
            </ul>
        </div>
    )
}

export default Navbar;