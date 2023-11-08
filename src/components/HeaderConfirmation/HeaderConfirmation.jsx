/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DetailGroup } from "../DetailGroup";
import { Heading } from "../Heading";
import { HeadlineBalance } from "../HeadlineBalance";
import "./style.css";

export const HeaderConfirmation = ({ detailGroup = true }) => {
  return (
    <div className="header-confirmation">
      <Heading alignment="center" className="title" color="inverse" text="Confirmar datos" />
      <HeadlineBalance
        ambient="inverse"
        className="headline-balance-instance"
        level1="pre-title"
        level2="title"
        level3="Subtitle"
      />
      {detailGroup && <DetailGroup ambient="inverse" className="detail-group-instance" quantity="two" />}
    </div>
  );
};

HeaderConfirmation.propTypes = {
  detailGroup: PropTypes.bool,
};
