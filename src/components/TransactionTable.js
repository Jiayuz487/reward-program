import { calcPointsForSinglePurchase } from "../utils/helperFunctions";
import "../styles/TransactionTable.css";

export default function TransactionTable({ records }) {
  return (
    <div className="transaction-table">
      <table>
        <thead>
          <tr>
            <th width="40%">Transaction ID</th>
            <th>Customer ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return (
              <tr key={record.transactionId}>
                <td>{record.transactionId}</td>
                <td>{record.customerId}</td>
                <td>{record.date.substring(0, 10)}</td>
                <td>{record.amount}</td>
                <td>{calcPointsForSinglePurchase(record)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
