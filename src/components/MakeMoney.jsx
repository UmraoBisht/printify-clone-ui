import React from "react";

function MakeMoney() {
  return (
    <div className="py-8 container mx-auto px-2 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-gray-50">
        <div className="bg-[#0B253A] relative p-8 rounded-lg text-white w-full lg:w-2/3 mx-auto">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">
              Make Money, Risk-Free
            </h1>
            <p className="text-sm mb-6">
              You pay for fulfillment only when you make a sale
            </p>

            <div className="bg-[#112D41] p-4 rounded-lg text-white mb-6">
              <div className="flex justify-between mb-3">
                <span>You sell a t-shirt</span>
                <span>$30</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>You pay for its production</span>
                <span>$12</span>
              </div>
              <hr className="border-gray-500 my-4" />
              <div className="flex justify-between text-lg font-bold text-green-500">
                <span>Your profit</span>
                <span>$18</span>
              </div>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-semibold">
              Start selling
            </button>
            <p className="mt-3 text-sm text-gray-300">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
          <div className="hidden lg:block absolute bottom-0 -right-10 mt-8 lg:mt-0 rounded-lg lg:ml-8 w-full lg:w-1/2">
            <img
              src="src/assets/s2.svg"
              alt="Earning Illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeMoney;
