const test = require('ava');
const {arrayMerge} = require('..');

test('ARRAY: MERGE', t => {
	var output = arrayMerge([1, 2], [3, 4]);

	return t.deepEqual(output, [1, 2, 3, 4]);
})
