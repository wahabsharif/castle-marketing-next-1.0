import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const GalleryItem = ({ item = {} }) => {
  const { image, title, tagline, href } = item;

  return (
    <Col
      key={href}
      lg={4}
      md={6}
      sm={12}
      className="gallery-item position-absolute"
    >
      <Link href={`${href}`} legacyBehavior>
        <div className="inner-box">
          <figure className="image">
            <Image
              src={require(`@/images/gallery/${image}`).default.src}
              alt=""
            />
          </figure>
          <a className="lightbox-image overlay-box"></a>
          <div className="cap-box">
            <div className="cap-inner">
              <div className="cat title text-center">
                <span>
                  <h5>{title}</h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default GalleryItem;
