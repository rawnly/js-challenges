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
module.exports.round = function (n, places = 0) {}


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
module.exports.arrayMerge = function (...arr) {}


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
module.exports.arraySum = function (arr) {}


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
module.exports.objectForEach = function (obj, callback) {}


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
module.exports.reverseString = function (str) {}


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
module.exports.isPalindrome = function (str) {}


/**
 * CHALLENGE 7: IS MULTIPLE OF
 * @name isMultipleOf
 * @description A function that checks if a number is multiple of another number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * isMultipleOf(3, 15) //=> true
 * 
 * 
 * @param {Number} a Number to be checked for multiple of `b`
 * @param {Number} b 
 * 
 * @returns {Boolean} If `a` is multiple of `b` returns true
 */
module.exports.isMultipleOf = function (a, b) {}


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
module.exports.longestWord = function (str) {}


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
module.exports.capitalize = function (str) {}



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
module.exports.vowelCount = function (str) {}



/**
 * CHALLENGE 11: MAX CHAR
 * @name maxChar
 * @description Get the most used char in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * maxChar('hello') //=> l
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {Number} Returns character most used in the string.
 */
module.exports.maxChar = function (str) {}


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
} = {}) {}


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
module.exports.simpleAdding = function (num) {}


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
module.exports.arrayToTree = function (...paths) {}


/**
 * CHALLENGE 15: ALPHABETICALLY SORT
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
module.exports.alphabeticallySort = function (a, b) {}