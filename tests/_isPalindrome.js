const test = require('ava');
const {isPalindrome} = require('..');
const solutions = require('../src/solutions')

test('IS PALINDROME', t => {
	var argument = 'racecar';
	var output = isPalindrome(argument);

	return t.deepEqual(output, solutions.isPalindrome(argument));
})