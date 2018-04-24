/**
 * Eliminating 'magic constants' with Enumerations (aka enums)
 * 
 * You will observe that 'plain' enums result in an amount of generated code
 * after transpilation; to reduce this boilerplate, investigate the `const
 * enum` construct.
 */

enum Direction {
    North,
    East,
    South,
    West
}

function move(dir: Direction) {
    if (dir === Direction.North) {
        console.log('you were eaten by a grue');
    }
}

move(Direction.North);

// Error: Argument of type '"north"' is not assignable to parameter of type 'Direction'
move('north');