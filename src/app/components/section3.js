"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Section3.module.css";

const Section3 = () => {
  const [location, setLocation] = useState("Kaduna");
  const [isPaused, setIsPaused] = useState(false);
  const locations = ["Kaduna", "Abuja", "Kano"];

  useEffect(() => {
    if (!isPaused) {
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % locations.length;
        setLocation(locations[index]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, locations]);

  return (
    <section className={styles.container}>
      <div className={styles.right}>
        <h1 className={styles.mainHeading}>Founders Friday is coming to</h1>
        <h2
          className={styles.animatedHeading}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {location}
        </h2>
        <p className={styles.paragraph}>
          Join us for an exciting Founders Friday event! Connect with industry leaders, explore business opportunities, and unlock your entrepreneurial potential.
        </p>
        <button type="submit" className={styles.registerButton} aria-label="Register for Founders Friday">
          Register <FaArrowRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.left}>
        <Image
          src="/logo.png"
          alt="Founders Friday Logo"
          width={280}
          height={280}
          className={styles.logo}
          priority
        />
      </div>
    </section>
  );
};

export default Section3;
