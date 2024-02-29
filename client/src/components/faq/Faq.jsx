import React from 'react'
import Faqaccordian from "./Accordion"
const Faq = () => {
    return (
        
        <div className='w-full h-[380px]' style={{ backgroundImage: 'linear-gradient(#db67db,#8462e3)' }}>
            <div className='grid md:grid-cols-2 md:mx-[80px] sm:grid-cols-1 sm:mx-[150px] lg:grid-cols-3 p-10  lg:mx-[200px]' >
                <img
                    className="h-[295px]"
                    src="./assets/images/about.jpg"
                    alt="img"
                />
                <div className='col-span-2'>
                    <Faqaccordian />
                </div>
            </div>
        </div>



    )
}

export default Faq
