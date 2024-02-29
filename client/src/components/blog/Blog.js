import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <>
      <div className='flex justify-center lg:pt-28 text-center text-4xl font-semibold'>
      
      <h2 class="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
        Latest Blog
      </h2>
      </div>  
       <div class="flex items-center justify-center pt-10">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
                <BlogCard image={"./assets/images/blog1.jpeg"} />
                <BlogCard image={"./assets/images/blog2.jpeg"}/>
                <BlogCard image={"./assets/images/blog5.jpg"}/>
                <BlogCard image={"./assets/images/blog3.jpg"}/>
            </div>        
        </div>        
    </>
  )
}

export default Blog