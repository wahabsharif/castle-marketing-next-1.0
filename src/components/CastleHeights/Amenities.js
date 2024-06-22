import styles from "@/styles/Amenities.module.css";
import Image from "next/image";
import amenitiesData from "@/data/CastleHeights/amenitiesData";

const Amenities = () => {
  return (
    <section>
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            Amenities
            <span className="dot">.</span>
          </h2>
        </div>
        <div className={styles.amenitiesContainer}>
          {amenitiesData.map((amenity, index) => (
            <div key={index} className={styles.amenityCard}>
              <Image
                src={
                  require(`@/images/castle-heights/amenities/${amenity.image}`)
                    .default.src
                }
                alt={amenity.title}
                className={styles.amenityImage}
                width={100} // Adjust width to fit the container
                height={100}
              />
              <h3 className={styles.amenityTitle}>{amenity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
