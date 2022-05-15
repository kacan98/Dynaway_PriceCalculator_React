import "./OneAddOn.css";
import "./CustomerCareCard.css";

const CustomerCareCard = (props) => {
  const listOfFeatures = props.CustomerCarePackage.listOfFeatures.map(
    (feature) => (
      <li className="listCCfeatures" key={feature}>
        {feature}
      </li>
    )
  );

  const tickHandler = () => {
    props.setPackages((prevPackage) =>
      prevPackage.map(function (CustomerCarePackage) {
        if (CustomerCarePackage.title === props.CustomerCarePackage.title) {
          return {
            ...CustomerCarePackage,
            ticked: true,
          };
        } else {
          return {
            ...CustomerCarePackage,
            ticked: false,
          };
        }
      })
    );
  };

  return (
    <div
      className="OneCCCard"
      onClick={tickHandler}
      style={{ justifyContent: "spaceAround" }}
    >
      <div
        className="CC__title"
        style={{
          color: props.CustomerCarePackage.title,
        }}
      >
        {props.CustomerCarePackage.title}
      </div>
      <div>
        <div className="CC__descriptionBeforeFeatures">
          {props.CustomerCarePackage.descriptionBeforeFeatures}
        </div>
        {listOfFeatures}
      </div>
      <div className="CC__descriptionAfterFeatures">
        {props.CustomerCarePackage.descriptionAfterFeatures}
      </div>
      <input
        onChange={tickHandler}
        type="radio"
        className="CC__radio"
        name="customerCarePackage"
        checked={props.CustomerCarePackage.ticked}
      />
      <p className="CCCprice">{props.CustomerCarePackage.priceDescription}</p>
    </div>
  );
};

export default CustomerCareCard;
// title={props.packages.title}
//         price={props.packages.price}
//         currentCurrency={props.chosenCurrency}
