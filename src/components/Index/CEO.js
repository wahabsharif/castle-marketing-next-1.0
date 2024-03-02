import { ceoData } from "@/data/Index/ceoData";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image1, title, text1, text2, textList, signature } = ceoData;

const CEO = () => {
  const ref = useActive("#about");

  return (
    <section ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="inner">
              <div className="image-block animated fadeInLeft">
                <Image src={image1.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <TextSplit text={title} />
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">{text1}</div>
              </div>
              <div className="text">
                <p>
                  <b>{text2}</b>
                </p>
              </div>
              <div className="text clearfix">
                <div className="since">
                  <Image src={signature.src} alt="" />
                </div>
                <ul>
                  {textList.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CEO;
