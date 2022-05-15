import CustomerCareCard from "./CustomerCareCard";
import "./ListOfAddOns.css";

const CustomerCare = (props) => {
  const customerCarePackagesInJSX = props.packages.map((CCpackage, index) => {
    return (
      <CustomerCareCard
        CustomerCarePackage={props.packages[index]}
        currentCurrency={props.chosenCurrency}
        setPackages={props.setPackages}
        key={props.packages[index].title}
      />
    );
  });

  return <div className="listOfAddons">{customerCarePackagesInJSX}</div>;
};

export default CustomerCare;
