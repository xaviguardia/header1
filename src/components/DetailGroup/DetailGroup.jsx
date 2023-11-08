/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Detail } from "../Detail";
import { Heading } from "../Heading";
import "./style.css";

export const DetailGroup = ({ ambient, quantity, className }) => {
  return (
    <div className={`detail-group ${className}`}>
      <div className="group">
        <div className="detail-2">
          <Heading
            alignment="center"
            className="heading-3"
            color={ambient === "inverse" ? "inverse" : "standard"}
            text={ambient === "inverse" ? "Label" : "Título h3"}
            typographyContentClassName={`${ambient === "inverse" && "class"}`}
          />
          <Detail
            alignment="center"
            className="detail-1"
            color={ambient === "inverse" ? "inverse" : "standard"}
            text={ambient === "inverse" ? "Lorem ipsum" : "Texto detail"}
            typographyContentClassName={`${ambient === "inverse" && "class-2"}`}
          />
        </div>
        {quantity === "two" && (
          <img className="divider-y" alt="Divider y" src="https://c.animaapp.com/aMe0f4ji/img/divider-y-7.svg" />
        )}

        {quantity === "three" && (
          <img className="img" alt="Divider y" src="https://c.animaapp.com/aMe0f4ji/img/divider-y-6.svg" />
        )}

        <div className="detail-3">
          <Heading
            alignment="center"
            className="heading-3"
            color={ambient === "inverse" ? "inverse" : "standard"}
            text={ambient === "inverse" ? "Label" : "Título h3"}
            typographyContentClassName={`${ambient === "inverse" && "class"}`}
          />
          <Detail
            alignment="center"
            className="detail-instance"
            color={ambient === "inverse" ? "inverse" : "standard"}
            text={ambient === "inverse" ? "Lorem ipsum" : "Texto detail"}
            typographyContentClassName={`${ambient === "inverse" && "class-2"}`}
          />
        </div>
        {quantity === "three" && (
          <>
            <img className="img" alt="Divider y" src="https://c.animaapp.com/aMe0f4ji/img/divider-y-5.svg" />
            <div className="detail-2">
              <Heading
                alignment="center"
                className="heading-3"
                color={ambient === "inverse" ? "inverse" : "standard"}
                text={ambient === "inverse" ? "Label" : "Título h3"}
                typographyContentClassName={`${ambient === "inverse" && "class"}`}
              />
              <Detail
                alignment="center"
                className="detail-1"
                color={ambient === "inverse" ? "inverse" : "standard"}
                text={ambient === "inverse" ? "Lorem ipsum" : "Texto detail"}
                typographyContentClassName={`${ambient === "inverse" && "class-2"}`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

DetailGroup.propTypes = {
  ambient: PropTypes.oneOf(["inverse", "standard"]),
  quantity: PropTypes.oneOf(["two", "three"]),
};
