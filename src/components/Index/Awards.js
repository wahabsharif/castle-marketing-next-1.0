import { awardsData } from "@/data/Index/awardsData";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 10,
  slidesPerView: 4,
  autoplay: { delay: 200 },
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

const Awards = () => {
  return (
    <section className="project-six">
      <div className="auto-container">
        <div className="sec-title-six text-center">
          <p className="sec-title-six__text">
            <span>{tagline}</span>
          </p>
          <h2 className="sec-title-six__title">{title}</h2>
        </div>

        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper">
            {projects.map(({ id, image, category, title }) => (
              <SwiperSlide key={id}>
                <div className="project-six__item">
                  <Image
                    src={require(`@/images/awards/${image}`).default.src}
                    alt=""
                  />
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
