const test = require('ava');
const {round} = require('..');
const solutions = require('../src/solutions')

test('ROUND', t => {
	var argument = 'hello';
	var output = round(argument);

	return t.deepEqual(output, solutions.round(argument));
})