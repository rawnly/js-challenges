const test = require('ava');
const {SimpleAdding} = require('..');
const solutions = require('../src/solutions')

test('SIMPLE ADDING', t => {
	var argument = 3;
	var output = SimpleAdding(argument);

	return t.deepEqual(output, solutions.SimpleAdding(argument));
})