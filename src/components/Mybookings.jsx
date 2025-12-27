import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AnylysisBlocks from "./AnylysisBlocks";

import ParkingImage1 from "../assets/Images/ParkingImage1.jpg";
import BookingIcon24 from "../assets/Icons/BookingIcon24.png";
import TimeIcon24 from "../assets/Icons/TimeIcon24.png";
import CarIcon24 from "../assets/Icons/CarIcon24.png";
import RupeeSignIcon24 from "../assets/Icons/RupeeSignIcon24.png";
import GreenTimerIcon16 from "../assets/Icons/GreenTimerIcon16.png";
import location16 from "../assets/Icons/location16.png";
import Footer from "./Footer";
import { FourSquare } from "react-loading-indicators";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/api/bookings")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  // ---- DATA ----
  // const bookings = [
  //   {
  //     id: "A-42",
  //     title: "Downtown Plaza Parking",
  //     address: "123 Main Street, Downtown District, New York, NY 10001",
  //     date: "Nov 30, 2025",
  //     time: "2:00 PM - 6:00 PM",
  //     spot: "A-42",
  //     amount: 28,
  //     status: "Active",
  //     image: ParkingImage1,
  //   },
  //   {
  //     id: "B-10",
  //     title: "City Mall Parking",
  //     address: "45 Queens Street, New York, NY 10002",
  //     date: "Dec 5, 2025",
  //     time: "9:00 AM - 1:00 PM",
  //     spot: "B-10",
  //     amount: 42,
  //     status: "Completed",
  //     image: ParkingImage1,
  //   },
  //   {
  //     id: "C-97",
  //     title: "Airport Zone",
  //     address: "NY Airport Road, Terminal 4",
  //     date: "Nov 28, 2025",
  //     time: "9:00 AM - 11:00 AM",
  //     spot: "C-97",
  //     amount: 30,
  //     status: "Cancelled",
  //     image: ParkingImage1,
  //   },
  // ];

  // ---- STATE ----
  const [status, setStatus] = useState("All");

  // ---- FILTER ----
  const filtered = bookings.filter((b) =>
    status === "All" ? true : b.status === status
  );

  // ---- STATUS BUTTONS ----
  const filters = ["All", "Active", "Completed", "Cancelled"];

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="mt-6 ml-7">
        <h2 className="text-white text-4xl font-Inter">My Bookings</h2>
        <p className="text-white opacity-70 mt-2 font-Inter">
          View and manage all your parking reservations
        </p>
      </div>

      {/* Analysis Blocks */}
      <div className="flex flex-wrap gap-5 ml-7 mt-9">
        <AnylysisBlocks />
      </div>

      {/* Status Filter Bar */}
      <div className="bg-[#1C2533] mt-10 m-auto w-[96%] rounded-lg p-3 flex gap-4 overflow-x-auto">
        {filters.map((f) => {
          const active = status === f;
          return (
            <button
              key={f}
              onClick={() => setStatus(f)}
              className={
                active
                  ? "bg-[#3DA36E] text-black font-semibold px-4 py-2 rounded-lg"
                  : "bg-[#2A3545] text-white px-4 py-2 rounded-lg hover:bg-[#334054]"
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Booking Cards */}
      {!loading && filtered.length === 0 && (
        <p className="text-center text-white opacity-70 mt-10 mb-10">
          No bookings found.
        </p>
      )}

      {loading ? (
        <div className="flex justify-center my-10">
          <FourSquare
            color="#32cd32"
            size="medium"
            text="Loading..."
            textColor="white"
          />
        </div>
      ) : (
        filtered.map((b) => (
          <div
            key={b.id}
            className="bg-[#2A3545] mt-10 m-auto w-[96%] rounded-xl flex flex-col lg:flex-row p-6 text-white font-Inter gap-6 mb-10"
          >
            {/* card */}
            <img
              src={`http://localhost:8080/images/${b.image}`}
              alt="Parking Spot"
              className="w-full lg:w-[12rem] h-72 object-cover rounded-xl"
            />

            <div className="flex-1 space-y-6">
              <div>
                <p className="text-2xl font-semibold">{b.title}</p>
                <p className="opacity-85 font-semibold flex items-center text-sm mt-2">
                  <img src={location16} alt="Location" className="mr-2" />
                  {b.address}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex items-center gap-4 bg-[#1E2836] p-3 rounded-lg">
                  <img src={BookingIcon24} alt="Date" className="w-6 h-6" />
                  <div>
                    <p className="text-xs opacity-80">Date</p>
                    <p className="text-sm">{b.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#1E2836] p-3 rounded-lg">
                  <img src={TimeIcon24} alt="Time" className="w-6 h-6" />
                  <div>
                    <p className="text-xs opacity-80">Time</p>
                    <p className="text-sm">
                      {b.startTime} - {b.endTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#1E2836] p-3 rounded-lg">
                  <img src={CarIcon24} alt="Spot" className="w-6 h-6" />
                  <div>
                    <p className="text-xs opacity-80">Spot</p>
                    <p className="text-sm">{b.spot}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#1E2836] p-3 rounded-lg">
                  <img src={RupeeSignIcon24} alt="Amount" className="w-6 h-6" />
                  <div>
                    <p className="text-xs opacity-80">Amount</p>
                    <p className="text-sm">₹{b.amount}</p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 bg-[#1E322A] border border-[#3DA36E] p-3 rounded-lg w-fit">
                <img src={GreenTimerIcon16} alt="Active" className="w-4 h-4" />
                <span className="text-sm font-semibold text-[#3DA36E]">
                  {b.status}
                </span>
              </div>

              <div className="flex gap-4">
                <button className="bg-[#1F2A38] px-4 py-2 rounded-md text-sm font-semibold">
                  View Details
                </button>
                <button className="bg-[#1F2A38] px-4 py-2 rounded-md text-sm font-semibold">
                  Navigate
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <Footer />
    </>
  );
};

export default MyBookings;
