class Plant{
    constructor(color, waterlevel = 0){
        this.color = color;
        this.waterlevel = waterlevel;
    }

    needsWater(){
        return this.waterlevel < this.minimumWaterLevel;
    }
    water(amount){
        return this.waterlevel += amount * this.absortLevel;
    }

    toString(){
        const needWaer = this.needsWater()
            ? 'need water' 
            : 'does\' need water';

            return `The ${this.color} ${this.constructor.name} ${needWaer}`;
    }
}

module.exports = Plant;
