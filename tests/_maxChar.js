const test = require('ava');
const {maxChar} = require('..');
const solutions = require('../src/solutions')

test('MAX CHAR', t => {
	var argument = 'hello';
	var output = maxChar(argument);

	return t.deepEqual(output, solutions.maxChar(argument));
})