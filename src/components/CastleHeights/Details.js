import { detailsData } from "@/data/CastleHeights/detailsData";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Details = () => {
  return (
    <section className="portfolio-detailsData-info">
      <div className="auto-container">
        {detailsData.map(({ id, image, title, text }) => (
          <Row key={id} className="flex-md-row-reverse">
            <Col md={6}>
              <div className="portfolio-detailsData-info__image">
                <Image
                  src={
                    require(`@/images/update-26-02-2021/resources/${image}`)
                      .default.src
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={6} className="d-flex">
              <div className="my-auto">
                <div className="portfolio-detailsData-info__content">
                  <h3 className="portfolio-detailsData-info__title text-white ">
                    {title}
                  </h3>
                  <p className="portfolio-detailsData-info__text">{text}</p>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default Details;
