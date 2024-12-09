import React from "react";
import Image from "next/image";
//import { motion } from "framer-motion";
import styles from "../styles/section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Connect, Collaborate, Innovate!</h1>
        <p>
          Every last Friday of the month, we bring together the brightest minds
          in our local tech ecosystem. Whether you're a seasoned entrepreneur or
          just starting your journey, Founder's Friday is your launchpad for new
          ideas, valuable connections, and game-changing opportunities.
        </p>
        <button className={styles.registerButton}>
          Register For Our Next Event
        </button>
        <p className={styles.eventDate}>
          Join us for our next meetup on the 26th of July 2024.
        </p>
      </section>

      {/* Diagonal Line */}
      <div className={styles.diagonalLine}></div>

      {/* Images Section */}
      <section className={styles.images}>
        <div className={styles.image}>
          <Image
            src="/founders-friday-1.jpg"
            alt="Founder's Friday"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.image}>
          <Image
            src="/founders-friday-2.jpg"
            alt="Founder's Friday"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.image}>
          <Image
            src="/founders-friday-3.jpg"
            alt="Founder's Friday"
            width={300}
            height={200}
          />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>Who Are We?</h2>
        <p>
          Born from the vibrant startup ecosystem of Abuja, we recognized the
          need for a consistent, high-quality networking platform where
          founders, innovators, and tech enthusiasts could connect, share ideas,
          and foster collaboration.
        </p>
        <div className={styles.buttons}>
          <button className={styles.registerButton}>Register</button>
          <button className={styles.donateButton}>Donate</button>
        </div>
      </section>
    </div>
  );
};

export default Section1;
