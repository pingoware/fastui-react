import React from 'react';
import Get from './Get';
import Rating from './Rating';

function Firstscreen(props) {
  return (
    <section className="flex flex-col items-center text-white text-[40px] md:text-[100px] font-space-grotesk">
      <div className="relative w-full bg-[#0b0b0b] overflow-hidden p-4 md:p-14 box-border gap-10 md:gap-40 flex flex-col">
        <div className="absolute w-[2517px] h-[2479.9px] bottom-[-1579.9px] -translate-x-[600px]">
          <img
            className="absolute top-[-270px] left-0 w-[1440px] h-[1440px] mix-blend-overlay z-1 object-contain"
            alt=""
            src={props.image}
          />
          <img
            className="relative top-[180px] w-full h-[2258.9px]"
            alt=""
            src={props.image1}
          />
        </div>

        <div className="flex flex-col justify-start gap-10 md:gap-[110px] w-full">
          <div className="flex flex-col md:flex-row items-start justify-end w-full px-0 md:px-3">
            <div className="flex flex-col md:flex-row gap-5 md:gap-[65.4px] w-full">
              <h1 className="relative flex-1 font-semibold text-inherit leading-tight md:leading-[110px] min-w-[300px] md:min-w-[760px] max-w-full">
                Let's craft your<br className="hidden md:block" />brand's unique<br className="hidden md:block" />story together.
              </h1>
              <div className="flex flex-col items-start justify-start w-full md:w-[439.6px] min-w-[300px] md:min-w-[439.6px] pt-10 md:pt-60 text-[14px] md:text-[18px] text-[#f0eef2]">
                <div className="relative w-full leading-[24px] md:leading-[32px] letter-spacing-[0.01em]">
                  Our thing is creating cool experiences for<br className="hidden md:block" />startups and tech companies. We make sure<br className="hidden md:block" />users and business needs are simpatico.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between p-1 md:px-11 pb-4 w-full md:w-[1100px]">
          <Rating num={props.num} rate={props.rate} />
          <div className="flex flex-col pt-10">
            <button className="flex flex-row items-center justify-center border border-white px-8 py-3 bg-transparent rounded-full z-20 gap-1 hover:bg-gray-400 cursor-pointer">
              <div className="relative text-lg leading-[28px] font-semibold">
                Our stories
              </div>
              <div className="flex flex-col pt-1">
                <img className="w-[24px] h-[24px]" alt="" src="/play.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Get />
    </section>
  );
}

export default React.memo(Firstscreen);
