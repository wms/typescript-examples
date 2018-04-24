/**
 * Working with arrays. Oberserve that:
 * 
 * 1. Type definition of `xs.reduce` is given to us
 * 2. Second parameter to reduce function 'unwraps' to type `number`
 * 3. Return value of `xs.reduce` is implied by second parameter (the initial value)
 * 4. ...which in-turn implies the return value of `sum`...
 * 5. ...which in-turn implies the type of `result` by assignment
 */
function sum(xs: number[]) {
    return xs.reduce(function (total, x) {
        return total + x;
    }, 0);
}

var result = sum([4, 8, 15, 16, 23, 42]);
console.log(result);