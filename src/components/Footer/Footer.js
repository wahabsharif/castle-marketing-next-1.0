import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const {
  author,
  year,
  logo,
  text,
  socials,
  address,
  phone,
  phoneOne,
  phoneTwo,
  email,
  textBottom,
} = mainFooter;

const MainFooter = ({ normalPadding = true }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className="auto-container">
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <Image id="fLogo" src={logo.src} alt="" />
                    </Link>
                  </div>
                  <div className="text">{text}</div>
                  <ul className="social-links clearfix">
                    {socials.map(({ id, icon, href }) => (
                      <li key={id}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {typeof icon === "string" ? (
                            <span className={icon}></span>
                          ) : (
                            <svg
                              className="custom-svg-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25px"
                              height="25px"
                              viewBox="0 0 256 256"
                            >
                              <path fill="currentColor" d={icon.path} />
                            </svg>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contact</h6>
                  <ul className="contact-info">
                    <li className="address">
                      <span className="icon flaticon-pin-1"></span>{" "}
                      <TextSplit text={address} />
                    </li>
                    <li>
                      <span className="icon flaticon-call"></span>
                      <span>Fawad Khan Marwat</span>
                      <br />
                      <a href={`tel:${phoneOne.split(" ").join("")}`}>
                        {phoneOne}
                      </a>
                    </li>
                    <li>
                      <span className="icon flaticon-call"></span>
                      <span>Moeed Awan</span>
                      <br />
                      <a href={`tel:${phoneTwo.split(" ").join("")}`}>
                        {phoneTwo}
                      </a>
                    </li>
                    <li>
                      <span className="icon flaticon-call"></span>
                      <span>Adnan Ghulab</span>
                      <br />
                      <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                    </li>

                    <li>
                      <span className="icon flaticon-email-2"></span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget newsletter-widget">
                <div className="widget-content">
                  <h6>Get Latest Updates</h6>
                  <div className="newsletter-form">
                    <form>
                      <div className="form-group clearfix">
                        <input
                          type="text"
                          name="text"
                          placeholder="Enter Your Full Name"
                          required
                        />
                      </div>
                    </form>
                    <form>
                      <div className="form-group clearfix">
                        <input
                          type="text"
                          name="text"
                          placeholder="Enter Your Phone Number"
                          required
                        />{" "}
                      </div>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group clearfix">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email Address"
                          required
                        />
                        <button type="submit" className="theme-btn">
                          <span className="fa fa-arrow-right"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="text">{textBottom}</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              &copy; Copyright {year} by {author} | Developed With &hearts; By{" "}
              <a href="https://beacontechh.com/" target="_blank">
                BeaconTechh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
