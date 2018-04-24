// `title-case` ships with type definitions, making it usable and meaningful immediately
import titleCase from 'title-case';
// `lodash` does not include type definitions, they need to be explicitly installed from `@types/lodash`
import _ from 'lodash';

console.log(titleCase('hello_world'));
console.log(_.sum([4, 8, 15, 16, 23, 42]));