const numberHelper = require("../src/numberHelper");
const apiCalls = require("../src/apiCalls");

jest.mock("../src/apiCalls");

describe("numberHelper unit test group", () => {
  it("should add two numbers correctly", () => {
    expect(numberHelper.addNumbers(2, 2)).toBe(4);
  });

  it("throws errors when parameters are not correct", () => {
    expect(() => numberHelper.addNumbers()).toThrow(
      "Please provide two parameters"
    );
    expect(() => numberHelper.addNumbers(2)).toThrow(
      "Please provide two parameters"
    );
    expect(() => numberHelper.addNumbers("param1", "param2")).toThrow(
      "Please provide numbers"
    );
  });
});

describe("integration test for totalNumber", () => {
  it("should return the correct string", () => {
    apiCalls.amazonTotalClients.mockReturnValue(12);
    apiCalls.ebayTotalClients.mockReturnValue(12);

    expect(numberHelper.totalNumber()).toBe("Our Total Number is 24");
  });
});
