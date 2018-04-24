/**
 * Union types and type guards
 */

// `x` may be a string or a number
function double(x: string | number) {
    if (typeof x === 'string') {
        // `x` has type `string` here, due to `typeof` check, aka type guarding
        return x + ' ' + x;
    }

    if (typeof x === 'number') {
        // `x` has type `number` here
        return x * 2;
    }
}

var str = double('hello'); // 'hello hello'
var n = double(4); // 8

// Error: Argument of type 'false' is not assignable to parameter of type 'string | number'
double(true);