import React from "react";
import Navbar from './Components/Header/Navbar/Navbar'
import Hero from "./Hero"
import heroImg from "./assets/hazna2.JPEG"
import Footer from "./Components/Footer/Footer";
import AboutUs from "./aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={heroImg}
        title="History of Gradačac"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
