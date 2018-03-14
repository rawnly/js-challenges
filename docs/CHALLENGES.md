# Challenges
Below all the available challenges and some relative examples.

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