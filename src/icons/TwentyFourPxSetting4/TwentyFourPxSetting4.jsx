/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxSetting4 = ({ color = "#112950", className }) => {
  return (
    <svg
      className={`twenty-four-px-setting-4 ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 31 30"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15.0562 11.875C16.7823 11.875 18.1812 13.2739 18.1812 15C18.1812 16.7261 16.7823 18.125 15.0562 18.125C13.3301 18.125 11.9312 16.7261 11.9312 15C11.9312 13.2739 13.3301 11.875 15.0562 11.875Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M25.2662 9.06281V9.06281C24.4117 7.57249 22.5202 7.06255 21.0418 7.92315C19.7559 8.67017 18.1487 7.73548 18.1487 6.24022C18.1487 4.52024 16.7635 3.125 15.0559 3.125V3.125C13.3482 3.125 11.963 4.52024 11.963 6.24022C11.963 7.73548 10.3559 8.67017 9.07115 7.92315C7.59152 7.06255 5.69999 7.57249 4.84556 9.06281C3.99235 10.5531 4.49864 12.4583 5.97827 13.3177C7.26298 14.0659 7.26298 15.9341 5.97827 16.6823C4.49864 17.5429 3.99235 19.4481 4.84556 20.9372C5.69999 22.4275 7.59152 22.9375 9.06992 22.0781H9.07115C10.3559 21.3298 11.963 22.2645 11.963 23.7598V23.7598C11.963 25.4798 13.3482 26.875 15.0559 26.875V26.875C16.7635 26.875 18.1487 25.4798 18.1487 23.7598V23.7598C18.1487 22.2645 19.7559 21.3298 21.0418 22.0781C22.5202 22.9375 24.4117 22.4275 25.2662 20.9372C26.1206 19.4481 25.6131 17.5429 24.1347 16.6823H24.1334C22.8487 15.9341 22.8487 14.0659 24.1347 13.3177C25.6131 12.4583 26.1206 10.5531 25.2662 9.06281Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TwentyFourPxSetting4.propTypes = {
  color: PropTypes.string,
};
