import {Animal} from './Animal'

export class Mammal extends Animal{
    constructor(name){
        super(name);
    }

    public getName():string{
        return "Koala ";
    }
    public breed():string{
        return "pushing miniature versions out";
    }
}