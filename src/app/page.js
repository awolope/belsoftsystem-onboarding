import React from 'react';
import Navbar from './components/navbar';
import Section1 from './components/section1';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Section1/>
     
    </div>
  );
};

export default Home;
