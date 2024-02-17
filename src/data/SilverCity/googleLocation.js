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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13300.583073166381!2d72.92665381951858!3d33.54958881463823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9114c4222e99%3A0x1abf1408ba159efd!2sSilver%20City%20Islamabad!5e0!3m2!1sen!2s!4v1708180090326!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
