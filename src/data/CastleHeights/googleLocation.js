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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7567262238963!2d73.20741117402099!3d33.715243335452584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc36aa174e23f%3A0x6da73f4bcf753efe!2sElanza%20Creeks!5e0!3m2!1sen!2s!4v1708179737096!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
