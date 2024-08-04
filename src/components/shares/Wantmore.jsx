import React from 'react';
import { Link } from 'react-router-dom';
function Wantmore() {
  return (
    <div className='flex justify-center items-center py-16 text-left text-4xl text-white font-space-grotesk'>
      <div className="flex flex-col items-center justify-start gap-6">
        <h1 className="m-0 h-[45px] relative text-inherit leading-[45px] font-semibold font-inherit inline-block">
          Want more?
        </h1>
        <div className="flex flex-row items-start justify-start px-9">
       <Link to="/project-page">
          <button className="cursor-pointer border border-white/50 py-2 px-5 bg-transparent shadow-sm rounded-full bg-radial-gradient hover:bg-gray-200/10">
            <div className="relative text-lg leading-7 font-medium font-space-grotesk text-white text-left">
              View All Projects
            </div>
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Wantmore;
