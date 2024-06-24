import React from "react";
import styles from "@/styles/DownloadBrochure.module.css";

const DownloadBrochure = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/castle-marketing-profile.pdf";
    link.download = "Castle Heights Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="auto-container">
      <div className={styles.secTitle}>
        <h2>
          Castle Download Brochure
          <span className="dot">.</span>
        </h2>
      </div>
      <div className={styles.centerContainer}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default DownloadBrochure;
