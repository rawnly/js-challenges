# Javascript Challenges
> Some javascript challenges from beginner to advanced.

![logo](docs/assets/logo.png)

### Index
- [What](#what)
- [Why](#so-why)
- [Challenges](#challenges)
  1. [Round number](#1-round-number)
  2. [Merge multiple arrays](#2-merge-multiple-arrays)
  3. [Sum content of an array](#3-sum-content-of-an-array)
  4. [Object `forEach`](#4-object-foreach)
  5. [String reverse](#5-string-reverse)
  6. [Check palindrome](#6-check-palindrome)
  7. [Check if is multiple](#7-is-multiple)
  8. [Get the longest word](#8-get-the-longest-word)
  9. [Capitalize a string](#9-capitallize)
  10. [Vowel count](#10-vowel-count)
  11. [Max char](#11-max-char)
  12. [fizzBuzz Game](#12-fizz-buzz)
  13. [Simple Adding](#13-simple-adding)
  14. [Array to tree](#14-array-to-tree)
  15. [Alphabetically sort](#15-alphabetically-sort)
  16. [First recurring character](#16-first-recurring-character)
- [Participating](#partecipating)
- [Contributing](#contributing)
  - [Notes](#contributing-notes)
- [Related Repos](#related)

## What?
A collection of Javascript coding challenges, from beginner to advanced. All challenges are taken from the generous web or created by the contributors.

## So, Why?
I'm creating this repo because I want to bring as many as possible code challenges (for free obviously) in a file or more. I know that there are so many websites like [codewars](https://codewars.com/) or [coderbyte](https://coderbyte.com) but this is different. So many websites are not for free, you need to pay a subscription.

## Challenges
Below a list of all the challenges. If you have an idea on how to improve this repo don't be shine, post a PR o open a new ISSUE!

- #### 1. ROUND NUMBER
	- **NAME**: `round`
	- **DESCRIPTION**: Write a function that round a number to given decimal places.
	```js 
		round(Math.PI, 2); // => 3.14 
	```

- #### 2. MERGE MULTIPLE ARRAYS
	- **NAME**: `arrayMerge`
	- **DESCRIPTION**: Write a function that merges multiple given arrays.
	```js 
		arrayMerge([1, 2], [3, 4]); // => [1, 2, 3, 4]
	```

- #### 3. SUM CONTENT OF AN ARRAY
	- **NAME**: `arraySum`
	- **DESCRIPTION**: Write a function to sum the content of an array.
	```js
		arraySum([1, 2, 3]) // => 6
	```

- #### 4. OBJECT FOREACH
	- **NAME**: `objectForEach`
	- **DESCRIPTION**: Write a forEach function that works with Objects.
	```js
		var obj = {
			first_name: 'Elon',
			last_name: 'Musk'
		}

		objectForEach(obj, (key, value) => {
			console.log(key, value) 
		})

		//=> 'first_name', 'Elon'
		//=> 'last_name', 'Musk'
	```

- #### 5. STRING REVERSE
	- **NAME**: `reverseString`
	- **DESCRIPTION**: Write a function that reverse a string.
	```js 
		reverseString('hello world!') //=> '!dlrow olleh'
	```

- #### 6. CHECK PALINDROME
	- **NAME**: `isPalindrome`
	- **DESCRIPTION**: Write a function that checks if a word is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).
	```js 
		isPalindrome('level') //=> true
		isPalindrome('racecar') //=> true
	```

- #### 7. IS MULTIPLE
	- **NAME**: `isMultipleOf`
	- **DESCRIPTION**: Write a function that checks if a number is multiple of another number.
	```js
		isMultipleOf(15, 3) //=> true
		isMultipleOf(15, 5) //=> true
	```

- #### 8. GET THE LONGEST WORD
	- **NAME**: `longestWord`
	- **DESCRIPTION**: Write a function that returns the longest word of a sentence.
	```js
		longestWord('Hello beautiful people!') //=> 'beautiful'
		longestWord('aaaa bbb cc d eeee') //=> 'aaaa'
	```

- #### 9. CAPITALIZE
	- **NAME**: `capitalize`
	- **DESCRIPTION**: Write a function that capitalize each word in a sentence.
	```js
		capitalize('hello world') //=> 'Hello World'
	```

- #### 10. VOWEL COUNT
	- **NAME**: `vowelCount`
	- **DESCRIPTION**: Write a function that count vowel in a sentence.
	```js
		vowelCount('hello') //=> 2
	```

- #### 11. MAX CHAR
	- **NAME**: `maxChar`
	- **DESCRIPTION**: Get the most used char in a sentence.
	```js
		maxChar('hello world') //=> {count: 3, char: 'l'}
	```

- #### 12. FIZZ BUZZ
	- **NAME**: `fizzBuzz`
	- **DESCRIPTION**: Fizz Buzz game, generate number from 0 to 100 and if the number is multiple of 3 print "Fizz", if mutliple of 5 print "Buzz", if is multiple of both print "FizzBuzz" else print the number.
	```js
		fizzBuzz();

		//=> 1 
		//=> 2
		//=> fizz 
		//=> 4 
		//=> buzz
		//=> fizz
		//=> 7
		//=> 8
		//=> fizz
		//=> buzz
	```


- #### 13. SIMPLE ADDING
	- **NAME**: `simpleAdding`
	- **DESCRIPTION**: Write a function that sums all numbers from 0 to the given number.
	```js
		simpleAdding(3) //=> 6
	```

- #### 14. ARRAY TO TREE
	- **NAME**: `arrayToTree`
	- **DESCRIPTION**: Transform an array into a tree like object.
	```js
		arrayToTree(['folder', 'subfolder', 'file.txt']) //=> [{name: 'folder', children: [ { name: 'subfolder', children: [ {name: 'file.txt'} ]} ]}]
	```

- #### 15. ALPHABETICALLY SORT
	- **NAME**: `alphabeticallySort`
	- **DESCRIPTION**: Write a function that can be used into an `Array.sort()` for sorting items alphabetically.
	```js
		var myArray = ['Italy', 'Canada', 'Germany'];
		var mySortedArray = myArray.sort(alphabeticallySort) //=> ['Canada', 'Germany', 'Italy']
	```

- #### 16. FIRST RECURRING CHARACTER
	- **NAME**: `firstRecurringChar`
	- **DESCRIPTION**: Write a function that returns the furst recurring character in a string.
	```js
		firstRecurringChar('abacyb') //=> 'a'
	```

---
## Participating
1. Clone this repo
2. Install all dependencies via `npm install`.
3. Fill all challenges in [`./src/challenges.js`][srcChallenges].
4. Test them via `npm run test`.
5. Some ideas? Submit a **PR** or open an **ISSUE**!

## Contributing
1. Clone this repo.
2. Install all dependencies via `npm install`.
3. Write down your challenge (with solution) in [`./src/challenges.js`][srcChallenges].
4. Write a test for your challenge in `./test/_your-challenge.js`.
5. Import your test in the `test.js` file.
6. Test your challenge via `npx ava ./test/_your-challenge.js`.
7. Move your solution to [`./src/solutions.js`][srcSolutions].
8. Submit your PR!


### Contributing notes
All challenges need to follow this scheme: 
> (2 spaces between each challenge)

```js
    /** 
     * CHALLEBGE <n>: <CHALLENGE-NAME>
     * @name <functionName>
     * @description <challenge-description>
     * @author <Your Name> <you[at]domain.com>
     * 
     * 
     * @example Usage:
     * functionName(args) //=> output
     * 
     * 
     * @param {Type} a ...
     * @param {Type} b ...
     * 
     * @returns {Type} ... 
    */
    module.exports.challenge_name = function() {}
```
If your challenge is taken from forums please link the thread or the stackoverflow question with `@see`
> READ MORE ABOUT **JSODC** [here](http://usejsdoc.org/)

## Related
- [Javascript30][js30] - 30 Day Vanilla JS Challenge
- [Javascript Cardio][jscardio] - JavaScript challenges and problems

--------
<p align="center">
    <a href="https://twitter.com/rawnlydev">Twitter</a> • <a href="https://instagram.com/fede.vitale">Instagram</a>  • <a href="https://github.com/rawnly">GitHub</a>
</p>


[js30]: https://github.com/wesbos/JavaScript30
[jscardio]: https://github.com/bradtraversy/javascript_cardio
[challenges]: docs/CHALLENGES.md
[srcChallenges]: src/challenges.js
[srcSolutions]: src/solutions.js
