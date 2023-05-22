import { render } from "@testing-library/react";
import TransactionTable from "../../components/TransactionTable";

test("should show the spinning loader when the table is loading", () => {
  const { getByTestId } = render(
    <TransactionTable records={[]} isLoading={true}></TransactionTable>
  );
  expect(getByTestId("loader").hidden).toBeFalsy();
});

test("should hide the spinning loader when the table has finished loading", () => {
  const { getByTestId } = render(
    <TransactionTable records={[]} isLoading={false}></TransactionTable>
  );
  expect(getByTestId("loader").hidden).toBeTruthy();
});

test("should show the table header properly", () => {
  const { getByRole } = render(
    <TransactionTable records={[]} isLoading={false}></TransactionTable>
  );
  expect(getByRole("columnheader", { name: "Transaction ID" })).toBeTruthy();
  expect(getByRole("columnheader", { name: "Customer ID" })).toBeTruthy();
  expect(getByRole("columnheader", { name: "Date" })).toBeTruthy();
  expect(getByRole("columnheader", { name: "Amount" })).toBeTruthy();
  expect(getByRole("columnheader", { name: "Reward Points" })).toBeTruthy();
});

test("should show correct number of records", () => {
  const records = [
    {
      transactionId: "ebee3e1f-74ad-4d4f-9636-9136e92365c3",
      customerId: "TQIWQJT0",
      date: "2023-05-04T15:37:31.789Z",
      amount: 91,
    },
    {
      transactionId: "58ae83bf-2e16-413e-b030-1087dcc12a2e",
      customerId: "TQIWQJT0",
      date: "2023-03-12T13:23:12.239Z",
      amount: 24,
    },
  ];
  const { getAllByRole } = render(
    <TransactionTable records={records} isLoading={false}></TransactionTable>
  );
  expect(getAllByRole("row")).toHaveLength(3);
});
