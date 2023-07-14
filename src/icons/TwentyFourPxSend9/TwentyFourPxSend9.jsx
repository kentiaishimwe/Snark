/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxSend9 = ({ color = "#112950", className }) => {
  return (
    <svg
      className={`twenty-four-px-send-9 ${className}`}
      fill="none"
      height="31"
      viewBox="0 0 31 31"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.8666 16.0477C14.8666 16.0477 -0.10425 12.9507 5.09819 9.94752C9.48837 7.4134 24.6183 3.05646 26.7321 4.18221C27.8578 6.29596 23.5009 21.4259 20.9667 25.8161C17.9636 31.0185 14.8666 16.0477 14.8666 16.0477Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M14.8666 16.0477L26.7321 4.18222"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TwentyFourPxSend9.propTypes = {
  color: PropTypes.string,
};
