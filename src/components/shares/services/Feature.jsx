import React from 'react';

function Feature({ imgSrc, title, description }) {
  return (
    <div className="flex flex-col items-start justify-start rounded-3xl border border-gray-400 py-4 px-5">
      <div className="flex flex-col items-start justify-start gap-4">
        <img className="w-12 h-12 object-contain" loading="lazy" alt="" src={imgSrc} />
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-lg font-bold leading-tight md:text-xl">{title}</h2>
          <div className="text-sm leading-6 text-gray-200 md:text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
