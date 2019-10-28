'use strict';

const animals = ['dog', 'cat', 'kitten'];

const res = animals.map((e) => {
    return e + 's';
});
console.log(res);
// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops