const Tree = require('./Tree');
const Flower = require('./Flower');
const Garden = require('./Garden');

const myGarden = new Garden();

const plant1 = new Tree('yellow');
const plant2 = new Tree('purple');
const plant3 = new Flower('blue');
const plant4 = new Flower('orange');

myGarden.addPlant(plant1);
myGarden.addPlant(plant2);
myGarden.addPlant(plant3);
myGarden.addPlant(plant4);

console.log(myGarden.toString());
console.log('===============')
myGarden.water(40);
console.log(myGarden.toString());
console.log('===============')
myGarden.water(70);
console.log(myGarden.toString());
console.log('===============')