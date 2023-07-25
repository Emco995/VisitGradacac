import React from 'react';
import styles from './HeroStyles.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Hero = (props) => {
  return (
    <>
      <div className={`${styles.hero} ${props.cName}`}>
        <Image className={styles.img} alt="heroImg" src={props.heroImg} />
      </div>

      <div className={styles['hero-text']}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Link href={`${props.url}`}>
        </Link>
      </div>
    </>
  );
};

export default Hero;
