import useActive from "@/hooks/useActive";
import React, { useState } from "react";
import Masonry from "react-masonry-component";
import GalleryItem from "./GalleryItem";
import { gallerySectionData } from "./gallerySectionData";

const masonryOptions = {
  transitionDuration: 500,
};

const { items } = gallerySectionData;

const getCurrentItems = (current = "all") =>
  current === "all" ? items : items.filter((it) => it.filter.includes(current));

const getCount = (current = "") => getCurrentItems(current).length;

const GallerySection = ({ portfolio = false, similar = false }) => {
  const [current, setCurrent] = useState("all");
  const currentItems = getCurrentItems(current);
  const ref = useActive("#portfolio");

  return (
    <section
      ref={ref}
      className={`gallery-section${similar ? " similar-gallery" : ""}`}
      id="portfolio"
    >
      <div className="auto-container">
        <div className="mixitup-gallery">
          <div className={portfolio || similar ? "" : "upper-row clearfix"}>
            {!portfolio && (
              <div className={`sec-title${similar ? " centered" : ""}`}>
                <h2>
                  Gallery
                  <span className="dot">.</span>
                </h2>
              </div>
            )}
            {!similar && (
              <div
                className={`filters clearfix${portfolio ? " centered" : ""}`}
              >
                <ul className="filter-tabs filter-btns clearfix">
                  {tabBtns.map(({ id, name, tab }) => (
                    <li
                      onClick={() => setCurrent(tab)}
                      key={id}
                      className={`${current === tab ? "active " : ""}filter`}
                      data-role="button"
                    >
                      {name}
                      <sup>[{getCount(tab)}]</sup>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Masonry
            options={masonryOptions}
            className="row position-relative filter-list"
          >
            {currentItems.slice(similar ? 3 : 0).map((item) => (
              <GalleryItem item={item} key={item.id} />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
