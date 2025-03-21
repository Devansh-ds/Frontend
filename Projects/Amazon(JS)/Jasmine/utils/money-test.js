import { formatCurrency } from "../../scripts/utils/money.js";

describe("Test suit: format currency", () => {
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("works with decimals", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
