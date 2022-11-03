import React from "react";

const Card = (props) => {
  return (
    <div className="flex-col w-[350px] h-[500px] bg-white rounded-[20px] mt-[10px] overflow-hidden hover:-translate-y-2 cursor-pointer">
      <div className="bg-slate-700 w-full h-1/2"></div>
      <div className="h-1/2 pl-[10px] pr-[10px]">
        <p className="font-bold text-black mt-[20px] mb-[20px]">Title</p>
        <div className="font-light text-black mb-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>

        <div className="font-bold text-black text-[20px]">Somthing Else</div>
      </div>
    </div>
  );
};

export default Card;
