const test = require('ava');
const {isMultipleOf} = require('..');
const solutions = require('../src/solutions')

test('IS MULTIPLE', t => {
	var argument = [2, 2];
	var output = isMultipleOf.apply(this, argument);

	return t.deepEqual(output, solutions.isMultipleOf.apply(this, argument));
})