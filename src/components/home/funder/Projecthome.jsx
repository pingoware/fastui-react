import React from 'react';
import Figma from './Figma';

function Projecthome(props) {
  return (
    <div className="relative text-white">
      <section 
        className="relative bg-cover bg-center p-4 md:p-8 lg:p-16 h-screen flex flex-col justify-end" 
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="relative flex flex-col items-start z-10 space-y-4 md:space-y-6 mb-4">
          <div className="border-b border-gray-400 w-fit mb-2">
            <div className="inline-block text-gray-400 text-sm md:text-base">{props.time}</div>
          </div>
          <div className="flex flex-col items-start max-w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{props.title}</h1>
            <div className="text-base md:text-lg">{props.description}</div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-4 flex-grow">
              <button className="border border-white/50 py-2 px-4 md:py-2 md:px-6 bg-transparent shadow-md rounded-full hover:bg-gray-800">
                <div className="text-sm md:text-lg font-medium">Design</div>
              </button>
              <button className="border border-white/50 py-2 px-4 md:py-2 md:px-6 bg-transparent shadow-md rounded-full hover:bg-gray-800">
                <div className="text-sm md:text-lg font-medium">Development</div>
              </button>
              <button className="border border-white/50 py-2 px-4 md:py-2 md:px-6 bg-transparent shadow-md rounded-full hover:bg-gray-800">
                <div className="text-sm md:text-lg font-medium">Maintenance</div>
              </button>
              <Figma ele={props.ele} />
            </div>
            
            <button className="border border-white/50 py-2 px-4 md:py-2 md:px-6 bg-white text-black shadow-md rounded-full flex items-center gap-2 hover:bg-gray-200">
              <div className="text-sm md:text-lg font-medium">View Project</div>
              <img className="w-5 h-5 md:w-6 md:h-6" src="/arrowupright.svg" alt="arrow icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projecthome;
