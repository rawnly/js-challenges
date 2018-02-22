const test = require('ava');
const {reverseString} = require('..');
const solutions = require('../src/solutions')

test('REVERSE STRING', t => {
	var argument = 'hello';
	var output = reverseString.apply(this, argument);

	return t.deepEqual(output, solutions.reverseString.apply(this, argument));
})