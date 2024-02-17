import React from "react";

function GoogleLocation() {
  return (
    <iframe
      width="100%"
      height="350"
      style={{ borderRadius: 10 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13274.32756055033!2d73.18824512044893!3d33.71976637592496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf5c0cbbaec5%3A0x83a8da3b2f54af5d!2sPark%20View%20City%20Islamabad!5e0!3m2!1sen!2s!4v1708180018029!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
