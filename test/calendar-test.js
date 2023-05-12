const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");

const { getMonthName, getMonthInfo } = require("../src/calendar.js");

describe("getMonthName", function () {
	it("should give the week days", function () {
		const month = 5;
		const actual = getMonthName(month);
		const expected = "May";
		strictEqual(actual, expected);
	});
});

describe("getMonthInfo", function () {
	it("should give total days of the given month and year and the starting day of the month", function () {
		const actual = getMonthInfo(5, 2023);
		const expected = { endDate: 31, startDay: 1 };

		deepStrictEqual(actual, expected);
	});
});
