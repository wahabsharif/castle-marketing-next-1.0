import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/LocationAndProximity.module.css";

import locationImage from "@/images/castle-heights/castle-heights-location.png";
import proximityImage from "@/images/castle-heights/castle-heights-proximity.png";

const LocationAndProximity = () => {
  const [displayImage, setDisplayImage] = useState("location");

  const showLocationImage = () => {
    if (displayImage !== "location") {
      setDisplayImage("location");
    }
  };

  const showProximityImage = () => {
    if (displayImage !== "proximity") {
      setDisplayImage("proximity");
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className="auto-container">
        <div className={styles.secTitle}>
          <h2>
            Location & Proximity
            <span className="dot">.</span>
          </h2>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              displayImage === "location" && styles.activeButton
            }`}
            onClick={showLocationImage}
          >
            See Location
          </button>
          <button
            className={`${styles.button} ${
              displayImage === "proximity" && styles.activeButton
            }`}
            onClick={showProximityImage}
          >
            See Proximity
          </button>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={`${styles.image} ${
                displayImage === "proximity" && styles.hidden
              }`}
              src={locationImage}
              alt="Location"
              layout="responsive"
              width={800}
              height={600}
            />
            <Image
              className={`${styles.image} ${
                displayImage === "location" && styles.hidden
              }`}
              src={proximityImage}
              alt="Proximity"
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAndProximity;
