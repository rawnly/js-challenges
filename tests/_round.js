const test = require('ava');
const {round} = require('..');

test('ROUND', t => {
	var output = round(Math.PI, 2);

	return t.deepEqual(output, 3.14);
})
