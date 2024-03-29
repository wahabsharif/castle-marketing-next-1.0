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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4504.554529739669!2d73.08694342171822!3d33.725327079879136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfe94cb5ced011%3A0xbd6792947a2a3d2!2sCastle%20Marketing!5e0!3m2!1sen!2s!4v1706782993326!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
