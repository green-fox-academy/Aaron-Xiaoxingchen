/*  The Garden
    is able to hold unlimited amount of flowers or trees
    when watering it should only water those what needs water with equally divided amount amongst them
    eg. watering with 40 and 4 of them need water then each gets watered with 10 
*/
const Plant = require('./Plant');

class Garden {
    constructor(){
        this.plants = [];
    }
    addPlant(plant){
        if(plant instanceof Plant){
            this.plants.push(plant);
        }
    }

    water(amount){
        const countOfThirstyPlants = this.plants
            .filter(plant => plant.needsWater()).length;

            const amountToOnePlant = amount / countOfThirstyPlants;

            this.plants
                .filter(plant => plant.needsWater())
                .forEach(plant => plant.water(amountToOnePlant)                  
                );
    }

    toString(){
        return this.plants
            .map(plant => plant.toString())
            .join('\n');
    }

}
module.exports = Garden;