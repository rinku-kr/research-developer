import React from "react";

const Banner = ({ banner }) => {
  return (
    <>
      <div className="relative z-[-1]">
        <img src={banner} alt="" width={"100%"} />
      </div>      
    </>
  );
};

export default Banner;
