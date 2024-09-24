import React, { useState } from "react";
import {
  Shirt,
  Tag,
  Package,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Plus,
} from "lucide-react";

const FeatureCard = ({ icon, title, subtitle, description }) => (
  <div className="flex flex-col justify-center items-center text-center md:block md:text-start">
    <div className="mb-4">{icon}</div>
    <h2 className="text-xl font-bold mb-2">
      <span className="text-green-500">{title}</span>
      <br />
      <span className="text-gray-800">{subtitle}</span>
    </h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductCustomizationComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <img src="src/assets/custom-products.png" className="w-32 h-32 " />,
      title: "CREATE",
      subtitle: "custom products",
      description:
        "Easily add your designs to a wide range of products using our free tools",
    },
    {
      icon: <img src="src/assets/your-products.png" className="w-32 h-32 " />,
      title: "SELL",
      subtitle: "on your terms",
      description: "You choose the products, sale price, and where to sell",
    },
    {
      icon: <img src="src/assets/fullfillment.png" className="w-32 h-32 " />,
      title: "WE HANDLE",
      subtitle: "fulfillment",
      description:
        "Once an order is placed, we automatically handle all the printing and delivery logistics",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className=" bg-gray-200 px-4 py-12 md:py-24 min-h-screen">
      <div className="bg-white md:bg-transparent rounded-2xl mx-auto md:relative flex flex-col md:block w-full md:h-screen container mb-16 md:py-24">
        <div className=" relative md:absolute inset-0 z-10 min-h-[25rem] md:w-[39.5%] bg-clothes bg-no-repeat bg-center bg-cover rounded-2xl">
          <img
            src="src/assets/clothes-bottom-53OO5ML3.svg"
            alt="clothes-bottom"
            className="w-[70%] absolute bottom-0  right-0"
          />
          <img
            src="src/assets/s3.svg"
            alt="clothes-bottom"
            className="hidden md:block w-full md:w-[300px] md:absolute bottom-0 -right-28"
          />
        </div>

        <div className="md:absolute md:h-fit md:bottom-0 md:right-0 z-0 bg-white px-4 py-6 md:pl-[57%] md:pr-[13.5%] md:pt-[7%] md:pb-[9%] rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Easily add your design to a wide range of products
          </h2>
          <p className="text-gray-600 mb-6">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#" className="text-green-500 flex items-center font-medium">
            All products <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>


      <div className="max-w-7xl mx-auto py-12 sm:px-8 lg:px-16">
        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div className="relative">
            <FeatureCard {...features[currentSlide]} />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevSlide}
                className="bg-white p-2 rounded-full shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextSlide}
                className="bg-white p-2 rounded-full shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {features.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentSlide ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomizationComponent;
