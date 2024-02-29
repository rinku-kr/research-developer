import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const TopNav = () => {
  return (
    <nav className='bg-slate-950 text-white py-2 px-[80px] justify-between md:text-x md:flex hidden'>
        <ul className='md:flex'>
            <li className='px-4'><CallIcon /> Phone : +91 9788888292</li> 
            <li>|</li> 
            <li className='px-4'><EmailIcon /> Email : info@researchdevelopers.com</li>
        </ul>
        <ul className='md:flex'>
          <li className='px-2 '><FacebookIcon /></li>
          <li className='px-2 '><TwitterIcon /></li>
          <li className='px-2 '><YouTubeIcon /></li>
        </ul>
    </nav>
  )
}

export default TopNav