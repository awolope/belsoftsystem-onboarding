import React from "react";
import styles from "../styles/footer.module.css"
import { FaFacebook, FaInstagram, FaTwitter,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <FaFacebook className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaTwitter className={styles.icon} />
      </div>
      <div className={styles.navLinks}>
        <a href="#home" className={styles.link}>
          Home
        </a>
        <a href="#gallery" className={styles.link}>
          Gallery
        </a>
        <a href="#about" className={styles.link}>
          About Us
        </a>
        <a href="#contact" className={styles.link}>
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
