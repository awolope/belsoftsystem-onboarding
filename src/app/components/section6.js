"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/section6.module.css";
import { FaArrowRight, FaArrowLeft, FaChevronDown } from "react-icons/fa";

const attendees = [
  {
    id: 1,
    name: "Mr Belba Ngoy",
    img: "/Ellipse 309.png",
    text: "Always a remarkable experience for my team and myself",
  },
  {
    id: 2,
    name: "Mr Belba Ngoy",
    img: "/Ellipse 309.png",
    text: "Always a remarkable experience for my team and myself",
  },
  {
    id: 3,
    name: "Mr Belba Ngoy",
    img: "/Ellipse 309.png",
    text: "Always a remarkable experience for my team and myself",
  },
  {
    id: 4,
    name: "Mr Belba Ngoy",
    img: "/Ellipse 309.png",
    text: "Always a remarkable experience for my team and myself",
  },
  {
    id: 5,
    name: "Mr Belba Ngoy",
    img: "/Ellipse 309.png",
    text: "Always a remarkable experience for my team and myself",
  },
  {
    id: 6,
    name: "Mr Belba Ngoy",
    img: "/Ellipse 309.png",
    text: "Always a remarkable experience for my team and myself",
  },
];

const faq = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adi elit.",
    answer: "The event is focused on fostering tech innovation.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adi elit.",
    answer: "Anyone interested in tech and community building can attend.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adi elit.",
    answer: "The event is free to attend, but registration is required.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adi elit.",
    answer: "The event will take place online via Zoom.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adi elit.",
    answer: "Yes, you can sign up as a volunteer during registration.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adi elit.",
    answer: "Yes, recordings will be available after the event.",
  },
];

const AttendeesAndFAQ = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % attendees.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 3 + attendees.length) % attendees.length
    );
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Attendees Section */}
      <div className={styles.attendeesSection}>
        <h2 className={styles.heading}>What Our Attendees Have to Say</h2>
        <div className={styles.attendeesWrapper}>
         <div className={styles.arrowsWrapper}>
    <FaArrowLeft className={styles.arrow} onClick={handlePrev} />
    <FaArrowRight className={styles.arrow} onClick={handleNext} />
  </div>

          {attendees.slice(startIndex, startIndex + 3).map((attendee) => (
            <div key={attendee.id} className={styles.attendee}>
              <Image
                src={attendee.img}
                alt={attendee.name}
                className={styles.attendeeImage}
                width={100}
                height={100}
              />
              <p className={styles.attendeeText}>{attendee.text}</p>
            </div>
          ))}
         
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.heading}>FAQ</h2>
        <div className={styles.faqWrapper}>
          {faq.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {item.question} <FaChevronDown />
              </div>
              {openFAQ === index && (
                <div className={styles.faqAnswer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/logo.png" // Replace with your image path
        alt="Logo"
        width={30}
        height={30}
        className={styles.logoImage}
      />
      <h2 className={styles.registerH2}>Want To Be A Part Of Abuja’s Biggest Tech Community?</h2>
   <div className={styles.buttonDiv}>   <button className={styles.registerButton}>
        Register For Our Next Event{" "}
        <span>
          {" "}
          <Image
            src="/Right arrow.png"
            alt="Founder's Friday"
            width={10}
            height={10}
          />
        </span>
      </button></div>
    </div>
  );
};

export default AttendeesAndFAQ;
