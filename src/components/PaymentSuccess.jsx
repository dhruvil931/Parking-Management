import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const { state } = useLocation();
  const parking = state?.parking;

  return (
    <div className="min-h-screen bg-[#1E2836] flex items-center justify-center text-white p-6">
      <div className="bg-[#2A3545] p-8 rounded-xl text-center shadow-xl">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-lg mb-3">Your booking for</p>
        <p className="text-xl font-semibold mb-3">{parking?.parkingName}</p>
        <p>Amount Paid: {parking?.pricingPerHour}₹</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
