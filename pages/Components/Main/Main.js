import classes from './Main.module.css'
import ImageSlider from './main-components/Image Slider/ImageSlider';
import Video from './main-components/Video';
import About from './main-components/About';
import MustSee from './main-components/MustSee';
import Words from './main-components/Words';
import TownMap from './main-components/TownMap';

const Main = () => {
    return(
       <div className={classes.container}>
          <Words></Words>
          <Video></Video>
          <About></About>
          <MustSee></MustSee>
          <ImageSlider></ImageSlider>
          <TownMap></TownMap>
       </div>
    )
}

export default Main;