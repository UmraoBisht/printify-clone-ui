import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center container mx-auto px-4 md:mx-8 pt-[6rem] md:py-24">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Create and sell custom products
        </h1>
        <ul className="space-y-2 mb-8">
          <li className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            100% Free to use
          </li>
          <li className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            900+ High-Quality Products
          </li>
          <li className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Largest global print network
          </li>
        </ul>
        <div className="flex items-center justify-center sm:flex-row flex-col gap-2">
          <button className="bg-green-500 w-full text-white px-6 md:px-4 py-3 rounded-md hover:bg-green-600">
            Start for free
          </button>
          <button className="border w-full border-gray-300 text-gray-600 px-6 md:px-4 py-3 rounded-md hover:bg-gray-100 flex items-center justify-center">
            <Play className="h-5 w-5" /> How it works?
          </button>
        </div>
        <p className="text-green-500 mt-6">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className="md:w-1/2 relative bg-hero-pattern bg-no-repeat bg-cover z-0">
        <img
          src="assets/s1.svg"
          alt="T-shirt mockup"
          width={500}
          height={500}
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
