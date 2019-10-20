/*  Max ammo: 12
    Base damage: 50 
*/
const AirCraft = require('/Aircraft');

class F35 extends Aircraft{
    constructor(){
        super(12, 5,true);
    }
}

module.export = F35;