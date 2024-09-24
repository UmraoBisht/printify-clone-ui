import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 m-8 rounded-lg shadow-lg max-w-2xl h-fit mx-auto">
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold text-lg">{testimonial.name}</h3>
        <p className="text-green-500">{testimonial.type}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          fill={i < testimonial.rating ? "currentColor" : "none"}
          className={`w-5 h-5 ${
            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <p className="text-gray-600">{testimonial.text}</p>
  </div>
);

function Testimonials() {
  const testimonials = [
    {
      name: "Robert A. Voltaire",
      image: "assets/robert-voltaire-RIZV7QXV.png",
      type: "Store link",
      rating: 5,
      text: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
    {
      name: "Quinten Barney",
      image: "assets/quinten-barney-CHC7B3FG.png",
      type: "Etsy Merchant",
      rating: 5,
      text: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    },
    {
      name: "Nikki",
      image: "assets/nikki-TJP4NANB.png",
      type: "Store link",
      rating: 4,
      text: " Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze. ",
    },
    {
      name: "April showers",
      image: "assets/april-showers-BCJ7SD2U.jpeg",
      type: "Store link",
      rating: 4,
      text: " I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business. ",
    },
  ];

  return (
    <section className="py-8 my-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between md:mx-4 px-6 py-8  md:px-16 md:py-16 space-y-6 lg:space-y-0 lg:space-x-12 ">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">
            Trusted by over 8M sellers around the world
          </h1>
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-600">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
      </div>

      <div className="hidden md:block max-w-6xl mx-auto px-4 h-fit relative py-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonials.indexOf(testimonial)}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="md:hidden max-w-6xl mx-auto px-4 h-fit relative py-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonials.indexOf(testimonial)}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
