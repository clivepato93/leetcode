// https://leetcode.com/problems/return-length-of-arguments-passed/



/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    console.dir(args)

    return !args.length ? 0: 1+argumentsLength(...args.slice(1))
};


console.log(argumentsLength(1, 2, 3))