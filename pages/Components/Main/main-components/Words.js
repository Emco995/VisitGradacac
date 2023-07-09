import classes from './Words.module.css'
const Words = () => {
   return (
    <div>
       <div className={classes['word-welcome']}>
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span> 
            <br/> 
            <span>T</span>
            <span>O</span>
            <br></br>
       </div>
       <div className={classes['word-gradacac']}>
            <span>G</span>
            <span>R</span>
            <span>A</span>
            <span>D</span>
            <span>A</span>
            <span>C</span>
            <span>A</span>
            <span>C</span>
       </div>
    </div>
   )
}

export default Words;