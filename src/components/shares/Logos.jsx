import React from 'react';

function Logos({logoData}) {
  return (
    <div className="overflow-hidden">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
      <div className="relative text-white font-space-grotesk py-12 bg-black">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Projects featured on</h2>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide px-4 md:px-8 gap-6 md:gap-10">
          {logoData.map((logo, index) => (
            <img
              key={index}
              className={`${logo.className} object-contain`}
              loading="lazy"
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Logos;
