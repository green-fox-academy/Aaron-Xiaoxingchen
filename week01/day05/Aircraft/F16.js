/*  Max ammo: 8
    Base damage: 30 
*/

const AirCraft = require('/Aircraft');

class F16 extends AirCraft{
    constructor(){
        super(8,30,false);
    }
}

module.exports = F16;