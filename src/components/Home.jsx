import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import HomeBanner from "../components/HomeBanner";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Features from "./Features";
import Price from "./Price";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <FeaturesBlocks />
      <Features />
      <Price />
      <Footer />
    </>
  );
};

export default Home;
