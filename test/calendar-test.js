const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");

const { getMonthName, getMonthInfo, chunkIntoWeeks, createPadding} = require("../src/calendar.js");

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

describe('chunkIntoWeeks', function () {
	
	it('should give back days into chunks of 7days', function () {
		const calendarData = [' 1', ' 2', ' 3', ' 4',' 5', ' 6', ' 7', ' 8', ' 9', ' 10', ' 11',' 12', ' 13', ' 14', ' 15'];
		
		const actual = chunkIntoWeeks(calendarData);
		const expected = [[' 1', ' 2', ' 3', ' 4',' 5', ' 6', ' 7'], [' 8', ' 9', ' 10', ' 11',' 12', ' 13', ' 14'], [' 15']];

		deepStrictEqual(actual, expected);
	});
});