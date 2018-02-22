const test = require('ava');
const {vowelCount} = require('..');
const solutions = require('../src/solutions')

test('VOWEL COUNT', t => {
	var argument = 'hello';
	var output = vowelCount.apply(this, argument);

	return t.deepEqual(output, solutions.vowelCount.apply(this, argument));
})