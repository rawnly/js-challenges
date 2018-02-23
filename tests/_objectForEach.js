const test = require('ava');
const {objectForEach} = require('..');
const solutions = require('../src/solutions')

test('OBJECT FOR EACH', t => {
	var argument = {a: 1, b: 2};
	var callback = () =>{};
	var output = objectForEach(argument, callback);

	return t.deepEqual(output, solutions.objectForEach(argument, callback));
})