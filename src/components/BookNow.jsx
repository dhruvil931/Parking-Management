import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParkingImage2 from "../assets/Images/ParkingImage2.jpg";
import { FourSquare } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

const bookNow = () => {
  const [locName, setLocName] = useState("");

  const [parkingData, setParkingData] = useState([]);

  const [error, setError] = useState("");

  const cities = ["Gujarat"];

  const popularParkings = ["VR Mall", "Akshardham", "Nexus Mall"];

  const [loading, setLoading] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const [selectedParking, setSelectedParking] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const [hours, setHours] = useState(1);
  const [entryTime, setEntryTime] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const totalAmount = selectedParking
    ? selectedParking.pricingPerHour * hours
    : 0;

  // Limited, Available, Full
  const statusStyle = {
    Available:
      "border-green-900 text-green-600 shadow-[0_4px_9px_rgba(39,174,96,0.15)]",
    Limited:
      "border-yellow-900 text-yellow-600 shadow-[0_4px_9px_rgba(241,196,15,0.15)]",
    Full: "border-red-900 text-red-600 shadow-[0_4px_9px_rgba(231,76,60,0.15)]",
  };

  useEffect(() => {
    setLoading(true);

    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setParkingData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAvailableParking = () => {
    if (locName == "") {
      setError("Please enter a location before searching");
      setFilteredData([]);
      return;
    }

    setError("");

    const search = locName.toLowerCase();

    const results = parkingData.filter(
      (item) =>
        item.parkingName.toLowerCase().includes(search) ||
        item.address.toLowerCase().includes(search) ||
        item.city.toLowerCase().includes(search)
    );

    setFilteredData(results);
  };

  return (
    <>
      <Navbar />

      {/* Book Block */}
      <div className="bg-[#2A3545] mt-9 w-[80%] m-auto rounded-xl mb-9">
        <div className="flex justify-between">
          <h3 className="m-8 text-xl font-semibold font-Inter text-white">
            Find Your Spot
          </h3>
          <select className="border-none outline-none font-medium text-foreground cursor-pointer m-8 font-Inter text-white bg-[#2A3545]">
            {cities?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        {/* Input */}
        <div className="w-[96%] m-auto">
          <input
            type="text"
            placeholder="Enter destination or address..."
            value={locName}
            onChange={(e) => setLocName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleAvailableParking();
              }
            }}
            className="w-full pl-5 h-13 text-white bg-[#1E2836] rounded-xl"
          />
          {error && <p className="text-red-500 text-sm mt-2 pl-2">{error}</p>}
        </div>
        {/* Popular cities */}
        <div className="flex gap-8 m-8 text-white">
          <button
            className="cursor-pointer"
            onClick={(e) => setLocName(e.target.innerText)}
          >
            {popularParkings[0]}
          </button>
          <button
            className="cursor-pointer"
            onClick={(e) => setLocName(e.target.innerText)}
          >
            {popularParkings[1]}
          </button>
          <button
            className="cursor-pointer"
            onClick={(e) => setLocName(e.target.innerText)}
          >
            {popularParkings[2]}
          </button>
        </div>
        {/* Submit btn */}
        <div className="w-[96%] m-auto">
          <button
            className="bg-blue-700 w-[100%] h-10 mb-6 rounded-xl text-white font-medium cursor-pointer hover:bg-blue-800"
            onClick={handleAvailableParking}
          >
            Find Available Parking
          </button>
        </div>
      </div>

      {/* Available Bookings */}
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
        filteredData.map((item) => (
          <div className="flex" key={item.id}>
            <div className="bg-[#2A3545] flex flex-wrap w-[70vw] m-auto rounded-xl text-white mb-8 overflow-hidden items-stretch">
              <div className="w-[18rem] flex">
                <img
                  src={ParkingImage2}
                  alt="Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col flex-1 p-4">
                <p className="text-2xl font-medium m-1">{item.parkingName}</p>
                <p className="opacity-70 m-1 line-clamp-2">
                  {item.address + " " + item.city}
                </p>

                <button
                  className={`w-1/4 m-1 border-2 rounded-sm ${
                    statusStyle[item.availabilityStatus]
                  }`}
                >
                  {item.availabilityStatus}
                </button>

                <p className="m-1">Price: {item.pricingPerHour}₹/Hour</p>
                <p className="m-1 opacity-85">Ratings: {item.userRating} ⭐</p>

                <div className="flex gap-2 m-1">
                  <button
                    onClick={() => {
                      setSelectedParking(item);
                      setShowModal(true);
                      setHours(1);
                      setEntryTime("");
                      setVehicleNo("");
                    }}
                    className="w-1/4 bg-green-600 h-9 cursor-pointer rounded-sm hover:bg-green-700"
                  >
                    Book
                  </button>

                  <button className="w-1/4 bg-blue-600 h-9 rounded-sm cursor-pointer hover:bg-blue-700">
                    Navigate
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <Footer />

      {showModal && selectedParking && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[9999]">
          <div className="bg-[#1E2836] text-white w-[90%] max-w-[520px] rounded-xl shadow-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {selectedParking.parkingName}
            </h2>

            {/* ENTRY TIME */}
            <div className="mb-3">
              <label className="text-sm font-medium">Entry Time</label>
              <input
                type="time"
                value={entryTime}
                onChange={(e) => setEntryTime(e.target.value)}
                className="w-full mt-1 p-2 bg-[#2A3545] rounded-md outline-none"
              />
            </div>

            {/* HOURS */}
            <div className="mb-3">
              <label className="text-sm font-medium">Number of Hours</label>
              <input
                type="number"
                min="1"
                max="24"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full mt-1 p-2 bg-[#2A3545] rounded-md outline-none"
              />
            </div>

            {/* VEHICLE NUMBER */}
            <div className="mb-4">
              <label className="text-sm font-medium">Vehicle Number</label>
              <input
                type="text"
                placeholder="GJ01AB1234"
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
                required
                className="w-full mt-1 p-2 bg-[#2A3545] rounded-md outline-none"
              />
            </div>

            {/* PRICE SUMMARY */}
            <div className="bg-[#2A3545] p-3 rounded-md mb-4">
              <p className="flex justify-between text-sm">
                <span>Price / Hour</span>
                <span>{selectedParking.pricingPerHour}₹</span>
              </p>
              <p className="flex justify-between text-sm mt-1">
                <span>Hours</span>
                <span>{hours}</span>
              </p>
              <hr className="my-2 border-white/10" />
              <p className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{totalAmount}₹</span>
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate("/bookNow/payment", {
                    state: {
                      parking: selectedParking,
                      hours,
                      entryTime,
                      vehicleNo,
                      totalAmount,
                    },
                  });
                }}
                disabled={!entryTime || hours < 1 || vehicleNo.trim() === ""}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 h-10 rounded-md cursor-pointer"
              >
                Proceed to Pay
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 h-10 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default bookNow;
