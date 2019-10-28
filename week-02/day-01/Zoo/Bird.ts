import {Animal} from './Animal'

export class Bird extends Animal{
    constructor(name){
        super(name);
    }

    public getName():string{
        return "Parrot";
    }
    public breed():string{
        return "laying eggs";
    }
}