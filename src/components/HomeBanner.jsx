import React from "react";
import HomeBannerImage from "../assets/Images/HomeBannerImage.png";
import styles from "./HomeBanner.module.css";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.bannerWrapper}>
        <img
          src={HomeBannerImage}
          alt="Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <p className={styles.bannerTitle}>Find. Book. Park.</p>
          <p className={styles.bannerSubtitle}>
            Hassle-Free Parking Anytime, Anywhere
          </p>
          <button
            className={styles.bannerButton}
            onClick={() => navigate("/bookNow")}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
