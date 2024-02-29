import React from 'react'

const Logo = () => {
  return (
    <>
    <div className="px-24 fixed top-0">
        <a href="/">
        <img
            src="./assets/images/logo.png"
            alt="logo"
            className="relative z-8 drop-shadow-lg py-12"
            width={"60%"}  />
        </a>
    </div>
    </>
  )
}

export default Logo