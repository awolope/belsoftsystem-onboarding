import React from "react";
import styles from "../styles/Section2.module.css";
import { FaArrowRight } from "react-icons/fa";
const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <div className={styles.head}>
        <h5>Sponsor The Next Friday</h5>
        <h1>
          Why Sponsor <br /> Founders Friday?
        </h1>
      </div>
      <div className={styles.container}>
        {" "}
        <div className={styles.card}>
          <div className={styles.circleRow}>
            <div className={styles.circle}>
              <h3>Networking Opportunities</h3>
              <p>
                Connect with industry leaders, founders, and potential partners.
              </p>
            </div>
            <div className={styles.circle2}>
              {" "}
              <h3> Community Impact</h3>
              <p>
                Support the growth and development of the startup ecosystem.
              </p>
            </div>
          </div>
          <div className={styles.circleRow}>
            <div className={styles.circle2}>
              <h3>Brand Association</h3>{" "}
              <p>
                Align your brand with innovation and entrepreneurial success.
              </p>
            </div>
            <div className={styles.circle}>
              {" "}
              <h3>Visibility</h3>{" "}
              <p>
                Gain exposure to a targeted audience of young professionals and
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h5>How To Sponsor</h5>
          <h6>Ready To Make An Impact?</h6>
          <p>
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday
          </p>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name"> Name</label>
              <input type="text" id="name" placeholder="Full name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Company Name (optional)</label>
              <input
                type="text"
                id="companyname"
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="number">Phone</label>
              <input type="number" id="number" placeholder="Phone Number" />
            </div>
            <button type="submit" className={styles.sponsorButton}>
              Sponsor <FaArrowRight className={styles.icon} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section2;
