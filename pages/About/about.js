import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import styles from './about.module.css'

const about = () => {
    return(
        <>
         <div className={styles.aboutContainer}>
            <Navbar></Navbar>
            <h1>About Page</h1>
            
         </div>
        </>
    )
}

export default about;