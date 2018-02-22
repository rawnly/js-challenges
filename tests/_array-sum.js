const test = require('ava');
const {arraySum} = require('..');

test('ARRAY: SUM', t => {
	var output = arraySum([1, 2, 3]);

	return t.deepEqual(output, 6);
})
