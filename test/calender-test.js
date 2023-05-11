const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");

const { getMonthName, getMonthInfo } = require("../src/calender.js");

describe("getMonthName", function () {
  it("should give the week days", function () {
    const actual = getMonthName(5);
    const expected = "May";
    strictEqual(actual, expected);
  });
});

describe("getMonthInfo", function () {
  it("should give total days of the given month and year and the starting day of the month", function () {
    const actual = getMonthInfo(5, 2023);
    const expected = { monthEndDate: 31, dayCode: 1 };

    deepStrictEqual(actual, expected);
  });
});
