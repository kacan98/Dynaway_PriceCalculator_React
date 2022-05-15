import "./App.css";
import ListOfAddOns from "./Components/Main Components/ListOfAddOns";
import React, { useState } from "react";
import PriceSummary from "./Components/PriceSummary/PriceSummary";
import Slider from "./Components/Main Components/Slider";
import CustomerCare from "./Components/Main Components/CustomerCare";

function App() {
  const [nrOfUsersSelected, setnrOfUsersSelected] = useState(30);
  const handleSlider = (nrOfUsersSelected) => {
    setnrOfUsersSelected(nrOfUsersSelected);
  };

  const [chosenCurrency, setchosenCurrency] = useState("$");
  const toggleCurrency = () => {
    setchosenCurrency((prevState) => (prevState === "$" ? "€" : "$"));
  };

  const [addOns, setAddOns] = useState([
    {
      title: "Dynaway Mobile",
      description:
        "The Dynaway Mobile client offers increased efficiency and flexibility in your maintenance department. It allows your maintenance workers to report status and progress on work orders in real time, consume spare parts, and quickly and efficiently complete work orders on-site. Seamlessly integrated with Microsoft Asset Management.",
      priceUSD: 1100,
      priceEUR: 1000,
      ticked: true,
    },
    {
      title: "Service Portal",
      description:
        "The Service Portal is a module available on Dynaway’s Mobile Client, and allows you to quickly and easily create requests when a worker detects an error of faulty setup of specific locations or assets. The requests are revised by the maintenance manager who can automatically create work orders.",
      priceUSD: 400,
      priceEUR: 350,
      ticked: false,
    },
    {
      title: "Planning Board",
      description:
        "The Planning board is used for planning unscheduled work order lines on individual workers. Planners, supervisors, and managers can schedule and reschedule work order lines on the Mobile Client. Scheduling is updated in real time.",
      priceUSD: 700,
      priceEUR: 650,
      ticked: false,
    },
    {
      title: "Dynaway Safe Work",
      description:
        "Make work conditions safe and ensure a safer working environment with LO/TO and Work Permits. With Safe Work, you can create and manage tagouts on work orders, assets, and functional locations. Create and manage work permits that are used on work orders.",
      priceUSD: 700,
      priceEUR: 650,
      ticked: false,
    },
    {
      title: "Dynaway STO",
      description:
        "Create and manage projects on work order pools used for Shutdown, Turnaround & Outage (STO). We have added functionality that makes it possible to set up a specific project for a work order pool. You can use a work order pool project to get an overview of total costs on your Shutdown, Turnaround & Outage (STO) projects.",
      priceUSD: 300,
      priceEUR: 250,
      ticked: false,
    },
    {
      title: "Advanced Asset Management",
      description:
        "Advanced Asset Management module creates additional functionality that is not available in Microsoft Asset Management. With the module, you can automatically create a related work order based on the input from a checklist, manage your tools, check inventory for items needed for Work Orders, and more.",
      priceUSD: 600,
      priceEUR: 550,
      ticked: false,
    },
    {
      title: "Dynaway Analytics",
      description:
        "An essential tool for the Maintenance Manager: Customized dashboards to get a full overview of your maintenance operations and the most important metrics.",
      priceUSD: 1100,
      priceEUR: 1000,
      ticked: false,
    },
    {
      title: "Advanced Inventory for Mobile",
      description:
        "The module allows you to download objects for offline use on the Mobile Client as well as execute work orders and register spare parts when the Mobile Client is offline. ",
      priceUSD: 250,
      priceEUR: 200,
      ticked: false,
    },
  ]);

  const [CustomerCarePackages, setCustomerCarePackages] = useState([
    {
      title: "Silver",
      descriptionBeforeFeatures: "Includes: ",
      listOfFeatures: [
        "Service Desk",
        "Support",
        "Product Portal",
        "Service Requests",
        "Platform and Application Notifications",
        "Service Review Meetings",
      ],
      descriptionAfterFeatures:
        "You can read the full-service package which you get with the Silver plan here.",
      priceDescription:
        "3% - Fixed yearly fee as a percentage of total existing license value*",
      percent: 3,
      ticked: false,
      key: "Silver",
    },
    {
      title: "Gold",
      descriptionBeforeFeatures: "Includes all services from Silver +",

      listOfFeatures: [
        "Service Desk Usage Reports",
        "Super User Support",
        "Feature Requests",
        "Incident Workarounds",
        "Support of Customizations",
        "Configuration Audit",
        "Installation",
        "Change Management",
        "Bug Fix",
      ],
      descriptionAfterFeatures:
        "You can read the full-service package which you get with the Gold plan here.",
      priceDescription:
        "6% - Fixed yearly fee as a percentage of total existing license value*",
      percent: 6,
      ticked: true,
      key: "Gold",
    },
    {
      title: "Platinum",
      descriptionBeforeFeatures: "Silver + Gold + ",
      listOfFeatures: [
        "Service Desk Usage Analysis",
        "Sanity Check",
        "Performance Analysis",
        "Strategic Roadmap Advisory On-Site",
        "Support of Customizations",
        "Configuration Audit",
        "Installation",
        "Change Management",
        "Bug Fix",
      ],
      descriptionAfterFeatures:
        "You can read the full-service package which you get with the Platinum plan here.",
      priceDescription:
        "12% - Fixed yearly fee as a percentage of total existing license value*",
      percent: 12,
      ticked: false,
      key: "Platinum",
    },
  ]);

  const currentCustomerCarePercentage = CustomerCarePackages.filter(
    (CCpackage) => CCpackage.ticked === true
  )[0].percent;

  const toggleTickAddOns = (updatedAdon) => {
    setAddOns((prevAdons) => {
      return prevAdons.map((addOn) => {
        if (addOn.title === updatedAdon.title) {
          return updatedAdon;
        } else {
          return addOn;
        }
      });
    });
  };

  return (
    <div className="App">
      <h2>Microsoft Asset Management Add-on Modules</h2>
      <ListOfAddOns
        addOns={addOns}
        onTick={toggleTickAddOns}
        onToggleCurrency={toggleCurrency}
        currentCurrency={chosenCurrency}
      />
      <h3>Customer Care Plan** (Required for all customers)</h3>
      <p>
        Dynaway Customer Care Services for Dynaway EAM are available in three
        versions: Silver, Gold, and Platinum. Each version includes standardized
        services that meet typical business needs, depending on the size and
        complexity of your organization. The final solution can be further
        adapted to suit your specific business needs.
      </p>
      <CustomerCare
        packages={CustomerCarePackages}
        chosenCurrency={chosenCurrency}
        setPackages={setCustomerCarePackages}
      />
      <Slider onSlide={handleSlider} currentValue={nrOfUsersSelected} />
      <PriceSummary
        addOns={addOns}
        chosenCurrency={chosenCurrency}
        nrOfUsersSelected={nrOfUsersSelected}
        CCpercentage={currentCustomerCarePercentage}
      />
      <div className="App__NotesUnderPriceSummary">
        *License value is calculated as (monthly license subscription payment) x
        36 (months).
      </div>
      <div className="App__NotesUnderPriceSummary">
        **This price may vary, depending on customers' needs. Please read more
        about out Standard Implementation price here
      </div>
    </div>
  );
}

export default App;
