import React from "react";
import CarRobber from "../assets/Images/CarRobber.jpg";
import OnlinePayment from "../assets/Images/OnlinePayment.jpg";
import MapLocation from "../assets/Images/MapLocation.jpg";
import UserDashboard from "../assets/Images/UserDashboard.jpg";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <>
      <div className="text-white flex-col mt-10">
        <div className="text-4xl flex justify-center items-center">
          Your Parking Experience, Upgraded
        </div>
        <p className="opacity-50 m-2 flex justify-center items-center">
          Smart tools that make parking faster, safer, and easier—built for real
          everyday use, from finding the perfect spot to checking in without
          delays.
        </p>

        {/* Feature 1 */}
        <div className={`flex ml-11 ${styles.features_blocks}`}>
          <div className="flex justify-center items-center mt-7 bg-[#05122b] h-72 w-[68rem] rounded-xl">
            <img
              src={CarRobber}
              alt="Anti thief"
              className="object-contain w-80 h-60 rounded-lg"
            />
            <div className="m-6">
              <p className="text-3xl w-auto">Security Guard or Anti Thief</p>
              <p className="w-2xl mt-5 opacity-70">
                Your vehicle's safety is never left to chance. Our system
                combines on-ground security guard monitoring with smart
                anti-theft features to keep every parking spot protected.
                Real-time surveillance checks, alert notifications, and
                controlled access ensure only authorized users can enter the
                premises. Every vehicle entry and exit is verified, creating a
                secure environment that reduces risks and keeps your parking
                experience worry-free.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className={`flex justify-end mr-9 ${styles.features_blocks}`}>
          <div className="flex justify-center items-center mt-7 bg-[#05122b] h-72 w-[68rem] rounded-xl">
            <div className="m-6">
              <p className="text-3xl w-auto">Easy online payments</p>
              <p className="w-2xl mt-5 opacity-70">
                Users can pay instantly through UPI, cards, wallets, or net
                banking. The system automatically calculates the total cost
                based on parking duration, applies dynamic or fixed pricing
                rules, and generates a secure digital receipt for every
                transaction. Payment confirmations, refunds, and billing history
                are all tracked in one place, removing the need for cash,
                reducing errors, and preventing disputes between users and
                owners. This creates a smoother, faster, and far more reliable
                payment experience for everyone using the platform.
              </p>
            </div>
            <img
              src={OnlinePayment}
              alt="Online Payment"
              className="object-cover w-80 h-60 rounded-lg"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className={`flex ml-11 ${styles.features_blocks}`}>
          <div className="flex justify-center items-center mt-7 bg-[#05122b] h-72 w-[68rem] rounded-xl">
            <img
              src={MapLocation}
              alt="Map Location"
              className="object-cover w-80 h-60 rounded-lg"
            />
            <div className="m-6">
              <p className="text-3xl w-auto">Accurate directions</p>
              <p className="w-2xl mt-5 opacity-70">
                Integrated map-powered navigation guides users directly to the
                parking spot with precision. The system provides turn-by-turn
                directions, highlights the correct entry points, and uses nearby
                landmarks to prevent confusion. Whether the area is crowded,
                complex, or unfamiliar, the navigation flow ensures users reach
                the exact spot smoothly and without unnecessary detours. It
                removes the frustration of circling around, making arrival
                quick, predictable, and stress-free.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className={`flex justify-end mr-9 ${styles.features_blocks}`}>
          <div className="flex justify-center items-center mt-7 bg-[#05122b] h-72 w-[68rem] rounded-xl">
            <div className="m-6">
              <p className="text-3xl w-auto">Parking Owner Dashboard</p>
              <p className="w-2xl mt-5 opacity-70">
                Parking owners get a complete management dashboard that puts
                every part of their operation in one place. They can add new
                parking spots with photos and details, adjust pricing based on
                demand, monitor live occupancy, and handle reservations as they
                come in. The dashboard also provides clear earnings reports,
                booking history, peak-hour insights, and payout tracking—making
                it easier to understand performance and optimize availability.
                With powerful tools for configuration, analytics, and control,
                owners can run their parking business efficiently and
                transparently from a single interface.
              </p>
            </div>
            <img
              src={UserDashboard}
              alt="User Dashboard"
              className="object-cover w-80 h-60 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
