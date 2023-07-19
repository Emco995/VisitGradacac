import React from "react";
import classes from './TownMap.module.css';

const TownMap = () => {
    return(
        <div className={classes['map-container']}>
          <h1>How to find Us ?</h1>
          <div className={classes.map}>
            <p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d45230.759441680384!2d18.389835414703708!3d44.884226809189975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x475c3ce74d1a2ad7%3A0xec92baaa82e344b0!2zR3JhZGHEjWFj!3m2!1d44.877552099999996!2d18.425887!5e0!3m2!1shr!2sba!4v1689354098464!5m2!1shr!2sba"
                    width="100%" height="400" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </p>
          </div>
          </div>  
    )
}

export default TownMap;