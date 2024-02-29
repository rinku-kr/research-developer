import React from 'react'
import Navbar from '../../components/header/Navbar'
import Banner from '../banner/Banner'
import TopNav from '../../components/header/TopNav'
import Logo from '../../components/header/Logo'
import Service from '../../components/service/Service'


const Servicepage = () => {
  return (
    <>
    <div>
        <TopNav />
    </div>
    <div>
        <Logo />
    </div>    
    <div>
        <Banner banner="./assets/images/services.jpg"/>
    </div>
    <div>
        <Navbar />
    </div>
    <div>
        <Service />
    </div>
    </>
  )
}

export default Servicepage