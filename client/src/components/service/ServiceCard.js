import React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-gradient-to-r from-[#0176BC] via-purple-500 to-[#E82E5D] text-white group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className=" bg-[#E82E5D] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#0176BC] text-white">
        {icon}
      </div>
      <h1 className=" font-semibold text-lg uppercase">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium asperiores unde veniam, perspiciatis neque!
      </p>

      <h3 className=" text-[#E82E5D] cursor-pointer hover:text-[#0176BC] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServiceCard;
