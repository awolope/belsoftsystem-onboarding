import React from "react";
import Image from "next/image";
import styles from "../styles/section5.module.css";
import { FaArrowRight } from "react-icons/fa";
const Section5 = () => {
  return (
    <div className={styles.section5}>
      <div className={styles.section5img}>
        <Image
          src="/IMG_2721 1.png"
          alt="Founder's Friday"
          width={350}
          height={300}
        />
      </div>
      <div className={styles.founder}>
        <h4>At Founder’s Friday, Every Friday Is a Learning Experience!</h4>
        <p>
          Join us in our mission to transform ideas into impact and shape the
          future of Nigeria’s startup landscape.
        </p>

        <button className={styles.registerButton}>
          Register <FaArrowRight size={10} />
        </button>
      </div>
    </div>
  );
};
export default Section5;
