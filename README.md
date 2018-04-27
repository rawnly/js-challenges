<p align="center">
	</br>
	</br>
	</br>
	</br>
	<img alt="logo" src="docs/assets/js_logo.png" height="30px">
	</br>
	</br>
	Some javascript challenges from beginner to advanced.
</p>
</br>
</br>
</br>

### Index
- [What](#what)
- [Why](#so-why)
- [Challenges](#challenges)
  1. [Round number](#round-number)
  2. [Merge multiple arrays](#merge-multiple-arrays)
  3. [Sum content of an array](#sum-content-of-an-array)
  4. [Object `forEach`](#object-foreach)
  5. [String reverse](#string-reverse)
  6. [More Challenges](docs/CHALLENGES.md)
- [Partecipating](#partecipating)
- [Contributing](#contributing)
  - [Notes](#contributing-notes)
- [Related Repos](#related)

## What?
A collection of Javascript coding challenges, from beginner to advanced. All challenges are taken from the generous web or created by some awesome [contributors][contributors].

## So, Why?
I'm creating this repo because I want to bring as many as possible code challenges (for free obviously) in a file or more. I know that there are so many websites like [codewars](https://codewars.com/) or [coderbyte](https://coderbyte.com) but this is different. So many websites are not for free, you need to pay a subscription.

## Challenges
Below a few challenges, you can get the full documentation [here](docs/CHALLENGES.md).

If you have an idea on how to improve this repo don't be shine, post a **PR** o open a new **ISSUE**!

1. #### ROUND NUMBER
	- **NAME**: `round`
	- **DESCRIPTION**: Write a function that round a number to given decimal places.
	```js 
		round(Math.PI, 2); // => 3.14 
	```

2. #### MERGE MULTIPLE ARRAYS
	- **NAME**: `arrayMerge`
	- **DESCRIPTION**: Write a function that merges multiple given arrays.
	```js 
		arrayMerge([1, 2], [3, 4]); // => [1, 2, 3, 4]
	```

1. ####  SUM CONTENT OF AN ARRAY
	- **NAME**: `arraySum`
	- **DESCRIPTION**: Write a function to sum the content of an array.
	```js
		arraySum([1, 2, 3]) // => 6
	```

1. ####  OBJECT FOREACH
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

5. #### STRING REVERSE
	- **NAME**: `reverseString`
	- **DESCRIPTION**: Write a function that reverse a string.
	```js 
		reverseString('hello world!') //=> '!dlrow olleh'
	```

---
## Participating
1. Clone this repo
2. Install all dependencies via `npm install`.
3. Fill all challenges in [`./src/challenges.js`][srcChallenges].
4. Test them via `npm run test`.
5. Share the challenge on twitter via `#jschallenges`
6. Some ideas? Read below the [contributing](#contributing) paragraph or open an **ISSUE**!

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
##### READ MORE ABOUT **JSODC** [here](http://usejsdoc.org/)

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
[contributors]: https://github.com/Rawnly/js-challenges/graphs/contributors
