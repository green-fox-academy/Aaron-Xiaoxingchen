/* Petrol Station
    Create a Station and a Car classes
    Station
    gasAmount
    refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
   
    Car
    gasAmount
    capacity
    create constructor for Car where:
    initialize gasAmount -> 0
    initialize capacity -> 100 
    */
    
    module.exports = class Car{
        constructor(){
            this.gasAmount = 0;
            this.capacity = 100;
        }
         refill(amount){
             if(amount < this.capacity - this.gasAmount){
                this.gasAmount += amount;
                return amount;
             }
         }
    }