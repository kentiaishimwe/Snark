/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxTimeSquare4 = ({ color = "#0065FF", className }) => {
  return (
    <svg
      className={`twenty-four-px-time-square-4 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.7501 12.0001C2.7501 18.9371 5.0631 21.2501 12.0001 21.2501C18.9371 21.2501 21.2501 18.9371 21.2501 12.0001C21.2501 5.0631 18.9371 2.7501 12.0001 2.7501C5.0631 2.7501 2.7501 5.0631 2.7501 12.0001Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15.3902 14.0181L11.9992 11.9951V7.6341"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

TwentyFourPxTimeSquare4.propTypes = {
  color: PropTypes.string,
};
