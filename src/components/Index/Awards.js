import { awardsData } from "@/data/Index/awardsData";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 10,
  slidesPerView: 5,
  autoplay: { delay: 3000 },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
};

const { tagline, title, projects } = awardsData;

/**
 * Renders the Awards component.
 *
 * @return {JSX.Element} The rendered Awards component.
 */
const Awards = () => {
  // Define the Awards component that renders a section with a list of awards and achievements.
  return (
    // Start the section with the class "project-six"
    <section className="project-six">
      <div className="auto-container">
        {/* Start the section's title */}
        <div className="sec-title-six text-center">
          {/* Display the tagline for the awards */}
          <p className="sec-title-six__text">
            <span>{tagline}</span>
          </p>
          {/* Display the title of the awards */}
          <h2 className="sec-title-six__title">{title}</h2>
        </div>

        {/* Start the Swiper component for the awards slideshow */}
        <Swiper {...options} className="thm-swiper__slider">
          {/* Start the swiper wrapper */}
          <div className="swiper-wrapper">
            {/* Map over the list of projects and render each one as a SwiperSlide */}
            {projects.map(({ id, image, category, title }) => (
              <SwiperSlide key={id}>
                {/* Start a project item */}
                <div className="project-six__item">
                  {/* Render an image from the awards directory */}
                  <Image
                    src={require(`@/images/awards/${image}`).default.src}
                    alt=""
                  />
                  {/* Display the category and title of the award */}
                  <div className="project-six__content">
                    <p className="project-six__category">{category}</p>
                    <h3 className="project-six__title">
                      <span>{title}</span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Awards;
