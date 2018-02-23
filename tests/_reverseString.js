const test = require('ava');
const {reverseString} = require('..');
const solutions = require('../src/solutions')

test('REVERSE STRING', t => {
	var argument = 'hello';
	var output = reverseString(argument);

	return t.deepEqual(output, solutions.reverseString(argument));
})