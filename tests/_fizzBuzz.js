const test = require('ava');
const {fizzBuzz} = require('..');
const solutions = require('../src/solutions')

test('FIZZ BUZZ', t => {
    var arguments = {n1: 3, n2: 5, max: 15};
    var expectedResult = solutions.fizzBuzz(arguments);

    var output = fizzBuzz(arguments);

    return t.deepEqual(output, expectedResult);
});