const typeCheck = require('./typeCheck');

/**
 * CHALLENGE 1: ROUND NUMBER
 * @name round
 * @description Write a function that round a number (`n`) to given decimal places.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 *
 * 
 * @example Usage:
 * round(Math.PI, 2) // => 3.14
 * 
 * 
 * @param {Number} n The number to be rounded
 * @param {Number} places Decimal places
 * 
 * @returns {Number} Rounded number
 */
module.exports.round = function (n, places = 0) {
	typeCheck({
		param: n,
		type: 'number'
	}, {
		param: places,
		type: 'number'
	})

	places = Math.pow(10, places)

	return Math.floor(n * places) / places;
}


/**
 * CHALLENGE 2: MERGE MULTIPLE ARRAYS
 * @name arrayMerge
 * @description Write a function that merges multiple given arrays.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * ArrayMerge([1, 2], ['a', 'b']) //=>  [1, 2, 'a', 'b']
 * 
 * 
 * @param {Array} arr Arrays to merge
 * 
 * @returns {Array} Returns the merge of all arrays
 */
module.exports.arrayMerge = function (...arr) {
	typeCheck({
		param: arr,
		type: 'array'
	})

	return arr.reduce((a, b) => {
		typeCheck({
			param: a,
			type: 'array'
		}, {
			param: b,
			type: 'array'
		})

		return [...a, ...b]
	});
}


/**
 * CHALLENGE 3: SUM CONTENT OF AN ARRAY
 * 
 * @name arraySum
 * @description Write a function to sum the content of an array
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * arraySum([10, 10, 10]) //=> 30
 * 
 * 
 * @param {Array} arr Array to sum
 * 
 * @return {Number} The sum of all items in the array
 */
module.exports.arraySum = function (arr) {
	typeCheck({
		param: arr,
		type: 'array'
	})

	return arr.reduce((a, b) => {
		typeCheck({
			param: a,
			type: 'number'
		}, {
			param: b,
			type: 'number'
		})
		
		return a+b;
	});
}


/**
 * CHALLENGE 4: OBJECT FOREACH
 * @name objectForEach
 * @description ForEach function that works with Objects.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * objectForEach({ a:1, b:2 }, (key, value) => console.log(key, value)) //=> { a:1, b:2 }
 * 
 * 
 * @param {Object} obj Main Object
 * @param {Function} callback Function callback
 * 
 * @returns {Object} The start object
 */
module.exports.objectForEach = function (obj, callback) {
	Object.keys(obj).forEach(key => callback(key, obj[key]));

	return obj;
}


/**
 * CHALLENGE 5: REVERSE STRING
 * @name reverseString
 * @description A function that reverse a string.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * reverseString('hello') //=> 'ollah'
 * 
 * 
 * @param {String} str String to be reversed.
 * 
 * @returns {String} String reversed.
 */
module.exports.reverseString = function (str) {
	return str.split('').reverse().join('')
}


/**
 * CHALLENGE 6: CHECK PALINDROME
 * @name isPalindrome
 * @description A function that checks if a word is a palindrome.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * isPalindrome('racecar') //=> true
 * 
 * 
 * @param {String} str String to be checked for palindrome.
 * 
 * @returns {Boolean} Return true if is a palindrome.
 */
module.exports.isPalindrome = function (str) {

	return str.split('').reverse().join('') === str;
}


/**
 * CHALLENGE 7: IS MULTIPLE OF
 * @name isMultipleOf
 * @description A function that checks if a number is multiple of another number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * isMultipleOf(15, 3) //=> true
 * 
 * 
 * @param {Number} a Number to be checked for multiple of `b`
 * @param {Number} b 
 * 
 * @returns {Boolean} If `a` is multiple of `b` returns true
 */
module.exports.isMultipleOf = function (a, b) {

	return a % b === 0;
}


/**
 * CHALLENGE 8: GET THE LONGEST WORD
 * @name longestWord
 * @description A function that returns the longest word of a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * longestWord('short loooong l0000ng') //=> 'loooong'
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {String} Returns the longest word of `str`
 */
module.exports.longestWord = function (str) {

	var words = str.trim().replace(/\W/g, ' ').trim().split(/\s+/);

	words = words.sort((a, b) => {
		return b.length - a.length
	})

	return words.shift()
}


/**
 * CHALLENGE 9: CAPITALIZE
 * @name capitalize
 * @description A function that capitalize each word in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * capitalize('hello world') //=> 'Hello World'
 * 
 * 
 * @param {String} str The string to be capitalized 
 * 
 * @returns {String} Returns a capitalized string
 */
module.exports.capitalize = function (str) {

	var words = str.trim().split(/\s+/g)

	return words.map(word => {
		return word[0].toUpperCase() + word.substr(1, word.length)
	}).join(' ');
}



/**
 * CHALLENGE 10: VOWEL COUNT
 * @name vowelCount
 * @description A function that count vowel in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * vowelCount('fox') //=> 1
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {Number} Returns number of vowels in `str`
 */
module.exports.vowelCount = function (str) {
	let isVowel = /[aAeEiIoOuU]/g


	return str.split('').filter(letter => {
		return isVowel.test(letter)
	}).length
}



/**
 * CHALLENGE 11: MAX CHAR
 * @name maxChar
 * @description Get the most used char in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * maxChar('hello') //=> { count: 2, char: 'l' }
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {Object} Returns character most used in the string.
 */
