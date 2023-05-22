import { fireEvent, render } from "@testing-library/react";
import SelectGroup from "../../components/SelectGroup";

test("onChange event should get triggered after selection", () => {
  const customers = ["VT9O597F", "TQIWQJT0"];
  const periods = ["Last 30 days", "Last 3 months"];
  const handleCustomerChange = jest.fn();
  const handlePeriodChange = jest.fn();
  const { getByRole } = render(
    <SelectGroup
      customers={customers}
      periods={periods}
      handleCustomerChange={handleCustomerChange}
      handlePeriodChange={handlePeriodChange}
    ></SelectGroup>
  );

  fireEvent.change(getByRole("combobox", { name: "Select customer:" }), {
    target: { value: "VT9O597F" },
  });
  expect(getByRole("option", { name: "VT9O597F" }).selected).toBeTruthy();
  expect(handleCustomerChange).toHaveBeenCalledTimes(1);

  fireEvent.change(getByRole("combobox", { name: "Select time period:" }), {
    target: { value: "Last 30 days" },
  });
  expect(getByRole("option", { name: "Last 30 days" }).selected).toBeTruthy();
  expect(handlePeriodChange).toHaveBeenCalledTimes(1);
});
