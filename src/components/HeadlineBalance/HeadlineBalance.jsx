/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeadlineBalance = ({
  level1 = "pre-title",
  status = false,
  level4 = true,
  level2 = "title",
  fig1 = false,
  level3 = "Subtitle",
  ambient,
  className,
}) => {
  return (
    <div className={`headline-balance ambient-${ambient} ${className}`}>
      <div className="text">
        {level4 && <div className="level">{level1}</div>}

        <div className="text-wrapper">{level2}</div>
        <div className="div">{level3}</div>
      </div>
    </div>
  );
};

HeadlineBalance.propTypes = {
  level1: PropTypes.string,
  status: PropTypes.bool,
  level4: PropTypes.bool,
  level2: PropTypes.string,
  fig1: PropTypes.bool,
  level3: PropTypes.string,
  ambient: PropTypes.oneOf(["main", "inverse"]),
};
