"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/section4.module.css";
import { FaArrowRight } from "react-icons/fa";
const Section4 = () => {
  const users = [
    { id: 1, name: "User 1", img: "/Ellipse 309.png" },
    { id: 2, name: "User 2", img: "/Ellipse 309.png" },
    { id: 3, name: "User 3", img: "/Ellipse 309.png" },
    { id: 4, name: "User 4", img: "/Ellipse 309.png" },
    { id: 5, name: "User 5", img: "/Ellipse 309.png" },
    { id: 6, name: "User 6", img: "/Ellipse 309.png" },
    { id: 7, name: "User 7", img: "/Ellipse 309.png" },
  ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const path = document.querySelector("#curvePath");
    const pathLength = path.getTotalLength();
    const spacing = pathLength / (users.length - 1);

    const calculatedPositions = users.map((_, index) => {
      const point = path.getPointAtLength(index * spacing);
      return { x: point.x, y: point.y };
    });

    setPositions(calculatedPositions);
  }, [users]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register And Be Part of Our Community</h1>
      <p className={styles.subheading}>
        Join our community of over 1000+ founders, developers, and tech junkies
        in general. Be inspired by people who live to inspire!
      </p>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 1000 400" className={styles.svg}>
          <path
            d="M50 350 C200 100, 400 100, 500 350 
               C600 100, 800 100, 950 350"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            id="curvePath"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4b0082" />
              <stop offset="100%" stopColor="#4b0082" />
            </linearGradient>
          </defs>
        </svg>

        {positions.map((pos, index) => (
          <div
            key={users[index].id}
            className={styles.userIcon}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={users[index].img}
              alt={users[index].name}
              className={styles.userImage}
            />
          </div>
        ))}
      </div>

      <button className={styles.registerButton}>
        Register Now <FaArrowRight className={styles.icon} />
      </button>
    </div>
  );
};

export default Section4;
