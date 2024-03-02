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
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <h2>
                <TextSplit text={title} />
              </h2>
              <div className="sub-title">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItem);
