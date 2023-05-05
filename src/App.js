import TransactionTable from "./components/TransactionTable";
import getAllTransInPastThreeMonths from "./api/mockApi";
import "./styles/App.css";
import { useState, useEffect } from "react";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getAllTransInPastThreeMonths().then((res) => setRecords(res));
  }, []);

  return (
    <div className="App">
      <div className="reward-program">
        <div className="select-group-container"></div>
        <div className="table-container">
          <TransactionTable records={records}></TransactionTable>
        </div>
      </div>
    </div>
  );
}

export default App;
