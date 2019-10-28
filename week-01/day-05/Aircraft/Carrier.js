//Create a class that represents an aircraft-carrier

//The carrier should be able to store aircrafts
/* Each carrier should have a store of ammo represented as number
    The initial ammo should be given by a parameter in its constructor
    The carrier also has a health point given in its constructor as well
    Methods
    add
    It should take a new aircraft and add it to its storage
    fill
    It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
    If there is not enough ammo then it should start to fill the aircrafts with priority first
    If there is no ammo when this method is called, it should throw an exception
    fight
    It should take another carrier as a reference parameter and fire all the ammo from the aircrafts to it, then subtract all the damage from its health points
    getStatus
    It should return a string about itself and all of its aircrafts' statuses in the following format:

    HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
    Aircrafts:
    Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
    Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
    If the health points are 0 then it should return: It's dead Jim :(

    const F35 = require('/F35');
    const F16 = require('/F16'); 
*/
const F16 = require('/F16');
const F35 = require('/F35');


class carrier{
    constructor(ammo, healthPoint){
        this.storage = [];
        this.ammo = ammo;
        this.healthPoint = healthPoint;
    }

    add(aircraft){
        this.storage.push(aircraft);
    }

    isPriorityFill(flag){
        this.storage.filter(craft => {
            return flag === craft.isPriority();
        }).forEach(craft =>{
            let fill = Math.min(this.ammo, craft.maxAmno);
            this.ammo -= fill;
            this.ammo += craft.refill(fill);//maximum to fill every craft and return the remain;
        });
    }
    fill(){
        if(this.ammo === 0){
            throw "no ammo";
        }
        this.isPriorityFill(true);
        this.isPriorityFill(false);
    }
    
    fight(otherCarrier){
        this.storage.forEach(craft =>{
            if(otherCarrier.healthPoint != 0){
                let damage = craft.fight();
                otherCarrier.healthPoint = Math.max(0, otherCarrier.healthPoint - damage);
            }
        });
    }

    getStatus(){
        let temp = '';
        let totalDamage = 0;
        this.storage.forEach(craft =>{
            temp += craft.getStatus() + '\n';
            totalDamage += craft.ammo * craft.baseDamage;
        });

        let res = `HP: ${this.healthPoint}, Aircraft count: ${this.storage.length}, Ammo Storage: ${this.ammo}, Total Damage: ${this.totalDamage}`;

        if(this.healthPoint === 0){
            return `it'\s dead Jim :(`;
        }else{
            return res + temp;
        }
    }
}