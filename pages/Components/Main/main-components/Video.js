import classes from './Video.module.css';

const Video = () => {
    return (
           <video className={classes.video} autoPlay loop muted>
             <source src='/videoBg.mp4' type='video/mp4'/>
           </video>
    )
}

export default Video;
