const test = require('ava');
const {simpleAdding} = require('..');
const solutions = require('../src/solutions')

test('SIMPLE ADDING', t => {
	var argument = 3;
	var output = simpleAdding(argument);

	return t.deepEqual(output, solutions.simpleAdding(argument));
})