import React from "react";
import BookingIcon from "../assets/Icons/BookingIcon.png";
import TimeIcon from "../assets/Icons/TimeIcon.png";
import RupeeSignIcon from "../assets/Icons/RupeeSignIcon.png";

const AnylysisBlocks = () => {
  return (
    <>
      {/* Total Bookings */}
      <div className="bg-[#141d29] flex w-96 rounded-lg h-24 text-white">
        <img src={BookingIcon} alt="Book" className="m-7" />
        <div className="flex justify-center items-baseline flex-col ml-2">
          <p className="text-sm opacity-80 font-Inter">Total Bookings</p>
          <p className="text-3xl font-Inter font-semibold opacity-85">6</p>
        </div>
      </div>

      {/* Hours Parked */}
      <div className="bg-[#141d29] flex w-96 rounded-lg h-24 text-white">
        <img src={TimeIcon} alt="Time" className="m-7" />
        <div className="flex justify-center items-baseline flex-col ml-2">
          <p className="text-sm opacity-80 font-Inter">Hours Parked</p>
          <p className="text-3xl font-Inter font-semibold opacity-85">81h</p>
        </div>
      </div>

      {/* Total Bookings */}
      <div className="bg-[#141d29] flex w-96 rounded-lg h-24 text-white">
        <img src={RupeeSignIcon} alt="Rupees" className="m-7" />
        <div className="flex justify-center items-baseline flex-col ml-2">
          <p className="text-sm opacity-80 font-Inter">Total Spent</p>
          <p className="text-3xl font-Inter font-semibold opacity-85">₹255</p>
        </div>
      </div>
    </>
  );
};

export default AnylysisBlocks;
