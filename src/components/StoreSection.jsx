import React from "react";

const StoreSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col">
      <div className="text-center my-8 relative">
        <h1 className="font-bold text-4xl text-black">Connect your store</h1>
        <h2 className="text-sm mt-4 ">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </h2>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-30 z-0"></div>

        <div className="relative w-full md:h-[600px] h-[400px]">
          {/* Central Icon */}
          <div className="z-20 absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform  bg-green-500 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hover:scale-110">
            <img
              src="src/assets/printify-E3TBSF5R.svg"
              alt="Central Icon"
              className="w-[60%] h-[60%]"
            />
          </div>

          {/* Other Icons */}
          <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 top-[20%] left-[30%] hover:scale-110">
            <img
              src="src/assets/big-commerce-EGSGKPYX.svg"
              alt="BigCommerce"
              className="w-[70%] h-[70%]"
            />
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 top-[20%] right-[30%] hover:scale-110">
            <img
              src="src/assets/squarespace-FIBF2RIF.svg"
              alt="Squarespace"
              className="w-[70%] h-[70%]"
            />
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 top-1/2 right-[10%] translate-y-[-50%] hover:scale-110">
            <img
              src="src/assets/wix-MWZCZDTE.svg"
              alt="Wix"
              className="w-[70%] h-[70%]"
            />
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 bottom-[30%] right-[20%] hover:scale-110">
            <img
              src="src/assets/woo-PGFAG65X.svg"
              alt="WooCommerce"
              className="w-[70%] h-[70%]"
            />
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 bottom-[10%] left-[40%] hover:scale-110">
            <img
              src="src/assets/etsy-MXXFYORZ.svg"
              alt="Etsy"
              className="w-[70%] h-[70%]"
            />
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 bottom-[40%] left-[20%] hover:scale-110">
            <img
              src="src/assets/shopify-3NAPXPBF.svg"
              alt="Shopify"
              className="w-[70%] h-[70%]"
            />
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 bottom-[5%] left-[10%] hover:scale-110">
            <span className="font-bold text-3xl">API</span>
          </div>

          <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-white rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-300 transform z-10 bottom-[10%] right-[30%] hover:scale-110">
            <img
              src="src/assets/presta-54F6AYUU.svg"
              alt="PrestaShop"
              className="w-[70%] h-[70%]"
            />
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 w-full md:w-2/3 rounded-xl shadow-lg bg-talk-to-sale bg-no-repeat bg-center bg-clip-padding bg-cover">
          <p className="text-lg font-semibold text-green-900 pb-4">
            Are you a large business looking for custom solutions?
          </p>
          <a
            href="#"
            className="bg-white text-green-800 font-medium py-2 px-4 rounded-md shadow-md"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
