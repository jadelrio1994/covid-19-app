import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

export const InfoBox = ({ title, isRed, active, cases, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "ínfoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecundary">
          {title}
        </Typography>

        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecundary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};
