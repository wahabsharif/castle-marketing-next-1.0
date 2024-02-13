import paymentPlan from "@/data/BlueWorldCity/paymentPlan";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Row } from "react-bootstrap";
import SinglePlan from "./SinglePlan";

const { title, newsData } = paymentPlan;

const PaymentPlan = ({ className = "", showTitle = true, isMore = false }) => {
  const ref = useActive("#blog");

  return (
    <section ref={ref} className={`news-section ${className}`}>
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title}
            <span className="dot">.</span>
          </h2>
        </div>

        <Row className="clearfix">
          {newsData.slice(0, showTitle ? 3 : undefined).map((news) => (
            <SinglePlan key={news.id} news={news} />
          ))}
        </Row>
        {isMore && (
          <div className="more-box">
            <Link href="/blog" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Download Full Payment Plan</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentPlan;
