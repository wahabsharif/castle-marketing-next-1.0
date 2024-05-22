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
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3318.721744050399!2d73.19852067570211!3d33.71614837328546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQyJzU4LjEiTiA3M8KwMTInMDMuOSJF!5e0!3m2!1sen!2s!4v1716367303342!5m2!1sen!2s"
    />
  );
}

export default GoogleLocation;
