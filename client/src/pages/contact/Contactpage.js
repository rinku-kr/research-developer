import React from 'react'
import TopNav from '../../components/header/TopNav'
import Logo from '../../components/header/Logo'
import Banner from '../banner/Banner'
import Navbar from '../../components/header/Navbar'
import Contact from '../../components/contact/Contact'

const Contactpage = () => {
  return (
    <>
    <div>
        <TopNav />
    </div>
    <div>
        <Logo />
    </div>    
    <div>
        <Banner banner="./assets/images/contactbanner.jpg"/>
    </div>
    <div>
        <Navbar />
    </div>
    <div>
        <Contact />
    </div>
    </>
  )
}

export default Contactpage