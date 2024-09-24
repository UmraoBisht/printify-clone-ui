import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'src/assets/higher-profits.svg', // Replace with actual image path
      title: 'Higher Profits',
      description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
    },
    {
      icon: 'src/assets/robust-scaling.svg', // Replace with actual image path
      title: 'Robust Scaling',
      description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
    },
    {
      icon: 'src/assets/best-selection.svg', // Replace with actual image path
      title: 'Best Selection',
      description: 'With 900+ products and top quality brands, you can choose the best products for your business.',
    },
  ];

  return (
    <div className="bg-white py-12 container mx-auto px-4 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
