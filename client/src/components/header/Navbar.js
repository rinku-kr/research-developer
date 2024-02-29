import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="border-none shadow-lg flex md:px-4 ml-[20%] mr-[20%] rounded-full py-1 items-center justify-around mt-[-20px] bg-blue-100">
        <ul className="md:flex font-bold hidden text-[#B01D6E] text-xl">
          <li className="pr-16 hover:text-[#E82E5D]">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-16 hover:text-[#E82E5D]">
            <Link to="/about">About</Link>
          </li>
          <li className="pr-16 hover:text-[#E82E5D]">
            <Link to="/services">Services</Link>
          </li>
          <li className="pr-16 hover:text-[#E82E5D]">
            <Link to="/faq">FAQ'S</Link>
          </li>
          <li className="pr-16 hover:text-[#E82E5D]">
            <Link to="/career">Career</Link>
          </li>
          <li className=" hover:text-[#E82E5D]">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="md:hidden">
          <a className="text-4xl" href="/">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
