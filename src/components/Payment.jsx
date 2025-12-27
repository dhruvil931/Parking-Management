import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ❌ No state → block page
  if (!state) {
    return (
      <h2 className="text-center text-white mt-10">No booking data found.</h2>
    );
  }

  const { parking, hours, entryTime, vehicleNo, totalAmount } = state;

  // ❌ Vehicle number must exist (hard safety)
  if (!vehicleNo || vehicleNo.trim() === "") {
    return (
      <h2 className="text-center text-white mt-10">
        Vehicle number is required to proceed with payment.
      </h2>
    );
  }

  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const vehicle = vehicleNo.toUpperCase().replace(/\s+/g, "");
  const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;

  const handlePayment = async () => {
    // 🚫 VEHICLE VALIDATION
    if (!vehicleRegex.test(vehicle)) {
      alert("Invalid vehicle number (example: GJ01AB1234)");
      return;
    }

    // 🚫 PAYMENT VALIDATION
    if (method === "upi") {
      if (upiId.trim() === "") {
        alert("Enter a valid UPI ID");
        return;
      }
    }

    if (method === "card") {
      if (cardNumber.trim().length < 12) {
        alert("Invalid card number");
        return;
      }
      if (cvv.trim().length < 3) {
        alert("Invalid CVV");
        return;
      }
    }

    // try {
    //   const res = await fetch("http://localhost:8080/booking/confirm", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       parkingId: parking.id,
    //       vehicleNo: vehicle,
    //       hours,
    //       amount: totalAmount,
    //     }),
    //   });

    //   console.log("Response status:", res.status);

    //   if (!res.ok) {
    //     alert("Backend rejected payment");
    //     return;
    //   }

    navigate("/bookNow/payment-success", {
      state: {
        parking,
        hours,
        entryTime,
        vehicleNo: vehicle,
        totalAmount,
        method,
      },
    });
    // } catch (err) {
    //   console.error("FETCH ERROR:", err);
    //   alert("Backend not reachable / CORS issue");
    // }
  };

  const isVehicleValid = vehicleRegex.test(vehicle);

  return (
    <div className="min-h-screen bg-[#1E2836] text-white p-6 flex justify-center items-start">
      <div className="bg-[#2A3545] w-full max-w-[500px] rounded-xl p-6 shadow-xl">
        <h1 className="text-2xl font-semibold mb-5 text-center">Payment</h1>

        {/* BOOKING SUMMARY */}
        <div className="bg-[#1E2836] p-4 rounded-lg mb-5 text-sm space-y-1">
          <p className="font-semibold text-lg">{parking.parkingName}</p>
          <p>
            {parking.address}, {parking.city}
          </p>
          <p>
            <b>Entry Time:</b> {entryTime}
          </p>
          <p>
            <b>Hours:</b> {hours}
          </p>
          <p>
            <b>Vehicle:</b> {vehicle}
          </p>
          <p className="text-lg font-semibold mt-2">
            Total Amount: {totalAmount}₹
          </p>
        </div>

        {/* PAYMENT METHOD */}
        <h3 className="text-lg font-semibold mb-3">Select Payment Method</h3>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setMethod("upi")}
            className={`px-4 py-2 rounded-lg border ${
              method === "upi"
                ? "bg-green-600 border-green-600"
                : "border-gray-500"
            } cursor-pointer`}
          >
            UPI
          </button>

          <button
            onClick={() => setMethod("card")}
            className={`px-4 py-2 rounded-lg border ${
              method === "card"
                ? "bg-green-600 border-green-600"
                : "border-gray-500"
            } cursor-pointer`}
          >
            Card
          </button>
        </div>

        {/* DYNAMIC INPUTS */}
        {method === "upi" && (
          <div>
            <label className="text-sm">UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-2 bg-[#1E2836] mt-1 rounded-lg border border-gray-600"
            />
          </div>
        )}

        {method === "card" && (
          <div className="space-y-3">
            <div>
              <label className="text-sm">Card Number</label>
              <input
                type="text"
                placeholder="xxxx xxxx xxxx xxxx"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 bg-[#1E2836] mt-1 rounded-lg border border-gray-600"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-sm">Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full p-2 bg-[#1E2836] mt-1 rounded-lg border border-gray-600"
                />
              </div>

              <div className="flex-1">
                <label className="text-sm">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-2 bg-[#1E2836] mt-1 rounded-lg border border-gray-600"
                />
              </div>
            </div>
          </div>
        )}

        {/* PAY BUTTON */}
        <button
          onClick={handlePayment}
          className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 transition mt-6 h-11 rounded-lg font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
