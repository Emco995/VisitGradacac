import classes from './Main.module.css'
import ImageSlider from './main-components/Image Slider/Slider/ImageSlider';
import Video from './main-components/Video';
import About from './main-components/About';
import Words from './main-components/Words';
import TownMap from './main-components/TownMap';
import Footer from './main-components/Footer';

const Main = () => {
    return(
       <div className={classes.container}>
          <Words></Words>
          <Video></Video>
          <About></About>
          <ImageSlider></ImageSlider>
          <TownMap></TownMap>
          <Footer></Footer>
       </div>
    )
}

export default Main;