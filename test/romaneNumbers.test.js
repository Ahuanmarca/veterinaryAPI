/* eslint-disable no-import-assign */
import romanParseator from "./romaneNumbers.js";
import testCases from "./romansTestCases.js";
import * as parseators from "./parseators.js";

const testCasesDict = {};
testCases.forEach(([decimal, roman]) => testCasesDict[decimal] = roman);
testCases.forEach(([decimal, roman]) => testCasesDict[roman] = decimal);

function decimalToRomanMock({ splittedNumber }) {
  const joinedNumber = splittedNumber.join("");
  return testCasesDict[joinedNumber];
}

function romanToDecimalMock({ splittedNumber }) {
  const joinedNumber = splittedNumber.join("");
  return testCasesDict[joinedNumber];
}

// describe("description describe", () => {
//   test("description test", () => {
//     expect(romanParseator({ numberAsString: "X" })).toBe(10);
//   });
// });

beforeAll(() => {
  parseators.decimalToRoman = jest.fn().mockImplementation(decimalToRomanMock);
  parseators.romanToDecimal = jest.fn().mockImplementation(romanToDecimalMock);
});

describe("Argument validation", () => {
  test("First argument is an empty object", () => {
    try {
      romanParseator({});
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(1);
      expect(parsedMessage.msg).toBe(
        "The argument must be an object that contains the numberAsString property"
      );
    }
  });

  test("The argument is an object, but numberAsString is a number", () => {
    try {
      romanParseator({ numberAsString: 10 });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(2);
      expect(parsedMessage.msg).toBe(
        "The numberAsString property must be a string"
      );
    }
  });

  test("The roman number has invalid characters", () => {
    try {
      romanParseator({ numberAsString: "QWERTY" });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(3);
      expect(parsedMessage.msg).toBe("The entered number is not valid");
    }
  });
});

describe("Test valid roman to decimal conversion", () => {
  testCases.forEach(([decimal, roman]) => {
    test(`Testing ${roman} to ${decimal} conversion`, () => {
      expect(romanParseator({ numberAsString: roman })).toBe(Number(decimal));
    });
  });
});

describe("Test valid decimal to roman conversion", () => {
  testCases.forEach(([decimal, roman]) => {
    test(`Testing ${decimal} to ${roman} conversion`, () => {
      expect(romanParseator({ numberAsString: String(decimal) })).toBe(roman);
    });
  });
});


