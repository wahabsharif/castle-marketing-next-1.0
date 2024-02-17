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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2261232687265!2d73.20955647401442!3d33.599436941506895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfef56a5000629%3A0xb10aaf0f9d41e9bc!2sThe%20Arcadia!5e0!3m2!1sen!2s!4v1708179949318!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
