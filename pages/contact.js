import React from "react";
import Navbar from './Components/Header/Navbar/Navbar'
import Hero from "./Hero"
import heroImg from "./assets/hazna3.JPEG"
import Footer from "./Components/Footer/Footer";
import ContactForm from "./contactform";

function Contact () {
    return(
       <>
       <Navbar/>
      <Hero

      cName="hero-mid"
      heroImg={heroImg}
      title="Contact"
      btnClass="hide"
      
      
      />
      <ContactForm/>
       <Footer/>
       </>
    )
   }
   
   export default Contact;