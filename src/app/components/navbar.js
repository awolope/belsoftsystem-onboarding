import React from 'react';
import Link from 'next/link';
import {  FaArrowRight } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <img
          src="/logo.png" // Replace with your image path
          alt="Logo"
          className={styles.logoImage}
        />
        <Link href="/">Founder’s Friday</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.homelink}>Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Gallery</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      <div >  <li className= {styles.Register}>
          <Link  href="/">Register   </Link>
          <FaArrowRight className={styles.icon} />
        </li></div>
      </ul>
    </nav>
  );
};

export default Navbar;
