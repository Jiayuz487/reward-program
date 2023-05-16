import { calcPoints } from "../utils/helpers";
import "../styles/TransactionTable.css";

export default function TransactionTable({ records, isLoading }) {
  return (
    <div className="transaction-table">
      <table className="transaction-table__table">
        <thead>
          <tr>
            <th width="40%">Transaction ID</th>
            <th width="15%">Customer ID</th>
            <th width="15%">Date</th>
            <th width="15%">Amount</th>
            <th width="15%">Reward Points</th>
          </tr>
        </thead>
        <tbody hidden={isLoading}>
          {records.map((record) => {
            return (
              <tr key={record.transactionId}>
                <td>{record.transactionId}</td>
                <td>{record.customerId}</td>
                <td>{record.date.substring(0, 10)}</td>
                <td>{record.amount}</td>
                <td>{calcPoints(record.amount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="transaction-table__loader" hidden={!isLoading}>
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  );
}
