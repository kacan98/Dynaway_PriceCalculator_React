import "./ItemPriceSummary.css";
import React  from 'react';

const ItemPriceSummary = (props) => {
  return (
    <li className="ItemPriceSummary__Wrapper">
      <div className="ItemPriceSummary__Title">
        {props.title}
        <div className="dots">
          ......................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        </div>
      </div>
      <div className="ItemPriceSummary__Value">
        {props.chosenCurrency + " "}
        {props.value}
      </div>
    </li>
  );
};
export default ItemPriceSummary;
