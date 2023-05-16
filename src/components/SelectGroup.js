import "../styles/SelectGroup.css";

export default function SelectGroup({
  customers,
  periods,
  handleCustomerChange,
  handlePeriodChange,
}) {
  return (
    <div className="select-group">
      <div className="select-group__select-container">
        <label htmlFor="select-customer">Select customer: </label>
        <select id="select-customer" onChange={handleCustomerChange}>
          {customers.map((customer) => (
            <option value={customer} key={customer}>
              {customer}
            </option>
          ))}
        </select>
      </div>
      <div className="select-group__select-container">
        <label htmlFor="select-period">Select time period: </label>
        <select id="select-period" onChange={handlePeriodChange}>
          {periods.map((period) => (
            <option value={period} key={period}>
              {period}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
