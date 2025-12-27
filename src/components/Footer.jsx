import React from "react";
import styles from "../components/Footer.module.css";

const Footer = () => {
  const cities = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Bharuch",
    "Bhavnagar",
    "Bhuj",
    "Dahod",
    "Gandhinagar",
    "Godhra",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Mehsana",
    "Morbi",
    "Nadiad",
    "Navsari",
    "Patan",
    "Rajkot",
    "Surat",
    "Surendranagar",
    "Vadodara",
    "Valsad",
    "Vapi",
    "Veraval",
  ];

  return (
    <>
      <div className="bg-[#000814] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white text-3xl mt-6 mb-6">
            Popular Cities We Serve
          </div>
          <ul className={`${styles.footerCities}`}>
            {cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>

        {/* Br */}
        <div className="w-full h-px bg-[#041936] mt-5 mb-5"></div>

        {/* Contact */}
        <div className="text-white">
          <div className="flex flex-row gap-50">
            <div>
              <p className="text-2xl mb-4">Never miss an update</p>
              <p className="w-3xl opacity-50">
                Stay informed with the latest features, improvements, and
                announcements from ParkIQ. Get updates delivered straight to
                your inbox — no spam, just useful information that helps you
                park smarter every day.
              </p>
            </div>

            <div className="flex gap-1">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="example@gmail.com"
                className={styles.footerInput}
              />
              <button type="button" className={styles.footerBtn}>
                Join
              </button>
            </div>
          </div>

          {/* Developers */}
          <p className="mt-4 mb-4">
            <span className="opacity-50">&copy;2025 ParkIQ — Frontend by</span>{" "}
            <span className="opacity-90">Dhruvil Kapadiya</span>{" "}
            <span className="opacity-50">| Backend by</span>
            <span className="opacity-90"> Harshil Kothiya</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
