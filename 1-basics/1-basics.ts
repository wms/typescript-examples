/**
 * Example 1 - demonstrates type-checking on 'plain' JavaScript, provided the
 * file has a .ts extension, and `strict: false` in tsconfig.
 */

// Variable `now` implicitly gets type `Date` due to initialization
var now = new Date();

// Error: Operator '+' cannot be applied to types 'Date' and '10'.
console.log(now + 10);

// `name` parameter implicitly has type `any`.
function greet(name) {
    console.log('Hello, ' + name);
}

// `greet` will happily accept a paramter of any type
greet('Warren');
greet(123);

// Explicitly make 'name` parameter type 'string'
function greetTyped(name: string) {
    console.log('Hello, ' + name);
}

greetTyped('Warren');
// Error: Argument of type '1337' is not assignable to parameter of type 'string'
greetTyped(1337);

// Explicitly set type of `x` to `number` without initializing
var x: number;

// Error: Type '"Hello"' is not assignable to type 'number'
x = 'Hello';