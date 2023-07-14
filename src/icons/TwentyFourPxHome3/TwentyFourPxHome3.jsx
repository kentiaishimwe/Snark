/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxHome3 = ({ color = "#112950", className }) => {
  return (
    <svg
      className={`twenty-four-px-home-3 ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.3484 20.1693H18.6171"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 17.1413C3 10.1025 3.7675 10.5938 7.89875 6.7625C9.70625 5.3075 12.5187 2.5 14.9475 2.5C17.375 2.5 20.2437 5.29375 22.0675 6.7625C26.1987 10.5938 26.965 10.1025 26.965 17.1413C26.965 27.5 24.5163 27.5 14.9825 27.5C5.44875 27.5 3 27.5 3 17.1413Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TwentyFourPxHome3.propTypes = {
  color: PropTypes.string,
};
