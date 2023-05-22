import {
  calcPoints,
  calcTotalPointsForPurchases,
  getAllCustomers,
  isSelectedCustomer,
  isWithinSelectedPeriod,
} from "../../utils/helpers";

describe("calcPoints", () => {
  describe("should return 0 points for purchases under or equal to $50", () => {
    test("purchases under $50", () => {
      expect(calcPoints(25)).toBe(0);
    });
    test("purchases equal to $50", () => {
      expect(calcPoints(50)).toBe(0);
    });
  });

  describe("should return correct points for purchases between $50 and $100", () => {
    test("purchases between $50 and $100", () => {
      expect(calcPoints(75)).toBe(25);
    });
  });

  describe("should return correct points for purchases equal to or above $100", () => {
    test("purchases equal to $100", () => {
      expect(calcPoints(100)).toBe(50);
    });
    test("purchases above $100", () => {
      expect(calcPoints(200)).toBe(250);
    });
  });
});

describe("calcTotalPointsForPurchases", () => {
  test("should return 0 for empty purchases array", () => {
    const purchases = [];
    expect(calcTotalPointsForPurchases(purchases)).toBe(0);
  });
  test("should return the total points of all purchases in the array", () => {
    const purchases = [
      { amount: 10 },
      { amount: 50 },
      { amount: 75 },
      { amount: 120 },
    ];
    expect(calcTotalPointsForPurchases(purchases)).toBe(115);
  });
});

describe("getAllCustomers", () => {
  test("should return an empty array if the purchases array is empty", () => {
    expect(getAllCustomers([])).toHaveLength(0);
  });
  test("should return an array of unique customer ID extracted from the purchases", () => {
    const purchases = [
      { customerId: "VT9O597F" },
      { customerId: "VT9O597F" },
      { customerId: "OOF6O4DN" },
      { customerId: "OOF6O4DN" },
      { customerId: "OOF6O4DN" },
      { customerId: "TQIWQJT0" },
    ];
    const customers = getAllCustomers(purchases);
    const expected = ["VT9O597F", "OOF6O4DN", "TQIWQJT0"];
    expect(customers).toEqual(expect.arrayContaining(expected));
  });
});

describe("isWithinSelectedPeriod", () => {
  test("should always return true if the user selects 'All' periods", () => {
    const date = "2021-05-04T10:00:00.000Z";
    expect(isWithinSelectedPeriod(date, "All")).toBe(true);
  });
  test("should return true if the input date is within the selected period", () => {
    let date = new Date();
    expect(isWithinSelectedPeriod(date, "Last 30 days")).toBe(true);
    date.setDate(date.getDate() - 29);
    expect(isWithinSelectedPeriod(date, "Last 30 days")).toBe(true);
  });
  test("should return false if the input date is not within the selected period", () => {
    let date = new Date();
    date.setDate(date.getDate() - 91);
    expect(isWithinSelectedPeriod(date, "Last 3 months")).toBe(false);
  });
});

describe("isSelectedCustomer", () => {
  test("should always return true if the user selects 'All' customers", () => {
    expect(isSelectedCustomer("VT9O597F", "All")).toBe(true);
    expect(isSelectedCustomer("OOF6O4DN", "All")).toBe(true);
  });
  test("should return true if the input customer is the selected one", () => {
    expect(isSelectedCustomer("OOF6O4DN", "OOF6O4DN")).toBe(true);
  });
  test("should return false if the input customer is not the selected one", () => {
    expect(isSelectedCustomer("VT9O597F", "OOF6O4DN")).toBe(false);
  });
});
