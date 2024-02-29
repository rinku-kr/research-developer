import React from 'react'

const Contentcol = () => {
  return (
    <>
         <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center px-60 gap-2">
        <div className=" w-full lg:w-3/4">
          <img
            className=" rounded-xl"
            src="./assets/images/contentCol.jpg"
            alt="img" 
          />
        </div>
        <div className=" w-full lg:w-3/4">
          <h1 className=" text-4xl font-semibold text-center lg:text-start uppercase text-[#2E3F8D] mb-8">
            Heading goes here
          </h1>
        
          <div>
          <p className="lg:text-start [120px] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            labore rerum tempore tenetur commodi natus quos itaque voluptatum
            repudiandae nostrum accusantium vero voluptate aspernatur totam,
            laboriosam aut, et quae consequatur?         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            illum. Accusantium ab expedita veniam nobis aut, in rerum
            repellendus! Exercitationem libero recusandae corrupti accusantium
            reiciendis in placeat illo maxime ea.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            illum. Accusantium ab expedita veniam nobis aut, in rerum
            repellendus! Exercitationem libero recusandae corrupti accusantium
            reiciendis in placeat illo maxime ea.

            Accusantium ab expedita veniam nobis aut, in rerum
            repellendus! Exercitationem libero recus
          </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contentcol