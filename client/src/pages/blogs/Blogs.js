import React from 'react'
import TopNav from '../../components/header/TopNav';
import Logo from '../../components/header/Logo';
import Banner from '../banner/Banner';
import Navbar from '../../components/header/Navbar';
import Blog from '../../components/blog/Blog';

const Blogs = () => {

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
        <Blog />
    </div>
    </>
  );
};

export default Blogs;
