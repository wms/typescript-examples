/**
 * Explicit function return types
 */
function greet(name: string): void {
    console.log('Hello, ' + name);
}

function badGreet(name: string): void {
    // Error: Type 'string' is not assignable to type 'void'.
    return 'Hello, ' + name;
}

function formatGreet(name: string): string {
    return 'Hello, ' + name;
}

// Error: A function whose declare type is neither 'void' nor 'any' must return a value.
function badFormatGreet(name: string): string {
    console.log('Hello, ' + name);
}