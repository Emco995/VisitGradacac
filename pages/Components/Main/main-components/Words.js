import React from "react";
import styles from "./Words.module.css";
import WordsAnimated from './WordsAnimated';
import WordsCharacter from './WordsCharacter';

const Words = () => {
return(

         <div>
            <div className={`${styles['container']} ${styles['h-screen']} ${styles['mx-auto']} ${styles['flex']} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']}}`}>
                   <WordsAnimated text={`WELCOME TO`}/>
                   <WordsCharacter text="GRADAČAC" />
            </div>
        </div>
)
}

export default Words;