import React from "react";
import styles from "@/styles/DownloadBrochure.module.css";
import Image from "next/image";
import CMProfileBanner from "@/images/castle-heights/castle-profile-banner.png";

const DownloadBrochure = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/castle-heights-profile.pdf";
    link.download = "Castle Heights Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="auto-container">
      <div className={styles.secTitle}>
        <h2>
          Castle Heights Profile
          <span className="dot">.</span>
        </h2>
      </div>
      <div className={styles["image-container"]}>
        <Image
          src={CMProfileBanner}
          alt="Castle Marketing Profile"
          width={1600} // Adjust width as needed
          height={1200} // Adjust height as needed
        />
      </div>
      <div className={styles.centerContainer}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          See Full Profile
        </button>
      </div>
    </div>
  );
};

export default DownloadBrochure;
