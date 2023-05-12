const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");

const { isValidInput, parseArguments } = require("../src/arguments.js");

describe('isValidInput', function() {
	it('should give true when empty arguments is given', function() {
		deepStrictEqual(isValidInput([]), true);
	});

	it('should give true when only numbers is passed as arguments', function() {
		deepStrictEqual(isValidInput(['123']), true);
	})

it('should give false invalid is passed as arguments', function() {
		deepStrictEqual(isValidInput(['12some34']), false);
	});
});

describe('parseArguments', function() {
	it('should give isValid value as false on giving invalid arguments', function() {
		const {isValid} = parseArguments(['13', '2000']);
		strictEqual(isValid, false);
	});

	it('should give isValid value as true on giving valid arguments', function() {
		const {isValid} = parseArguments(['12', '2000']);

		strictEqual(isValid, true);
	});
});