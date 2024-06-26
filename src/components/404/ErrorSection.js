import { errorSection } from "./errorSectionData";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { image, title, text } = errorSection;

const ErrorSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    console.log(fromData.get("email"));
  };

  return (
    <section className="error-section">
      <div className="auto-container">
        <div className="content">
          <div className="big-text">
            <Image
              src={image.src}
              id="error-404"
              className="img-fluid"
              alt="page-not-found"
              width={500}
            />
          </div>
          <h2>{title}</h2>
          <div className="text">{text}</div>
          <div className="error-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group clearfix">
                <input
                  type="search"
                  name="email"
                  placeholder="Search here"
                  required
                />
                <button type="submit" className="theme-btn">
                  <span className="flaticon-search"></span>
                </button>
              </div>
            </form>
          </div>
          <div className="link-box">
            <Link href="/" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
