/**
 * Type Parameters
 */

// Return type of `identity` is whatever type was given to it
function identity<T>(x: T): T {
    return x;
}

identity(10);
identity('hello');

// `xs` should be some kind of array; return type is whatever type is 'wrapped' in the Array
function head<T>(xs: T[]): T {
    return xs[0];
}

head([4, 8, 15]);