import React from "react";
import Section from "./components/section";
import Navbar from "./components/navbar";
import Section2 from "./components/section2"
import Section1 from "./components/section1";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Section1 />
      <Section />
      <Section2/>
    </div>
  );
};

export default Home;
