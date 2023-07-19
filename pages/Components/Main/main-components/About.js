import React from "react";
import classes from './About.module.css';

const About = () => {
    return(
        <div className={classes['about-container']}>
            <h1>Gradacac</h1>
            <h3>City Of Many Tails</h3>
            <p>Explore Gradačac, a city woven of natural beauty imbued with a rich history spanning centuries. From delicious food, natural landscapes, healing thermal waters, sports facilities, places for rest and relaxation to buildings with the greatest cultural and historical features.</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path fill="#f5f5f5" d="M0,128L120,122.7C240,117,480,107,720,112C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default About;