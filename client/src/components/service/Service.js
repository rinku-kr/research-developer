import { RiHome2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";
import { MdMoney } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const Service = () => {
  const icon1 = <RiHome2Fill size={35} className=" text-backgroundColor" />;
  const icon2 = <MdMoney size={35} className=" text-backgroundColor" />;
  const icon3 = <FaChartBar size={35} className=" text-backgroundColor" />;

  return (
    <>
    <div className='flex justify-center lg:pt-28 text-center text-4xl font-semibold'>
      
    <h2 class="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
      Our Services
    </h2>
    </div>
    <div className="flex flex-col lg:flex-row gap-5 pt-10 lg:px-16">
      <ServiceCard icon={icon1} title="topic" />
      <ServiceCard icon={icon2} title="tools" />
      <ServiceCard icon={icon3} title="methodology" />
    </div>
    </>
  );
};

export default Service;