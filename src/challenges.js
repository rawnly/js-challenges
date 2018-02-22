// CHALLENGE 1: ROUND NUMBER
// DESCRIPTION: Write a function that round a number to given decimal places.
// EX: round(Math.PI, 2) => 3.14
function round(n, places = 0) {}


// CHALLENGE 2: MERGE MULTIPLE ARRAYS
// DESCRIPTION: Write a function that merges multiple given arrays.
// EX: ArrayMerge([1, 2], ['a', 'b']) => [1, 2, 'a', 'b']
function arrayMerge(...arr) {}


// CHALLENGE 3: SUM CONTENT OF AN ARRAY
// DESCRIPTION: Write a function to sum the content of an array.
// EX: sumArray([1, 2]) => 3
function arraySum(arr) {}


// CHALLENGE 4: OBJECT FOREACH
// DESCRIPTION: Write a forEach function that works with Objects.
// EX: objectForEach({ a: 1, b: 2, c: 3 }, console.log(key, value)) => a, 1; b, 2; etc...
function objectForEach(obj, callback) {}


module.exports = {
	round, arrayMerge,
	arraySum, objectForEach
};
