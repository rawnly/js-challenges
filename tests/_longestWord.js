const test = require('ava');
const {longestWord} = require('..');
const solutions = require('../src/solutions')

test('LONGEST WORD', t => {
	var argument = 'Hi! How are you?';
	var output = longestWord.apply(this, argument);

	return t.deepEqual(output, solutions.longestWord.apply(this, argument));
})