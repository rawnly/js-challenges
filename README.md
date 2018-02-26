# Javascript Challenges
> Some javascript challenges from beginner to advanced.

## What?
A collection of Javascript coding challenges, from beginner to advanced. All challenges are taken from the generous web or created by the contributors.

## So, Why?
I'm creating this repo because I want to bring as many as possible code challenges (for free obviously) in a file or more. I know that there are so many websites like [codewars](https://codewars.com/) or [coderbyte](https://coderbyte.com) but this is different. So many websites are not for free, you need to pay a subscription.

## Challenges
[HERE][challenges] you can find a list of all the challenges. If you have an idea on how to improve this repo don't be shine, post a PR o open a new ISSUE!

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
