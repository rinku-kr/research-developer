import React from 'react'
import Navbar from '../../components/header/Navbar'
import Banner from '../banner/Banner'
import TopNav from '../../components/header/TopNav'
import Logo from '../../components/header/Logo'
import Aboutus from "../../components/about/Aboutus";

const About = () => {
  return (
    <>
    <div>
      <TopNav />
    </div>
    <div>
      <Logo />
    </div>    
    <div>
    <Banner banner="./assets/images/Aboutbanner.jpg"/>
    </div>
    <div>
      <Navbar />
    </div>
    <div>
      <Aboutus />
    </div>
    </>
  );
};

export default About;
