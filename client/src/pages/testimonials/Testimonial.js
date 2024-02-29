import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const data = [
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
      name: "This is testimonial 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis laboriosam beatae placeat a rerum debitis esse. ",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
      name: "This is testimonial 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis laboriosam beatae placeat a rerum debitis esse. ",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
      name: "This is testimonial 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis laboriosam beatae placeat a rerum debitis esse. ",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
      name: "This is testimonial 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis laboriosam beatae placeat a rerum debitis esse. ",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
      name: "This is testimonial 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis laboriosam beatae placeat a rerum debitis esse. ",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <h2 class="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
          Testimonials
          </h2>
          <Slider ref={slider} {...settings}>
            {data.map((content, index) => (
              <TestimonialCard
                img={content.img}
                heading={content.heading}
                description={content.description}
              />
            ))}
          </Slider>
          <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12"></div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
