import React from "react";
import Navbar from "./Navbar/Navbar";
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
          <Navbar></Navbar>
        </div>
    )
}

export default Header;