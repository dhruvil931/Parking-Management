import React, { useEffect, useState } from "react";
import Logo from "../assets/Images/Logo.png";
import MenuIcon from "../assets/Icons/MenuIcon.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const photo = localStorage.getItem("userPhoto");

    if (loggedIn == "true") {
      setIsLoggedIn(true);
      setUserPhoto(photo);
    }
  }, []);

  return (
    <div className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.navbar_logo}>
        <Link to="/">
          <img src={Logo} alt="ParkIQ" />
        </Link>
      </div>

      {/* Center - Nav Links */}
      <ul
        className={`${styles.navbar_list} ${menuOpen ? styles.showMenu : ""}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-bookings">My Bookings</Link>
        </li>
        <li>
          <Link to="/favourite">Favourite</Link>
        </li>
        <li>
          <Link to="/help-center">Help Center</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        {/* Mobile-only Login/Register (inside dropdown) */}
        {!isLoggedIn ? (
          <>
            <li className={styles.mobile_login}>
              <Link to="/login">Login / Register</Link>
            </li>
          </>
        ) : (
          <img
            src={userPhoto}
            alt="Profile"
            className="w-10 h-10 rounded-full border cursor-pointer absolute right-16 top-[1.3rem] displayPic"
          />
        )}
      </ul>

      {/* Desktop-only Login/Register */}
      <li className={styles.desktop_login}>
        <Link to="/login">Login / Register</Link>
      </li>

      {/* Menu Icon (mobile) */}
      <div className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
        <img src={MenuIcon} alt="Menu" />
      </div>
    </div>
  );
};

export default Navbar;
