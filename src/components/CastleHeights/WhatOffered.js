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

  // Function to find data object for selected category
  const getCategoryData = (category) => {
    return whatOffered.find((item) => item.category === category);
  };

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
            {whatOffered.map((item) => (
              <li key={item.id}>
                <button
                  className={
                    selectedCategory === item.category ? styles["active"] : ""
                  }
                  onClick={() => handleClick(item.category)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["content"]}>
          {selectedCategory && (
            <div className={styles["card"]}>
              <div className={styles["card-text"]}>
                <div className={styles["title"]}>
                  <Image
                    src={
                      require(`@/images/castle-heights/${
                        getCategoryData(selectedCategory)?.icon
                      }`).default.src
                    }
                    alt=""
                    width={0}
                    height={0}
                  />
                  <h2>{getCategoryData(selectedCategory)?.title}</h2>
                </div>

                <p>{getCategoryData(selectedCategory)?.description}</p>
                {getCategoryData(selectedCategory)?.unitType && (
                  <p>
                    <strong>Unit Type:</strong>{" "}
                    {getCategoryData(selectedCategory)?.unitType}
                  </p>
                )}
                {getCategoryData(selectedCategory)?.area && (
                  <p>
                    <strong>Area:</strong>{" "}
                    {getCategoryData(selectedCategory)?.area}
                  </p>
                )}
                {getCategoryData(selectedCategory)?.bookingStartsFrom && (
                  <p>
                    <strong>Booking Starts From:</strong>{" "}
                    {getCategoryData(selectedCategory)?.bookingStartsFrom}
                  </p>
                )}
                {getCategoryData(selectedCategory)?.availableApartments && (
                  <p>
                    <strong>Available Apartments:</strong>{" "}
                    {getCategoryData(selectedCategory)?.availableApartments}
                  </p>
                )}
                {getCategoryData(selectedCategory)?.paymentPlanType && (
                  <p>
                    <strong>Payment Plan Type:</strong>{" "}
                    {getCategoryData(selectedCategory)?.paymentPlanType}
                  </p>
                )}
              </div>
              <div className={styles["image-container"]}>
                <Image
                  src={getCategoryData(selectedCategory)?.imgSrc}
                  alt={selectedCategory}
                  width={800} // Adjust width as needed
                  height={600} // Adjust height as needed
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatOffered;
