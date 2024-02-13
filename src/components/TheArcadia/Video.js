import { videoData } from "@/data/TheArcadia/videoData";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import VideoModal from "./VideoModal";

const { image, videoId } = videoData;

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="portfolio-details-video">
        <div className="auto-container">
          <div className="portfolio-details-video__thumbnail">
            <Image src={image.src} alt="" />
            <div className="vid-link">
              <a onClick={() => setOpen(true)} className="lightbox-image">
                <div className="icon">
                  <span className="flaticon-play-button-1"></span>
                  <i className="ripple"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default Video;
