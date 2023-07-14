/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxProfile3 = ({ color = "white", className }) => {
  return (
    <svg
      className={`twenty-four-px-profile-3 ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.8057 27.0774C10.1909 27.0774 6.25 26.3593 6.25 23.4833C6.25 20.6073 10.1659 17.9524 14.8057 17.9524C19.4205 17.9524 23.3614 20.5816 23.3614 23.4576C23.3614 26.3324 19.4455 27.0774 14.8057 27.0774Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M14.7966 13.967C17.825 13.967 20.2796 11.5125 20.2796 8.48409C20.2796 5.45568 17.825 3 14.7966 3C11.7682 3 9.31253 5.45568 9.31253 8.48409C9.3023 11.5023 11.7398 13.9568 14.758 13.967C14.7716 13.967 14.7841 13.967 14.7966 13.967Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TwentyFourPxProfile3.propTypes = {
  color: PropTypes.string,
};
