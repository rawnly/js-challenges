const test = require('ava');
const {arrayMerge} = require('..');
const solutions = require('../src/solutions')

test('ARRAY MERGE', t => {
	var argument = [[1, 2], [3, 4]];
	var output = arrayMerge.apply(this, argument);

	return t.deepEqual(output, solutions.arrayMerge.apply(this, argument));
})