import {Animal} from '../Zoo/Animal'
import { Flyable } from './Flyable';

export class Bird extends Animal implements Flyable{
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