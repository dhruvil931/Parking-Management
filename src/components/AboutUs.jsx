import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import parkingImg1 from "../assets/Images/about-parking-1.webp";
import parkingImg2 from "../assets/Images/about-parking-2.jpg";
import parkingImg3 from "../assets/Images/about-parking-3.jpg";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Redefining the Way You Park
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We’re building a smarter, safer, and more reliable parking
            experience for everyday drivers and parking owners.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#020617] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Parking should not be stressful, confusing, or time-consuming. Our
              mission is to eliminate uncertainty by offering real-time
              availability, secure check-ins, transparent pricing, and reliable
              directions—so users can park with confidence anywhere they go.
            </p>
          </div>
          <img
            src={parkingImg1}
            alt="Smart Parking"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#020617] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Our Platform
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-medium mb-3">Real-Time Accuracy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Live parking status ensures users only see spaces that are
                actually available—no outdated listings or false promises.
              </p>
            </div>

            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-medium mb-3">Security First</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Verified parking locations, monitored access, and digital
                check-ins help protect vehicles and prevent misuse.
              </p>
            </div>

            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-medium mb-3">Built for Scale</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed to support individuals, businesses, malls, and large
                parking hubs with ease and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="bg-[#020617] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={parkingImg2}
            alt="Parking Management"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Designed for Users & Owners
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Drivers get instant access to nearby parking with transparent
              pricing and guided navigation, while parking owners gain powerful
              dashboards to manage spaces, pricing, and occupancy efficiently.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This balance ensures a smoother experience on both sides,
              maximizing convenience and utilization.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#0f172a] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Built on Trust & Transparency
            </h2>
            <p className="text-gray-300 leading-relaxed">
              From secure digital payments to verified listings and user
              reviews, transparency is built into every layer of the platform.
              No hidden charges. No misleading availability.
            </p>
          </div>
          <img
            src={parkingImg3}
            alt="Secure Parking"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020617] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Smarter Parking Starts Here
        </h2>
        <p className="text-gray-400 mb-6">
          Whether you’re a daily commuter or a parking owner, our platform is
          built to simplify your journey.
        </p>
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium inline-block"
        >
          Explore Parking
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
