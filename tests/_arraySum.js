const test = require('ava');
const {arraySum} = require('..');
const solutions = require('../src/solutions')

test('ARRAY SUM', t => {
	var argument = [1, 2, 3];
	var output = arraySum(argument);

	return t.deepEqual(output, solutions.arraySum(argument));
})