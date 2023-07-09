import classes from './Main.module.css'
import Video from './main-components/Video';
import Words from './main-components/Words';

const Main = () => {
    return(
       <div className={classes.container}>
          <Words></Words>
          <Video></Video>
       </div>
    )
}

export default Main;