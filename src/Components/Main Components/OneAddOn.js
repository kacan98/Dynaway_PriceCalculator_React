import "./OneAddOn.css";
import React, { useState } from "react";

const OneAddOn = (props) => {
  const [showMoreToggle, setshowMoreToggle] = useState(false);
  const showMoreHandler = () => {
    setshowMoreToggle((pevState) => !pevState);
  };
  const tickHandler = (event) => {
    props.onTick({
      ...props.individualAddonObject,
      ticked: !props.individualAddonObject.ticked,
    });
  };

  const itemDescription = (
    <p onClick={showMoreHandler}>{props.individualAddonObject.description}</p>
  );
  return (
    <div
      className="OneAddOn"
      onClick={tickHandler}
      style={{
        justifyContent: showMoreToggle ? "center" : "spaceAround",
        minHeight: showMoreToggle ? "430px" : "0vh",
      }}
    >
      <div className="OneAddOn__title">{props.individualAddonObject.title}</div>
      {showMoreToggle ? itemDescription : ""}
      <div onClick={showMoreHandler} className="showMoreOrLess">
        {showMoreToggle ? "Show less" : "Show details"}
      </div>
      <label>
        <input
          type="checkbox"
          className="OneAddOn__checkbox"
          readOnly
          checked={props.individualAddonObject.ticked}
        />
      </label>
      <p className="OneAddOn__price">
        {props.currentCurrency}
        {props.currentCurrency === "$"
          ? props.individualAddonObject.priceUSD
          : props.individualAddonObject.priceEUR}{" "}
        / month
      </p>
      <div>{console.log(showMoreToggle)}</div>
    </div>
  );
};

export default OneAddOn;
