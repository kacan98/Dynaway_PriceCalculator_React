import ItemPriceSummary from "./ItemPriceSummary";
import "./PriceSummary.css";

const PriceSummary = (props) => {
  let modulesPrice = 0;
  for (const addOn of props.addOns) {
    if (addOn.ticked) {
      modulesPrice +=
        props.chosenCurrency === "$" ? addOn.priceUSD : addOn.priceEUR;
    }
  }

  const EAMpricingTresholdsFnOEUR = [
    { min: 1, max: 10, pricePerUser: 55 },
    { min: 11, max: 25, pricePerUser: 50 },
    { min: 26, max: 50, pricePerUser: 45 },
    { min: 51, max: 100, pricePerUser: 40 },
    { min: 101, max: 200, pricePerUser: 35 },
    { min: 201, max: 300, pricePerUser: 30 },
    { min: 301, max: 400, pricePerUser: 25 },
    { min: 401, max: 500, pricePerUser: 20 },
    { min: 501, max: undefined, pricePerUser: 15 },
  ];

  const EAMpricingTresholdsFnOUSD = [
    { min: 1, max: 10, pricePerUser: 60 },
    { min: 11, max: 25, pricePerUser: 55 },
    { min: 26, max: 50, pricePerUser: 50 },
    { min: 51, max: 100, pricePerUser: 45 },
    { min: 101, max: 200, pricePerUser: 40 },
    { min: 201, max: 300, pricePerUser: 35 },
    { min: 301, max: 400, pricePerUser: 30 },
    { min: 401, max: 500, pricePerUser: 25 },
    { min: 501, max: undefined, pricePerUser: 20 },
  ];

  const currentPricingTresholdsObject =
    props.chosenCurrency === "$"
      ? EAMpricingTresholdsFnOUSD
      : EAMpricingTresholdsFnOEUR;

  let priceForCurrentNumberOfUsers = 0;
  let itterationCount = 0;

  for (const pricingPlan of currentPricingTresholdsObject) {
    for (let i = 0; i < pricingPlan.max; i++) {
      if (itterationCount < props.nrOfUsersSelected) {
        priceForCurrentNumberOfUsers += pricingPlan.pricePerUser;
        itterationCount++;
      }
    }
  }
  const licenseValue = (priceForCurrentNumberOfUsers + modulesPrice) * 36;

  let customerCarePrice = Math.round((props.CCpercentage / 100) * licenseValue);
  const customerCarePricePerMonth = Math.round(customerCarePrice / 12);

  const PriceSummaryItems = [
    {
      title: "Monthly Modules Price:",
      value: modulesPrice,
    },
    {
      title: `Monthly EAM Users Price`,
      value: priceForCurrentNumberOfUsers,
    },
    {
      title: "Monthy Customer Care Services Price (billed yearly)",
      value: customerCarePricePerMonth,
    },
    "line",
    {
      title: "Total Monthly Cost:",
      value:
        modulesPrice + priceForCurrentNumberOfUsers + customerCarePricePerMonth,
    },
    {
      title: "Estimated Standard Implementation**",
      value: props.chosenCurrency === "$" ? 72000 : 64500,
    },
  ];

  const ArraywithItemPriceSummaries = PriceSummaryItems.map((PriceItem) => {
    if (PriceItem === "line") {
      return <div className="breakBetweenLines" key={Math.random()}></div>;
    } else {
      return (
        <ItemPriceSummary
          title={PriceItem.title}
          value={PriceItem.value}
          key={Math.random()}
          chosenCurrency={props.chosenCurrency}
        />
      );
    }
  });

  return (
    <ul className="PriceSummary__Wrapper">
      {ArraywithItemPriceSummaries}
      <div>{console.log()}</div>
    </ul>
  );
};
export default PriceSummary;
