import React from "react";

const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <img src={imgSrc} alt={title} className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

function Working() {
  return (
    <section className="container mx-auto py-16 px-8 md:px-16">
      <div className="container mx-auto py-16 flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/background-IAMAETLT.svg" // replace with the correct image source
            alt="Products"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Easily add your design to a wide range of products
          </h1>
          <p className="text-gray-600 mb-6">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#" className="text-green-600 font-semibold hover:underline">
            All products →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            imgSrc="https://via.placeholder.com/100" // replace with actual image
            title="CREATE"
            description="Easily add your designs to a wide range of products using our free tools."
          />
          <FeatureCard
            imgSrc="https://via.placeholder.com/100" // replace with actual image
            title="SELL"
            description="You choose the products, sale price, and where to sell them."
          />
          <FeatureCard
            imgSrc="https://via.placeholder.com/100" // replace with actual image
            title="WE HANDLE fulfillment"
            description="Once an order is placed, we handle all the printing and delivery logistics."
          />
        </div>
      </div>
    </section>
  );
}

export default Working;
