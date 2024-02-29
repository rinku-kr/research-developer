import React from 'react'
import Navbar from '../../components/header/Navbar'
import Banner from '../banner/Banner'
import TopNav from '../../components/header/TopNav'
import Logo from '../../components/header/Logo'
import Faq from '../../components/faq/Faq'

const Faqpage = () => {
  return (
    <>
    <div>
        <TopNav />
    </div>
    <div>
        <Logo />
    </div>    
    <div>
    <Banner banner="./assets/images/FAQ.jpg"/>
    </div>
    <div>
        <Navbar />
    </div>
    <div>
      {/* <Faq /> */}
    </div>

    </>
    
  );
};

export default Faqpage;
