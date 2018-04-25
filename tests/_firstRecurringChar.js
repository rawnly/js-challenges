const test = require('ava');
const {firstRecurringChar} = require('..');
const solutions = require('../src/solutions')

test('FIRST RECURRING', t => {
	var argument = 'level';
	var output = firstRecurringChar(argument);

	return t.deepEqual(output, solutions.firstRecurringChar(argument));
})
