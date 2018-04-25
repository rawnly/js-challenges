const test = require('ava');
const {arrayToTree} = require('..');
const solutions = require('../src/solutions')

test('ARRAY TO TREE', t => {
	var argument = [['folder', 'subfolder', 'file.txt']];
	var output = arrayToTree.apply(this, argument);

	return t.deepEqual(output, solutions.arrayToTree.apply(this, argument));
})
