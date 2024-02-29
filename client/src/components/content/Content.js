import React from 'react'

const Content = ({image, title, desc}) => {
    return (
        <>
        <div className="flex flex-col lg:flex-row justify-center items-center pt-20 lg:pt-28">
          <div className="lg:w-full lg:pl-60 lg:pr-16">
            <h2 class="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] pb-4">
              {title}
            </h2>
            <p className="mt-2 text-justify lg:text-justify">
            {desc}
            </p>
            <p className="lg:text-justify">
              {desc}
            </p>
          </div>
          <div className="lg:w-full lg:pr-60 w-60">
            <img
              className="rounded-lg"
              src={image}
              alt="img"
            />
          </div>
      </div> 
        </>
    )
}

export default Content