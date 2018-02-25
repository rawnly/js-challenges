const test = require('ava');
const {alphabeticallySort} = require('..');
const solutions = require('../src/solutions')

test('ALPHABETICALLY SORT', t => {
	var argument = ['Canada','Italy', 'Australia'];
	var output = argument.sort(alphabeticallySort);

	return t.deepEqual(output, argument.sort(solutions.alphabeticallySort));
})