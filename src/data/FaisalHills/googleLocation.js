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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53104.51812464036!2d72.74065975596132!3d33.70811096424753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa1161e19c697%3A0xc96626c84db162cd!2sFaisal%20Hills%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708180317828!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
