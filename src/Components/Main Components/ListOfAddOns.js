import OneAddOn from "./OneAddOn";
import "./ListOfAddOns.css";
import Switch from "./Switch";
import React from "react";

const ListOfAddOns = (props) => {
  const switchHandler = () => {
    props.onToggleCurrency();
  };

  const listOfAdonsMapped = props.addOns.map((addon) => {
    return (
      <OneAddOn
        individualAddonObject={addon}
        onTick={props.onTick}
        currentCurrency={props.currentCurrency}
        id={addon.title}
        key={addon.title}
      />
    );
  });
  return (
    <div className="ListOfAddonsComposition">
      Select Currency:
      <Switch onSwitch={switchHandler} />
      <div className="listOfAddons">{listOfAdonsMapped}</div>
    </div>
  );
};

export default ListOfAddOns;
