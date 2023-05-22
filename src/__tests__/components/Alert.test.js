import { fireEvent, render } from "@testing-library/react";
import Alert from "../../components/Alert";

test("should show error message properly", () => {
  const { getByText } = render(<Alert>Something went wrong.</Alert>);
  expect(getByText("Something went wrong.")).toBeTruthy();
});

test("should become invisible after click the close button", () => {
  const { getByTestId, getByAltText } = render(
    <Alert>Something went wrong.</Alert>
  );
  expect(getByTestId("alert")).toHaveClass("visible");
  fireEvent.click(getByAltText("alert button"));
  expect(getByTestId("alert")).toHaveClass("hidden");
});
