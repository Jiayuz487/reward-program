import getAllTransInPastThreeMonths from "./api/mockApi";
import Alert from "./components/Alert";
import SelectGroup from "./components/SelectGroup";
import TransactionTable from "./components/TransactionTable";
import useQuery from "./hooks/useQuery";
import {
  getAllCustomers,
  calcTotalPointsForPurchases,
  isSelectedCustomer,
  isWithinSelectedPeriod,
} from "./utils/helpers";
import { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [customers, setCustomers] = useState(["All"]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const periods = ["All", "Last 30 days", "Last 3 months", "Last 6 months"];

  const [records, error, isError, isLoading] = useQuery(
    getAllTransInPastThreeMonths
  );

  useEffect(() => {
    setCustomers(
      records === null ? ["All"] : ["All", ...getAllCustomers(records)]
    );
  }, [records]);

  useEffect(() => {
    if (records === null) {
      setSelectedRecords([]);
      setTotalPoints(0);
    } else {
      const filteredRecords = records
        .filter((record) => isWithinSelectedPeriod(record.date, selectedPeriod))
        .filter((record) =>
          isSelectedCustomer(record.customerId, selectedCustomer)
        );
      setSelectedRecords(filteredRecords);
      setTotalPoints(calcTotalPointsForPurchases(filteredRecords));
    }
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
        <div className={`alert-container ${isError ? "visible" : "hidden"}`}>
          <Alert>{error}</Alert>
        </div>
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
          <TransactionTable
            records={selectedRecords}
            isLoading={isLoading}
          ></TransactionTable>
        </div>
      </div>
    </div>
  );
}

export default App;
