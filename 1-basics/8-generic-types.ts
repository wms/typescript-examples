/**
 * Generic Types
 * 
 * `Promise` is a generic type - it can 'wrap' another type. In this example,
 * an Interface type named `User`.
 */
interface User {
    id: number;
    name: string;
}

function fetchUser(id: number): Promise<User> {
    return fetch('/users/' + id)
        .then(function (response) {
            return response.json()
        });
}

fetchUser(1337)
    .then(function (user) {
        console.log(user.name);
    });

/**
 * Generic types may contain other generic types. `Array` is a built-in type,
 * and can typically be used in place of a `[]` suffix on a type declaration -
 * ie, `Promise<Array<User>>` is the same as `Promise<User[]>`.
 * 
 * Use whichever form suits your code style/linting rules.
 */
function fetchUsers(name: string): Promise<Array<User>> {
    return fetch('/users?name=' + name)
        .then(function (response) {
            return response.json();
        });
}

fetchUsers('warren')
    .then(function(people) {
        var ids =
            people.map(function (person) {
                return person.id
            })
            .join(', ');

        console.log(ids);
    });