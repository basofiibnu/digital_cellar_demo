import React from 'react';

const WhyCard = ({ title, subtitle }) => {
  return (
    <div className="p-1 flex-grow">
      <div className="bg-[#f9f8f6] rounded-3xl border border-[#d3d3d3] lg:min-h-[320px] p-5">
        <div className="text-[25px] xl:text-[30px] 2xl:text-[35px] font-semibold tracking-tighter leading-tight lg:w-[70%]">
          {title}
        </div>
        <div className="mt-5 text-base lg:text-xl tracking-tighter leading-snug">
          {subtitle}
        </div>
        <div className="mt-6 lg:mt-14">
          <div className="w-12 h-12 bg-yellow-200 rounded-[100%] " />
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
