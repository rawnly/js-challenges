const test = require('ava');
const {round} = require('..');
const solutions = require('../src/solutions')

test('ROUND', t => {
	var argument = Math.PI;
	var output = round(argument);

	return t.deepEqual(output, solutions.round(argument));
})
