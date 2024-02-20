import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SinglePlan = ({ news = {} }) => {
  const { image, duration, size, installment, title, text } = news;

  return (
    <Col lg={4} md={6} sm={12} className="news-block animated fadeInUp">
      <div className="inner-box">
        <div className="image-box">
          <Link
            href="/pdf/castle-height-payment-plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={require(`@/images/castle-heights/${image}`).default.src}
              alt=""
            />
          </Link>
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span></span>Size: <u>{size}</u>
              </li>
              <li>
                <span></span> Down Payment: <u>{installment}</u>
              </li>
              <li>
                <span></span>installments: <u>{duration}</u>
              </li>
            </ul>
          </div>
          <h5>
            <Link
              href="/pdf/castle-height-payment-plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </h5>
          <div className="text">{text}</div>
        </div>
      </div>
    </Col>
  );
};

export default SinglePlan;
