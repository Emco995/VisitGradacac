import React from "react";
import classes from './MustSee.module.css';

const MustSee = () => {
    return(
        <div className={classes['title-container']}>
            <div className={classes.title}>
               <h3 className={classes.title1}>Must See</h3>
               <h1 className={classes.title2}>Top Attractions</h1>
            </div>
        </div>
    )
}

export default MustSee;