import React from 'react'

function Ourporfolio(props) {
  return (
    <div className="relative flex flex-col items-end justify-start p-6 pt-26 pb-48 gap-28 text-left text-4xl md:text-6xl lg:text-8xl text-white font-space-grotesk bg-black rounded-b-[46px] border-b border-gray-500 overflow-hidden">
      <div className="absolute w-full h-[1740.1px] right-0 bottom-[-1140.1px] left-0">
        <img className="absolute top-[279px] left-[126px] w-[1935.5px] h-[1461.1px] object-contain translate-x-[130px] translate-y-[-190px]" alt="" src="/rectangle@2x.png" />
        <img className="absolute top-[-270px] left-0 w-[1440px] h-[1440px] mix-blend-overlay z-1" alt="" src={props.image} />
      </div>
      <div className="relative flex flex-col md:flex-row items-start justify-end w-full">
        <div className="flex flex-1 flex-col md:flex-row justify-start gap-4 md:gap-[65.4px]">
          <h1 className="relative lg:ml-11 inline-block text-[inherit] leading-[3rem] md:leading-[5rem] lg:leading-[114px] font-semibold min-w-full md:min-w-[467px] max-w-full">
            Our portfolio project
          </h1>
          <div className="flex flex-col items-start justify-start w-full md:w-[439.6px] pt-10 md:pt-[122px] text-base md:text-lg text-gray-200 min-w-full md:min-w-[439.6px] max-w-full">
            <div className="relative leading-[1.5rem] md:leading-[2rem] tracking-[0.01em]">
              Our thing is creating cool experiences for startups and tech companies. We make sure users and business needs are simpatico.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourporfolio
