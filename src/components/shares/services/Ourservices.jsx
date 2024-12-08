import React from 'react';
import Marketing from './Marketing';

function Ourservices({ features, mission }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#0B0B0B] py-8 text-white font-space-grotesk">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-16">
          <div className="mb-12 lg:mb-0 lg:w-1/2">
            <h1 className="text-3xl font-bold lg:text-6xl">Our Services</h1>
            <p className="mt-4 text-lg text-gray-300 lg:text-xl">
              {mission}
            </p>
            <a 
              href="mailto:contact@pingoware.tech"
              className="mt-6 inline-block rounded-full border border-white px-8 py-3 text-base font-medium text-black bg-white hover:bg-gray-300 lg:mt-8 lg:text-lg"
            >
              Let’s Talk
            </a>
          </div>
          <div className="lg:w-1/2">
            <Marketing features={features} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourservices;
