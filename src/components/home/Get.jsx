import React from 'react';

function Get() {
  return (
    <div className="flex flex-col items-center justify-center box-border w-full self-stretch rounded-t-[46px] bg-[#0B0B0B] overflow-hidden p-10 md:p-[146px_60px_107px] z-[3] mt-[-48px] text-center text-[24px] md:text-[76px] text-white font-space-grotesk">
      <div className="flex flex-col items-center justify-center box-border w-full flex-1 rounded-[46px] border-l-0 md:border-l-2 border-r-0 md:border-r-2 border-white p-5 md:p-[61px_39px_62px] relative z-[1]">
        <h1 className="m-0 flex-1 relative text-[80%] leading-[36px] md:leading-[96px] font-semibold inline-block max-w-full">
          <span>Get to know the creative minds<br className="hidden md:inline" />behind </span>
          <span className="text-[#9d4edd]">Pingoware</span>
          <span>
            , and discover<br className="hidden md:inline" />our commitment to pushing<br className="hidden md:inline" />artistic boundaries and
            delivering<br className="hidden md:inline" />exceptional design solutions.
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Get;
