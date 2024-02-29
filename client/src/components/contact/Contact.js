import React from 'react'

const Contact = () => {
  return (
    <>
        <div class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        {/* Content */}
        
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d]">
              Get In Touch
            </h2>
          </div>
          <div className="mb-16 pr-6">
            <img src="./assets/images/contact.jpg" className="rounded-xl" />
          </div>
        </div>

        {/* Form */}
        <div class="">
          <div className="mt-24">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="" />
          </div>
          <div class="mt-2">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mt-2">
            <span class="uppercase text-sm text-gray-600 font-bold">Phone</span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mt-2">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-2">
            <button class="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact