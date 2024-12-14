"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Section3.module.css";

const Section3 = () => {
  const [location, setLocation] = useState("Kaduna");
  const locations = ["Kaduna", "Abuja", "Kano"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % locations.length;
      setLocation(locations[index]);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h1 className={styles.mainHeading}>Founders Friday is coming to</h1>
        <h2 className={styles.animatedHeading}>{location}</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. 
        </p>
        <button type="submit" className={styles.registerButton}>
          Register <FaArrowRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.left}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={280}
          height={280}
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default Section3;
