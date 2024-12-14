import React from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <p className={styles.herop}>
            Join our premier monthly meetup for startup founders and tech
            visionaries
          </p>
          <h1>Connect, Collaborate, Innovate!</h1>
          <p>
           Every last Friday of the month, we bring together the brightest
minds in our local tech ecosystem. Whether you&apos;re a seasoned
entrepreneur or just starting your journey, Founder&apos;s Friday is your
launchpad for new ideas, valuable connections, and game-changing
opportunities.

          </p>
          <button className={styles.registerButton}>
            Register For Our Next Event{" "}
            <span>
              {" "}
              <Image
                src="/Right arrow.png"
                alt="Founder's Friday"
                width={17}
                height={10}
              />
            </span>
          </button>
          <br />
          <span className={styles.eventDate}>
            Join us for our next meetup on the 26th of July 2024.
          </span>
          <div className={styles.imgdiv}>
            <Image
              className={styles.img}
              src="/Ellipse 3 (3).png"
              alt="Founder's Friday"
              width={50}
              height={40}
            />{" "}
            <Image
              className={styles.img}
              src="/Ellipse 1.png"
              alt="Founder's Friday"
              width={50}
              height={40}
            />
            <Image
              className={styles.img}
              src="/Ellipse 2 (16).png"
              alt="Founder's Friday"
              width={50}
              height={40}
            />{" "}
            <Image
              className={styles.img}
              src="/Ellipse 4 (3).png"
              alt="Founder's Friday"
              width={50}
              height={40}
            />{" "}
            <Image
              className={styles.img}
              src="/Ellipse 5 (4).png"
              alt="Founder's Friday"
              width={50}
              height={40}
            />
          </div>
          <strong className={styles.herop}>
            Become a collaborator today{" "}
            <Image
              src="/BoxArrowUpRight.png"
              alt="Founder's Friday"
              width={6}
              height={6}
            />
          </strong>
        </section>

        {/* Diagonal Line */}
        <div className={styles.diagonalLine}></div>

        {/* Images Section */}
        <div className={styles.imagesGrid}>
          <div className={styles.imageCard}>
            <Image
              src="/Frame 16.png"
              alt="Founder's Friday"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/Frame 17 (2).png"
              alt="Founder's Friday"
              width={230}
              height={230}
            />
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/IMG_2501 1.png"
              alt="Founder's Friday"
              width={170}
              height={170}
            />
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/Frame 17 (1).png"
              alt="Founder's Friday"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.section2}>
        <div className={styles.section2img}>
          <Image
            src="/IMG_2857 1.png"
            alt="Founder's Friday"
            width={400}
            height={300}
          />
        </div>{" "}
        <div className={styles.about}>
          <h2>Who Are We?</h2>
          <p>
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>
          <div className={styles.buttons}>
            <button className={styles.registerButton}>
              Register <FaArrowRight size={10} />
            </button>
            <button className={styles.donateButton}>
              Donate{" "}
              <span>
                <Image
                  src="/Money bag.png"
                  alt="Founder's Friday"
                  width={13}
                  height={10}
                />
              </span>
            </button>
          </div>
          <strong className={styles.aboutpp}>
           Founder&apos;s Friday is more than just a meetup — it&apos;s a movement.

          </strong>
          <div className={styles.curvedLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
