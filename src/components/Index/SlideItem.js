import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";

const SlideItem = ({ slide = {} }, ref) => {
  const { bg, subtitle, title } = slide;

  return (
    <div ref={ref} style={{ userSelect: "none" }} className="slide-item">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/main-slider/${bg}`).default.src
          })`,
        }}
      ></div>
      <div className="left-top-line"></div>
      <div className="right-bottom-curve"></div>
      <div className="right-top-curve"></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <div className="sub-title">{subtitle}</div>
              <h1>
                <TextSplit text={title} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItem);
