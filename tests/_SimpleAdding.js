const test = require('ava');
const {SimpleAdding} = require('..');
const solutions = require('../src/solutions')

test('SIMPLE ADDING', t => {
	var argument = 3;
	var output = SimpleAdding.apply(this, argument);

	return t.deepEqual(output, solutions.SimpleAdding.apply(this, argument));
})