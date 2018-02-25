// CHALLENGE 1: ROUND NUMBER
// DESCRIPTION: Write a function that round a number to given decimal places.
// Ex: round(Math.PI, 2) => 3.14 (By default it will return 0 decimal places, round(Math.PI, 2) => 3)
module.exports.round = function(n, places = 0) {
	places = Math.pow(10, places)

	return Math.floor(n * places) / places;
}


// CHALLENGE 2: MERGE MULTIPLE ARRAYS
// DESCRIPTION: Write a function that merges multiple given arrays.
// Ex: ArrayMerge([1, 2], ['a', 'b']) => [1, 2, 'a', 'b']
module.exports.arrayMerge = function(...arr) {
	return arr.reduce((a, b) => [...a, ...b]);
}


// CHALLENGE 3: SUM CONTENT OF AN ARRAY
// DESCRIPTION: Write a function to sum the content of an array.
// Ex: sumArray([1, 2]) => 3
module.exports.arraySum = function(arr) {
	return arr.reduce((a,b) => a+b);
}


// CHALLENGE 4: OBJECT FOREACH
// DESCRIPTION: Write a forEach function that works with Objects.
// Ex: objectForEach({ a: 1, b: 2, c: 3 }, console.log(key, value)) => a, 1; b, 2; etc...
module.exports.objectForEach = function(obj, callback) {
	Object.keys(obj).forEach(key => callback(key, obj[key]));

	return obj;
}


// CHALLENGE 5: STRING REVERSE
// DESCRIPTION: Write a function that reverse a string.
// Ex: reverseString('hello') => 'ollah'
module.exports.reverseString = function(str) {
	return str.split('').reverse().join('')
}

// CHALLENGE 6: CHECK PALINDROME
// DESCRIPITION: Write a function that checks if a word is a palindrome.
// Ex: isPalindrome('racecar') => true
module.exports.isPalindrome = function(str) {
	return str.split('').reverse().join('') === str;
}

// CHALLENGE 7: IS MULTIPLE OF
// DESCRIPTION: Write a function that checks if a number is multiple of another number.
// Ex: isMultipleOf(3, 15) => true
module.exports.isMultipleOf = function(a, b) {
	return a % b === 0;
}


// CHALLENGE 8: GET THE LONGEST WORD
// DESCRIPTION: Write a function that returns the longest word of a sentence.
// Ex: longestWord('short loooong l0000ng') => 'loooong'
module.exports.longestWord = function(str) {
	var words = str.trim().replace(/\W/g, ' ').trim().split(/\s+/);

	words = words.sort((a, b) => {
		return b.length - a.length
	})

	return words.shift()
}


// CHALLENGE 9: CAPITALIZE
// DESCRIPTION: Write a function that capitalize each word in a sentence.
// Ex: capitalize('hello world') => 'Hello World'
module.exports.capitalize = function(str) {
	var words = str.trim().split(/\s+/g)
	return words.map(word => {
		return word[0].toUpperCase() + word.substr(1, word.length)
	}).join(' ');
}


// CHALLENGE 10: VOWEL COUNT
// DESCRIPTION: Write a function that count vowel in a sentence.
// Ex: vowelCount('fox') => 1
module.exports.vowelCount = function(str) {
	let isVowel = /[aAeEiIoOuU]/g
	return str.split('').filter(letter => {
		return isVowel.test(letter)
	}).length
}


// CHALLENGE 11: MAX CHAR
// DESCRIPTION: Get the most used char in a sentence.
// Ex: maxChar('hello') => l
module.exports.maxChar = function(str) {
	let charMap = {};
	let charCount = 0;
	let charMostUsed = '';

	for(var i=0; i<str.split('').length; i++) {
		var letter = str.split('')[i];

		if ( charMap[letter] ) {
			charMap[letter]++
		} else {
			charMap[letter] = 1
		}
	}

	for (char in charMap) {
		if ( charMap[char] > charCount ) {
			charCount = charMap[char]
			charMostUsed = char;
		}
	}

	return {
		char: charMostUsed,
		count: charCount
	};
}


// CHALLENGE 12: FIZZ BUZZ
// DESCRIPTION: Fizz Buzz game, generate number from 0 to 100 and if the number is multiple of 3 print "Fizz", if the number is multiple of 5 print "Buzz", if is multiple of both print "FizzBuzz" else print the number.
// Ex: fizzBuzz() => 0, 1, 2, Fizz, 4, Buzz ...etc
module.exports.fizzBuzz = function({n1 = 3, n2 = 5, max = 100} = {}) {
	for(let i=0; i<=max; i++) {
		let char = '';

		if ( i % n1 === 0 ) {
			char += 'Foo';
		}

		if ( i % n2 === 0 ) {
			char += 'Bar';
		}

		console.log( char || i );
	}
}


// CHALLENGE 13: SIMPLE ADDING
// DESCRIPTION: Write a function that sums all numbers from 0 to the given number.
// Ex: simpleAdding(3) => 6 (1 + 2 + 3 )
module.exports.SimpleAdding = function(num) {
  var numbers = [];

	num = Math.abs(num)

	if ( num === 1 ) return 1;

  for(var i=0; i<=num; i++) {
    numbers.push(i)
  }

  return numbers.reduce((a, b) => a+b);
}