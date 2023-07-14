/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TwentyFourPxLocation3 } from "../../icons/TwentyFourPxLocation3";
import "./style.css";

export const Frame = ({ property1, twentyFourPxLocation3StyleOverrideClassName, walkInClassName, groupClassName }) => {
  return (
    <div className="frame">
      {property1 === "default" && <TwentyFourPxLocation3 className={twentyFourPxLocation3StyleOverrideClassName} />}

      {property1 === "variant-2" && <div className={`group ${groupClassName}`} />}

      <div className={`walk-in ${property1} ${walkInClassName}`}>
        {property1 === "default" && <>Walk In</>}

        {property1 === "variant-2" && <>Virtual</>}
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
