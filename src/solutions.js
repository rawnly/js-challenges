// CHALLENGE 1: ROUND NUMBER
// DESCRIPTION: Write a function that round a number to gfiven decimal places.
// Ex: round(Math.PI, 2) => 3.14
function round(n, places = 0) {
	places = Math.pow(10, places)

	return Math.floor(n * places) / places;
}


// CHALLENGE 2: MERGE MULTIPLE ARRAYS
// DESCRIPTION: Write a function that merges multiple given arrays.
// Ex: ArrayMerge([1, 2], ['a', 'b']) => [1, 2, 'a', 'b']
function arrayMerge(...arr) {
	return arr.reduce((a, b) => [...a, ...b]);
}


// CHALLENGE 3: SUM CONTENT OF AN ARRAY
// DESCRIPTION: Write a function to sum the content of an array.
// Ex: sumArray([1, 2]) => 3
function arraySum(arr) {
	return arr.reduce((a,b) => a+b);
}


// CHALLENGE 4: OBJECT FOREACH
// DESCRIPTION: Write a forEach function that works with Objects.
// Ex: objectForEach({ a: 1, b: 2, c: 3 }, console.log(key, value)) => a, 1; b, 2; etc...
function objectForEach(obj, callback) {
	Object.keys(obj).forEach(key => callback(key, obj[key]));

	return obj;
}
