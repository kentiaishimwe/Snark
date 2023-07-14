/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxHome6 = ({ color = "#112950", className }) => {
  return (
    <svg
      className={`twenty-four-px-home-6 ${className}`}
      fill="none"
      height="31"
      viewBox="0 0 31 31"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.8484 20.6693H19.1171"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3.5 17.6413C3.5 10.6025 4.2675 11.0938 8.39875 7.2625C10.2062 5.8075 13.0187 3 15.4475 3C17.875 3 20.7437 5.79375 22.5675 7.2625C26.6987 11.0938 27.465 10.6025 27.465 17.6413C27.465 28 25.0163 28 15.4825 28C5.94875 28 3.5 28 3.5 17.6413Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TwentyFourPxHome6.propTypes = {
  color: PropTypes.string,
};
