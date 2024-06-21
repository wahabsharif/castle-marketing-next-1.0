// WhatOffered.js

import React, { useState, useEffect } from "react";
import { whatOffered, circleData } from "@/data/CastleHeights/whatOffered";
import styles from "@/styles/WhatOffered.module.css"; // Import CSS module for styles
import Image from "next/image";

const WhatOffered = () => {
  const [selectedCategory, setSelectedCategory] = useState("shops"); // Initialize with "shops"

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  // UseEffect to set initial selectedCategory on component mount
  useEffect(() => {
    setSelectedCategory("shops");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section>
      <div className="sec-title centered">
        <h2>
          What&apos;s Offered! <span className="dot">.</span>
        </h2>
      </div>
      <div className={styles["circle-container"]}>
        {circleData.map((circle) => (
          <div key={circle.id} className={styles["circle"]}>
            <div className={styles["circle-content"]}>
              <h3>{circle.title}</h3>
              <p>{circle.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["what-offered-container"]}>
        <div className={styles["button-list"]}>
          <ul>
            <li>
              <button
                className={selectedCategory === "shops" ? styles["active"] : ""}
                onClick={() => handleClick("shops")}
              >
                Shops
              </button>
            </li>
            <li>
              <button
                className={
                  selectedCategory === "apartments" ? styles["active"] : ""
                }
                onClick={() => handleClick("apartments")}
              >
                Apartments
              </button>
            </li>
            <li>
              <button
                className={
                  selectedCategory === "offices" ? styles["active"] : ""
                }
                onClick={() => handleClick("offices")}
              >
                Offices
              </button>
            </li>
            <li>
              <button
                className={
                  selectedCategory === "penthouses" ? styles["active"] : ""
                }
                onClick={() => handleClick("penthouses")}
              >
                Penthouses
              </button>
            </li>
          </ul>
        </div>
        <div className={styles["content"]}>
          {selectedCategory && (
            <div className={styles["card"]}>
              <Image
                src={
                  whatOffered.find((item) => item.category === selectedCategory)
                    .imgSrc
                }
                alt={selectedCategory}
                width={800} // Adjust width as needed
                height={600} // Adjust height as needed
              />
              <div className={styles["card-text"]}>
                <h2>
                  {
                    whatOffered.find(
                      (item) => item.category === selectedCategory
                    ).title
                  }
                </h2>
                <p>
                  {
                    whatOffered.find(
                      (item) => item.category === selectedCategory
                    ).description
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatOffered;
