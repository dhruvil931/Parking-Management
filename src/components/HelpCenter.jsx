import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HelpCenter = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Help Request Submitted:", form);
    alert("Your query has been submitted successfully");

    setForm({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#1E2836] text-white py-12">
        <div className="w-[80%] max-w-3xl m-auto bg-[#2A3545] rounded-xl p-8">
          <h2 className="text-3xl font-semibold mb-2">Help Center</h2>
          <p className="text-sm opacity-80 mb-6">
            Have a question or facing an issue? Fill out the form below and our
            support team will assist you.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded bg-[#1E2836] outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded bg-[#1E2836] outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={form.subject}
              onChange={handleChange}
              className="p-3 rounded bg-[#1E2836] outline-none"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="p-3 rounded bg-[#1E2836] outline-none"
            >
              <option value="">Select Category</option>
              <option>Booking Issue</option>
              <option>Payment Problem</option>
              <option>Account Issue</option>
              <option>Parking Spot Issue</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your issue in detail *"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="p-3 rounded bg-[#1E2836] outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition h-11 rounded font-medium"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HelpCenter;
