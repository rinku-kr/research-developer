import React from 'react'
import Banner from '../banner/Banner'
import TopNav from '../../components/header/TopNav'
import Navbar from '../../components/header/Navbar'
import Content from '../../components/content/Content'
import Logo from '../../components/header/Logo'
import Service from '../../components/service/Service'
import Aboutus from '../../components/about/Aboutus'
import Contact from '../../components/contact/Contact'
import Blog from '../../components/blog/Blog'
import Testimonial from '../testimonials/Testimonial'

const Home = () => {
  return (
    <>
    <div>
        <TopNav />
    </div>
    <div>
        <Logo />
    </div>   
    <div>
        <Banner banner="./assets/images/banner.png"/>
    </div>
    <div>
        <Navbar />
    </div>
    <div>
        <Aboutus title="Welcome to @ResearchDeveloper" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            quia suscipit illum, numquam incidunt nostrum dolor officia
            doloremque cupiditate, placeat explicabo sed iure atque neque quidem
            ipsam! Dolor, minus reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            quia suscipit illum, numquam incidunt nostrum dolor officia
            doloremque cupiditate, placeat explicabo sed iure atque neque quidem
            ipsam! Dolor, minus reiciendis." image="./assets/images/about.jpg"/>
    </div>
    <div>
        <Service />
    </div>
    <div className='lg:pt-32'>
        <img src="./assets/images/section.jpeg" alt="" width={"100%"}  />
    </div>
    
    <div>
        <Blog />
    </div>
    <div>
        <Content title="Heading" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            quia suscipit illum, numquam incidunt nostrum dolor officia
            doloremque cupiditate, placeat explicabo sed iure atque neque quidem
            ipsam! Dolor, minus reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            quia suscipit illum, numquam incidunt nostrum dolor officia
            doloremque cupiditate, placeat explicabo sed iure atque neque quidem
            ipsam! Dolor, minus reiciendis." image="./assets/images/contentCol.jpg" />
    </div>
    <div>
        <Testimonial />
    </div>
    <div>
        <Contact />
    </div>
    </>
  )
}

export default Home