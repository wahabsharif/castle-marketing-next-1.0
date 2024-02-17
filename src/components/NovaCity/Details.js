import { detailsData } from "@/data/NovaCity/detailsData";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Details = () => {
  return (
    <section className="portfolio-details-info">
      <div className="auto-container">
        {detailsData.map(({ id, image, title, text }) => (
          <Row key={id} className="flex-md-row-reverse">
            <Col md={6}>
              <div className="portfolio-details-info__image">
                <Image
                  src={require(`@/images/nova-city/${image}`).default.src}
                  alt=""
                />
              </div>
            </Col>
            <Col md={6} className="d-flex">
              <div className="my-auto">
                <div className="portfolio-details-info__content">
                  <h3 className="portfolio-details-info__title text-white ">
                    {title}
                  </h3>
                  <p className="portfolio-details-info__text">{text}</p>
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
