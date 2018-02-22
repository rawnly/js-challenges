const test = require('ava');
const {objectForEach} = require('..');

test('OBJECT: ForEach', t => {
	let count = 0;
	objectForEach({a: 1, b: 2}, (key, value) => {
		count++;
	});

	return t.deepEqual(count, Object.keys({a:1,b:2}).length);
})
