import React, { useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={styles.aboutContainer}>
      <h1>Gradacac</h1>
      <h3>City Of Many Tails</h3>
      <p>
        Explore Gradačac, a city woven of natural beauty imbued with a rich
        history spanning centuries. From delicious food, natural landscapes,
        healing thermal waters, sports facilities, places for rest and
        relaxation to buildings with the greatest cultural and historical
        features.
      </p>
      <div className={styles.content}>
        <h3>Why Gradačac ?</h3>
        <p>
        Gradačac is a small city in the Tuzla Canton with many places that will
        delight you, which are "hidden" near the tower of Husein Captain
        Gradaščević. <span className={`${styles.longText} ${collapse ? styles.expanded : ''}`}> In Gradačac, you can find the most delicious Bosnian
        dishes, ride horses on the ranch, sleep in an old Bosnian room, enjoy a
        walk by the lake, relax in the healing water of the Spa "Ilidža", visit
        the tower of the Dragon of Bosnia and sit in the park below it. <br className={styles.spacing}></br> There
        are many reasons to visit Gradačac, but we have singled out seven
        reasons this time, so if you are in doubt whether it is worth coming to
        Gradačac or not, find out below why to visit this city. Some of the best
        and most popular places in Gradačac are definitely Mionički Ranch,
        Čardak lodging and restaurant, Zmaja od Bosna tower, City Park, Hazna
        and Vidara lakes, Banja Ilidža. <br className={styles.spacing}></br> All these places will offer you an
        excellent atmosphere and feeling, and Gradačac will certainly remain in
        your fond memories. Gradačac is a city that you will gladly return to,
        maybe visit the same places, but the feeling will be different - but
        most importantly, no less beautiful. Gradačac is a city with a rich
        history, and here you will find a combination of modern and traditional.
        <br className={styles.spacing}></br>
        You can have fun, relax, spend time or feel the soul of the past and
        visit places that offer just such an experience.</span>
        </p>
        <button className={styles.readMore} onClick={() => setCollapse(prev => !prev)}>Read More</button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path
          fill="#f5f5f5"
          d="M0,128L120,122.7C240,117,480,107,720,112C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
