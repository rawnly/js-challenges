const test = require('ava');
const { objectMerge } = require('..');

const solutions = require('../src/solutions')

test('OBJECT MERGE', t => {
	var arguments = [{a: 1, b: 2}, { c: 3, d: 4}];

	return t.deepEqual(objectMerge(arguments[0], arguments[1]), solutions.objectMerge(arguments[0], arguments[1]));
})