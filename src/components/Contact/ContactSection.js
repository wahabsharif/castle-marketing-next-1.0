import { contactSection } from "@/data/Contact/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React from "react";

const MapBox = dynamic(() => import("./MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <section ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2 className="text-white">
            {title} <span className="dot">.</span>
          </h2>
        </div>

        {map && <MapBox />}
        {form && <FormBox inputs={inputs} />}
      </div>
    </section>
  );
};

export default ContactSection;
