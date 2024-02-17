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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13291.433492613109!2d72.86231278208605!3d33.60897899406575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99b54173606d%3A0xef184eca7aa389ec!2sFaisal%20Town%2C%20Islamabad%2C%20Rawalpindi%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708180249247!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
