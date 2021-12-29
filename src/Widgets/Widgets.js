import React from "react";
// import PropTypes from 'prop-types'
import "./Widgets.css";

const Widgets = (props) => {
  return (
    <div className="widgets">
      <iframe
        title="Janvier's Profile"
        src="https://www.facebook.com/muhawenimana.jamvier/"
        frameborder="0"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
