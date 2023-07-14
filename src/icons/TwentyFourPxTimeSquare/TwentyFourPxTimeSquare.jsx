/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxTimeSquare = ({ color = "#112950", className }) => {
  return (
    <svg
      className={`twenty-four-px-time-square ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.43762 15.0001C3.43762 23.6714 6.32887 26.5626 15.0001 26.5626C23.6714 26.5626 26.5626 23.6714 26.5626 15.0001C26.5626 6.32887 23.6714 3.43762 15.0001 3.43762C6.32887 3.43762 3.43762 6.32887 3.43762 15.0001Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M19.2378 17.5226L14.999 14.9939V9.54263"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TwentyFourPxTimeSquare.propTypes = {
  color: PropTypes.string,
};
