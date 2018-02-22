const test = require('ava');
const {maxChar} = require('..');
const solutions = require('../src/solutions')

test('MAX CHAR', t => {
	var argument = 'hello';
	var output = maxChar.apply(this, argument);

	return t.deepEqual(output, solutions.maxChar.apply(this, argument));
})