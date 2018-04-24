/**
 * Defining the 'shape' of an Object using the `interface` keyword
 * 
 * Observe that Intellisense completes keys in objects that can be inferred of
 * having an explicit type.
 */

interface Person {
    name: string;
    age: number;
    pets: string[];
}

function greetPerson(person: Person) {
    console.log('Hello, ', person.name);
}

greetPerson({
    name: 'Warren',
    age: 32,
    pets: ['Jerry']
});

// Error: Argument of type '"warren"' is assignable to parameter of type 'Person'.
greetPerson('warren');

// Error: Property 'pets' is missing in type '{ name: string; age: number; }'.
greetPerson({
    name: 'Warren',
    age: 32,
});