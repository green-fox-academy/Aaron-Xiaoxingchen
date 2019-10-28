'use strict'


// We are going to play with maps. Feel free to use the built-in methods where possible.

// Create an empty map where the keys are integers and the values are characters
const map = {};
// Print out whether the map is empty or not
console.log(object.keys(map).length === 0);
// Add the following key-value pairs to the map
map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
// Print all the keys
    console.log(object.keys(map));
// Print all the values
    console.log(object.values(map));
// Add value D with the key 68
    map[68] = 'D'
// Print how many key-value pairs are in the map
    console.log(object.keys().length);
// Print the value that is associated with key 99
    console.log(map_.get(99));
// Remove the key-value pair where with key 97
    delete(map[97]);
// Print whether there is an associated value with key 100 or not
    console.log(100 in map);
// Remove all the key-value pairs
    objects.keys(map).forEach(element => {
    delete(map[element]);
    });
    console.log(map);