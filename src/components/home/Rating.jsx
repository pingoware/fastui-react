import React from 'react'

function Rating(props) {
  return (
    <div>
      <div className="flex flex-row gap-5 max-w-full w-96 text-left text-8xl text-white font-space-grotesk">
        <div className="flex flex-col items-start justify-start gap-2 min-w-[120px]">
          <b className="relative leading-[104px] inline-block min-w-[105px] z-2">{props.num}</b>
          <div className="relative text-lg leading-6 font-medium text-gray-200 z-2">Completed projects</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 min-w-[120px]">
          <b className="relative leading-[104px] z-2">{props.rate}</b>
          <div className="relative text-lg leading-6 font-medium text-gray-200 z-2">Average rating</div>
        </div>
      </div>
    </div>
  )
}

export default Rating
