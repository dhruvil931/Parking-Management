import React from "react";
import SearchIcon from "../assets/Icons/SearchIcon.png";
import BookIcon from "../assets/Icons/BookIcon.png";
import CarIcon from "../assets/Icons/CarIcon.png";
import SmileIcon from "../assets/Icons/SmileIcon.png";
import styles from "./FeaturesBlocks.module.css";

const FeaturesBlocks = () => {
  return (
    <>
      <div className="flex justify-center items-center text-white flex-col mt-10">
        <h3 className="text-4xl">How Work ParkIQ</h3>
        <p className="opacity-50 m-2">
          Your parking journey made simple from start to finish, with faster
          search, effortless booking, and smooth on-site access.
        </p>
      </div>

      <div
        className={`flex justify-center items-center gap-5 ${styles.features_blocks}`}
      >
        {/* Div 1 */}
        <div
          className={`flex justify-center items-center flex-col bg-[#b4e2ff] ${styles.infoDiv}`}
        >
          <img src={SearchIcon} alt="Search" />
          <p className="m-2 font-semibold text-lg">Find</p>
          <p className="w-60 text-center text-sm font-medium">
            Enter Location & Find Available Parking Spots.
          </p>
        </div>

        {/* Div 2 */}
        <div
          className={`flex justify-center items-center flex-col bg-[#ffc9e3] ${styles.infoDiv}`}
        >
          <img src={BookIcon} alt="Book" />
          <p className="m-2 font-semibold text-lg">Book</p>
          <p className="w-60 text-center text-sm font-medium">
            Select a spot and reserve it in just a few seconds.
          </p>
        </div>

        {/* Div 3 */}
        <div
          className={`flex justify-center items-center flex-col bg-[#fff6b4] ${styles.infoDiv}`}
        >
          <img src={CarIcon} alt="Park" />
          <p className="m-2 font-semibold text-lg">Park</p>
          <p className="w-60 text-center text-sm font-medium">
            Arrive at the spot and confirm your check-in when you reach.
          </p>
        </div>

        {/* Div 4 */}
        <div
          className={`flex justify-center items-center flex-col bg-[#ffd4b4] ${styles.infoDiv}`}
        >
          <img src={SmileIcon} alt="Enjoy" />
          <p className="m-2 font-semibold text-lg">Enjoy</p>
          <p className="w-60 text-center text-sm font-medium">
            Park smoothly and get on with your day without wasting time.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturesBlocks;
