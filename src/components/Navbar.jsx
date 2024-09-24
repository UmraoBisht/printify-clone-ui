import React, { useState } from "react";
import { ChevronDown, MenuIcon, X } from "lucide-react";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg overflow-x-hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">Manu</h1>
          <X className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <nav className="flex flex-col space-y-4 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold">Catalog</h2>
          </div>
          <div>
            <h2 className="text-lg font-bold"> How it works?</h2>
            {/* <ul className="text-gray-700 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Products
                </a>
              </li>
            </ul> */}
          </div>
          <div>
            <h2 className="text-lg font-bold">Pricing</h2>
          </div>
          <div>
            <h2 className="text-lg font-bold">Blog</h2>
          </div>
          <div>
            <h2 className="text-lg font-bold">Sevices</h2>
            {/* <ul className="text-gray-700 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Custom T-shirts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Custom Hoodies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sell on Etsy
                </a>
              </li>
            </ul> */}
          </div>
          <div>
            <h2 className="text-lg font-bold">Use-cases</h2>
            {/* <ul className="text-gray-700 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Custom T-shirts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Custom Hoodies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sell on Etsy
                </a>
              </li>
            </ul> */}
          </div>
          <div>
            <h2 className="text-lg font-bold ">Need help?</h2>
            {/* <ul className="text-gray-700 space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Custom T-shirts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Custom Hoodies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sell on Etsy
                </a>
              </li>
            </ul> */}
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-600 text-sm w-fit hover:text-gray-900 border px-2 h-full md:px-4 py-1">
              Log in
            </button>
            <button className="bg-green-500 text-sm w-fit text-white px-2 h-full md:px-4 py-2 rounded-md hover:bg-green-600">
              Sign up
            </button>
          </div>
          
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}

      <header className="border-b shadow-sm fixed w-full z-30 bg-white">
        <div className="px-6 md:px-8 py-2 md:py-4 flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <MenuIcon
                className="md:hidden text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
              <img
                src="/src/assets/logo-old-B5JY5YNQ.svg"
                alt="Printify Logo"
                width={120}
                height={40}
              />
            </div>

            <nav className="hidden lg:flex space-x-6 items-center ">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Catalog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                How it works <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                Use-cases <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                Need help? <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </nav>
            <div className="hidden sm:flex items-center gap-2">
              <button className="text-gray-600 text-sm w-fit hover:text-gray-900 border px-2 h-full md:px-4 py-1">
                Log in
              </button>
              <button className="bg-green-500 text-sm w-fit text-white px-2 h-full md:px-4 py-2 rounded-md hover:bg-green-600">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default Navbar;