module.exports.maxChar = function (str) {
	let charMap = {};
	let charCount = 0;
	let charMostUsed = '';



	for (var i = 0; i < str.split('').length; i++) {
		var letter = str.split('')[i];

		if (charMap[letter]) {
			charMap[letter]++
		} else {
			charMap[letter] = 1
		}
	}

	for (char in charMap) {
		if (charMap[char] > charCount) {
			charCount = charMap[char]
			charMostUsed = char;
		}
	}

	return {
		char: charMostUsed,
		count: charCount
	};
}


/**
 * CHALLENGE 12: FIZZ BUZZ
 * @name fizzBuzz
 * @description Fizz Buzz game, generate number from 0 to `max` and if the number is multiple of `n1` print "Fizz", if the number is multiple of `n2` print "Buzz", if is multiple of both print "FizzBuzz" else print the number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 *  
 * @example
 * fizzBuzz() //=> [0, 1, 2, Fizz, 4, Buzz ...etc]
 * 
 * 
 * @param {Number} n1 Fizz number
 * @param {Number} n2 Buzz number
 * @param {Number} max Length of the array
 * 
 * @returns {Array} Returns an array of numbers
 */
module.exports.fizzBuzz = function ({
	n1 = 3,
	n2 = 5,
	max = 100
} = {}) {
	var numbers = [];
	for (let i = 0; i <= max; i++) {
		let char = '';

		if (i % n1 === 0) {
			char += 'Fizz';
		}

		if (i % n2 === 0) {
			char += 'Buzz';
		}

		numbers.push(char || i);
	}

	return numbers
}


/**
 * CHALLENGE 13: SIMPLE ADDING
 * @name simpleAdding
 * @description Write a function that sums all numbers from 0 to the given number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * simpleAdding(3) //=> 6
 * 
 * 
 * @param {Number} num Counter 
 * 
 * @returns {Number} Returns sum of all numbers from 0 to `counter`
 */
module.exports.simpleAdding = function (num) {
	var numbers = [];


	num = Math.abs(num)

	if (num === 1) return 1;

	for (var i = 0; i <= num; i++) {
		numbers.push(i)
	}

	return numbers.reduce((a, b) => a + b);
}


/**
 * CHALLENGE 14: ARRAY TO TREE
 * @name arrayToTree
 * @description Transform an array into a tree like object.
 * @author Nenad Vracar (http://nenadvracar.com)
 * 
 * @see https://stackoverflow.com/questions/48951551/what-is-the-most-efficient-way-to-transform-an-array-of-array-of-string-to-a-tre
 * 
 * @example Usage:
 * arrayToTree(['folder', 'subfolder', 'file.txt']) //=> [{name: 'folder', children: [ { name: 'subfolder', children: [ {name: 'file.txt'} ]} ]}]
 * 
 * 
 * @param {Array} paths Array of the items to convert 
 * 
 * @returns {Array} Returns the tree generated from `paths`
 */
module.exports.arrayToTree = function (...paths) {
	var result = [],
		tmp = {
			result
		}

	paths.forEach(function (path) {
		path.reduce(function (r, name, i) {
			if (!r[name]) {
				var o = {
						name
					},
					children = []

				r[name] = {
					result: children
				}

				if (path[i + 1]) {
					o.children = children
				}

				r.result.push(o)
			}
			return r[name]
		}, tmp)
	})

	return result;
}


/**
 * CHALLENGE 14: ARRAY TO TREE
 * @name alphabeticallySort
 * @description Write a function that can be used into an Array.sort() for sorting items alphabetically.
 * @author Nachiketha <nachikethashu@gmail.com>
 * 
 * @see https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
 * 
 * @example Usage:
 * ['Italy', 'Canada', 'Australia'].sort(alphabeticallySort) //=> ['Australia', 'Canada', 'Italy']
 * 
 * 
 * @param {String} a First argument of the `.sort` function 
 * @param {String} b Second argument of the `.sort` function 
 * 
 * @returns {Boolean}
 */
module.exports.alphabeticallySort = function (a, b) {
	return a.localeCompare(b)
}


/**
* CHALLENGE 16: FIRST RECURRING CHARACTER
* @name firstRecurringCharacter
* @description Write a function that returns the first recurring character in a string or null if no recursion.
* @author Federico Vitale <fedevitale99[at]gmail.com>
*
* @example Usage:
* firstRecurringChar('federico') // => 'e'
*
* @param {String} str String to analyze
*
* @returns {String} or {Null}
*/
module.exports.firstRecurringChar = function(str) {
	typeCheck({ param: str, type: 'string' })
	var charCount = {};

	// Let's removem all spaces
	str = str.replace(/\s+/g, '');

	for (let i in str) {
		var char = str[i];
	
		if ( char in charCount ) return
		charCount[char] = 1;
	}

	return null;
}


/**
* CHALLENGE 17: OBJECT MERGE
* @name objectMerge
* @description Write a function that returns an object that includes all given objects.
* @author Federico Vitale <fedevitale99[at]gmail.com>
*
* @example Usage:
* objectMerge({ a: 'b' }, { c: 'd' }) // => { a: 'b', c: 'd' }
*
* @param {Array} objects - An array of objects
*
* @returns {Object}
*/
module.exports.objectMerge = function(...objects) {
	if ( Array.isArray(objects[0]) ) {
		objects = objects[0]
	}

	return objects.reduce((a, b) => {
		typeCheck({
			param: a,
			type: 'object'
		}, {
			param: b,
			type: 'object'
		})

		return Object.assign(a, b);
	})
}
