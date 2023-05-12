const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");

const { isValidInput, parseArguments } = require("../src/arguments.js");

describe('isValidInput', () => {
	it('should give true when empty arguments is given', () => {
		deepStrictEqual(isValidInput([]), true);
	});

	it('should give true when only numbers is passed as arguments', () => {
		deepStrictEqual(isValidInput(['123']), true);
	})

it('should give false invalid is passed as arguments', () => {
		deepStrictEqual(isValidInput(['12some34']), false);
	});
});

describe('parseArguments', () => {
	it('should give isValid value as false on giving invalid arguments', () => {
		const {isValid} = parseArguments(['13', '2000']);
		strictEqual(isValid, false);
	});

	it('should give isValid value as true on giving valid arguments', () => {
		const {isValid} = parseArguments(['12', '2000']);

		strictEqual(isValid, true);
	});
});