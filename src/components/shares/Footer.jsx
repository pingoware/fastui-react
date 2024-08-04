import React from 'react';

const Footer = (
  {
    Address,
    Postcode,
    AllRightReserved,
    linkInstagram,
    linkTwitter,
    linkLinkedIn
  }
) => {

  return (
    <footer className="bg-[#0B0B0B] text-white font-space-grotesk p-8" id="about-us" >
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center space-x-4 cursor-pointer">
            <div className="relative w-9 h-9">
              <div className="absolute w-[22.5px] h-[22.5px] overflow-hidden top-[0.01px] left-[19.82px] bg-[#9d4edd] rotate-[44deg] origin-top-left rounded-[1.61px]" />
              <div className="absolute w-[22.5px] h-[22.5px] overflow-hidden top-[11.9px] left-0 border-[2.4px] border-[#040404] box-border z-10 bg-[#9d4edd] rounded-[1.61px] m-0" />
            </div>
            <div className="font-medium leading-7">Pingoware</div>
          </div>
          <div className="text-[#aeaeae] space-y-1">
            <div className="leading-7">{Address}</div>
            <div className="leading-7">{Postcode}</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-16 text-[#f0eef2]">
          <div className="flex flex-col space-y-4">
            <div className="leading-7 cursor-pointer" >About</div>
            <div className="leading-7 cursor-pointer" >Services</div>
            <div className="leading-7 cursor-pointer">Works</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="leading-7 cursor-pointer">Instagram</div>
            <div className="leading-7 cursor-pointer" >Twitter</div>
            <div className="leading-7 cursor-pointer" >LinkedIn</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-[#aeaeae] text-sm">
        <div className="border-t border-[#ffffff33] pt-4 flex flex-col lg:flex-row lg:justify-between">
          <div className="pb-4 lg:pb-0">{AllRightReserved}</div>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="pb-4 lg:pb-0 lg:border-r lg:border-[#ffffff33] lg:pr-8 cursor-pointer" >Privacy Policy</div>
            <div>Label</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
