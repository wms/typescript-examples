/**
 * Intersection types
 */

interface HasName {
    name: string;
}

interface OwnsPets {
    pets: string[];
}

function showNameAndPets(person: HasName & OwnsPets) {
    console.log('Name: ', person.name);
    console.log('Pets: ', person.pets.join(', '));
}

showNameAndPets({
    name: 'Warren',
    pets: ['Jerry']
});

// Error: Property 'pets' is missing in type '{ name: string; }'
showNameAndPets({
    name: 'Warren'
});