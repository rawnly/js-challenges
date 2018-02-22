const test = require('ava');
const {capitalize} = require('..');
const solutions = require('../src/solutions')

test('CAPITALIZE', t => {
	var argument = 'hello';
	var output = capitalize.apply(this, argument);

	return t.deepEqual(output, solutions.capitalize.apply(this, argument));
})