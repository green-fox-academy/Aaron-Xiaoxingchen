const car = require('./Car');
/* Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount 
*/
class Station{
    constructor(){
        this.gasAmount = 100;
    }

    refill(car){
        this.gasAmount -= car.refill(this.gasAmount);
    }
}
