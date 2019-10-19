/* The Flower
    needs water if its current water amount is less then 5
    when watering it the flower can only absorb the 75% of the water
    eg. watering with 10 the flower's amount of water should only increase with 7.5 
*/
const Plant = require('./Plant');

class Flower extends Plant{
    constructor(color, waterLevel){
        super(color, waterLevel);
        this.minimumWaterLevel = 5;
        this.absorbLevel = .75;
    }
}

module.exports = Flower;