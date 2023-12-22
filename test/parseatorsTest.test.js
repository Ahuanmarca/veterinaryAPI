import testCases from "./romansTestCases.js";
import * as parseators from "./parseators.js";
const romanLetters = ["I", "V", "X", "L", "C", "D", "M"];

describe("Test throwing errors", () => {
  test("ERROR 1", () => {
    try {
      parseators.romanToDecimal({ splittedNumber: ["Q", "W", "E", "R", "T", "Y"], romanLetters });
    } catch (e) {
      const myErr = JSON.parse(e.message);
      expect(myErr.code).toBe(3);
      expect(myErr.msg).toBe("The entered number is not valid");
    }
  })
})

describe("Test decimalToRoman from parseators.js", () => {
  testCases.forEach(([decimal, roman]) => {
    test(`Testing ${decimal} to ${roman} conversion with decimalToRoman parseator`, () => {
      const splittedNumber = String(decimal).split("");
      expect(parseators.decimalToRoman({ splittedNumber, romanLetters })).toBe(
        roman
      );
    });
  });
});

describe("Test romanToDecimal from parseators.js", () => {
  testCases.forEach(([decimal, roman]) => {
    test(`Testing ${roman} to ${decimal} conversion with romanToDecimal parseator`, () => {
      const splittedNumber = roman.split("");
      expect(parseators.romanToDecimal({ splittedNumber, romanLetters })).toBe(
        decimal
      );
    });
  });
});