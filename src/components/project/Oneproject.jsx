import React from 'react';
import { Link } from 'react-router-dom';


function Oneproject(props) {
  return (
    <div className="relative mt-4 w-full max-w-xs rounded-md p-4 md:max-w-sm lg:max-w-md xl:max-w-lg">
      <div className="flex flex-col gap-4">
        <div className="relative flex flex-col">
          <img src={props.image} alt="Project Image" className="rounded-md w-full object-cover" />
          <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-xs text-gray-400">July 23, 2023</div>
        </div>
        <div className="flex items-center justify-between gap-2">
  <h1 className="text-lg font-semibold text-white flex-1 min-w-0 overflow-hidden text-ellipsis">{props.title}</h1>
  <Link
    to={`/project/${props.id}`}
    className="flex items-center justify-center gap-2 border border-white/50 p-2.5 bg-transparent shadow-md rounded-full bg-gradient-to-br from-white to-gray-200 transition-transform duration-300 hover:scale-105"
  >
    <div className="text-sm font-medium text-black">View Project</div>
    <img className="w-4 h-4" alt="" src="/arrowupright.svg" />
  </Link>
</div>

        <div className="text-sm leading-relaxed text-[#dcdcdc]">
          {props.description}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center border border-white/50 p-2 bg-transparent shadow-md rounded-full hover:bg-gray-200/5 hover:border-gray-200/50">
            <div className="text-sm leading-6 font-medium text-white">Design</div>
          </button>
          <button className="flex items-center justify-center border border-white/50 p-2 bg-transparent shadow-md rounded-full hover:bg-gray-200/5 hover:border-gray-200/50">
            <div className="text-sm leading-6 font-medium text-white">Development</div>
          </button>
          <button className="flex items-center justify-center border border-white/50 p-2 bg-transparent shadow-md rounded-full hover:bg-gray-200/5 hover:border-gray-200/50">
            <div className="text-sm leading-6 font-medium text-white">Maintenance</div>
          </button>
        </div>

        <div className="flex gap-2">
          <img src="/Fram.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Oneproject;
