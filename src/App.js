import getAllTransInPastThreeMonths from "./api/mockApi";
import SelectGroup from "./components/SelectGroup";
import TransactionTable from "./components/TransactionTable";
import {
  getAllCustomers,
  calcTotalPointsForPurchases,
  isSelectedCustomer,
  isWithinSelectedPeriod,
} from "./utils/helpers";
import { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [records, setRecords] = useState([]);
  const [customers, setCustomers] = useState(["All"]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const periods = ["All", "Last 30 days", "Last 3 months", "Last 6 months"];

  useEffect(() => {
    getAllTransInPastThreeMonths().then((res) => {
      setRecords(res);
      setCustomers(["All", ...getAllCustomers(res)]);
    });
  }, []);

  useEffect(() => {
    const filteredRecords = records
      .filter((record) => isWithinSelectedPeriod(record.date, selectedPeriod))
      .filter((record) =>
        isSelectedCustomer(record.customerId, selectedCustomer)
      );
    setSelectedRecords(filteredRecords);
    setTotalPoints(calcTotalPointsForPurchases(filteredRecords));
  }, [records, selectedCustomer, selectedPeriod]);

  function handleCustomerChange(e) {
    setSelectedCustomer(e.target.value);
  }

  function handlePeriodChange(e) {
    setSelectedPeriod(e.target.value);
  }

  return (
    <div className="App">
      <div className="reward-program">
        <h4>Total Reward Points: {totalPoints}</h4>
        <div className="select-group-container">
          <SelectGroup
            customers={customers}
            periods={periods}
            handleCustomerChange={handleCustomerChange}
            handlePeriodChange={handlePeriodChange}
          ></SelectGroup>
        </div>
        <div className="transaction-table-container">
          <TransactionTable records={selectedRecords}></TransactionTable>
        </div>
      </div>
    </div>
  );
}

export default App;
