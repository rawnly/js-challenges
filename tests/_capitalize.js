const test = require('ava');
const {capitalize} = require('..');
const solutions = require('../src/solutions')

test('CAPITALIZE', t => {
	var argument = 'hello';
	var output = capitalize(argument);

	return t.deepEqual(output, solutions.capitalize(argument));
})