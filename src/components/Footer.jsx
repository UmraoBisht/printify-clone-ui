import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-8 lg:px-12 ">
      <div className="container mx-auto flex flex-col justify-between mb-8">
        {/* Logo Section */}
        <div className="mb-8 flex flex-col md:flex-row md:justify-between items-center lg:mb-8">
          <img
            src="src/assets/logo-old-B5JY5YNQ.svg"
            alt="Printify Logo"
            className="mb-4 w-32 "
          />

          <div className="flex space-x-4">
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/facebook-icon.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/instagram-icon.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/linkedin-icon.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/X-Logo-Green.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/youtube-icon.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/Tiktok-1.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="src/assets/reddit-icon.svg"
                alt="Printify Logo"
                className="mb-4 w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Integrations Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Integrations</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">Shopify</a>
              </li>
              <li>
                <a href="#">Etsy</a>
              </li>
              <li>
                <a href="#">eBay</a>
              </li>
              <li>
                <a href="#">Amazon</a>
              </li>
              <li>
                <a href="#">TikTok Shop</a>
              </li>
              <li>
                <a href="#">PrestaShop</a>
              </li>
              <li>
                <a href="#">BigCommerce</a>
              </li>
              <li>
                <a href="#">Wix</a>
              </li>
              <li>
                <a href="#">WooCommerce</a>
              </li>
              <li>
                <a href="#">Squarespace</a>
              </li>
            </ul>
          </div>

          {/* Discover Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Discover</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Etsy print-on-demand</a>
              </li>
              <li>
                <a href="#">Shopify print-on-demand</a>
              </li>
              <li>
                <a href="#">WooCommerce print-on-demand</a>
              </li>
              <li>
                <a href="#">Wix print-on-demand</a>
              </li>
              <li>
                <a href="#">Squarespace print-on-demand</a>
              </li>
              <li>
                <a href="#">Make Your Own Shirt</a>
              </li>
            </ul>
          </div>

          {/* Start Selling Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Start selling</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">Custom T-shirts</a>
              </li>
              <li>
                <a href="#">Custom Hoodies</a>
              </li>
              <li>
                <a href="#">Custom Mugs</a>
              </li>
              <li>
                <a href="#">Custom Socks</a>
              </li>
              <li>
                <a href="#">Custom Backpacks</a>
              </li>
              <li>
                <a href="#">Custom Branding</a>
              </li>
              <li>
                <a href="#">Sell on Etsy</a>
              </li>
              <li>
                <a href="#">Sell on Social Media</a>
              </li>
              <li>
                <a href="#">Free T-shirt Designs</a>
              </li>
              <li>
                <a href="#">Custom Products</a>
              </li>
            </ul>
          </div>

          {/* Printify Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Printify</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#">Print on Demand</a>
              </li>
              <li>
                <a href="#">Print Providers</a>
              </li>
              <li>
                <a href="#">Experts Program</a>
              </li>
              <li>
                <a href="#">Printify Express Delivery</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Printify Quality Promise</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
              <li>
                <a href="#">Printing Profits Podcast</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-between px-2 my-6">
        {/* Center - Links */}
        <div className="text-center text-gray-500 text-sm mb-4 lg:mb-0">
          <a href="#" className="hover:text-gray-900">Intellectual Property Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Security</a>
        </div>

        {/* Right - Copyright */}
        <div className="text-center lg:text-right text-gray-500 text-sm">
          &copy; 2024 Printify, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
