import React from "react";
import Image from 'next/image';
//import { motion } from "framer-motion";
import styles from "../styles/section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.sectionContainer}>
        {/* Right Side - Text and Button */}
        <div className={styles.textSection}>
        <div className={styles.section}>
          <h2>Section 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at facilisis lorem.</p>
        </div>
        <div className={styles.section}>
          <h2>Section 2</h2>
          <p>Quisque tincidunt lorem sit amet arcu porttitor, vel tempor eros elementum.</p>
        </div>
        <div className={styles.section}>
          <h2>Section 3</h2>
          <p>Vivamus maximus, nisl sit amet ultricies congue, neque eros vehicula nisi, id euismod nisl.</p>
        </div>
        <button className={styles.actionButton}>Learn More</button>
      </div>

      {/* Left Side - Images */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <Image src="/logo.png" alt="Image 1" width={120} height={120} className={styles.imgSmall} />
        </div>
        <div className={styles.imageCard}>
          <Image src="/logo.png" alt="Image 2" width={180} height={180} className={styles.imgMedium} />
        </div>
        <div>  <div className={styles.imageCard}>
          <Image src="/logo.png" alt="Image 3" width={100} height={100} className={styles.imgLarge} />
        </div>
        <div className={styles.imageCard}>
          <Image src="/logo.png" alt="Image 4" width={120} height={120} className={styles.imgSmall} />
        </div></div>
      </div>

      {/* Thick Line */}
      <div className={styles.thickLine}></div>
    </div>
  );
};

export default Section1;
