import React from "react";
import Section from "./components/section";
import Navbar from "./components/navbar";
import Section2 from "./components/section2";
import Section1 from "./components/section1";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import styles from "./styles/Home.module.css";
import Section5 from "./components/section5";
import AttendeesAndFAQ from "./components/section6";
import Footer from "./components/footer";
const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <AttendeesAndFAQ />
      <Footer/>
    </div>
  );
};

export default Home;
