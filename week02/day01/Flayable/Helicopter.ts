import {Vehicle} from './Vehicle'
import {Flyable} from './Flyable'

export class Helicopter extends Vehicle implements Flyable{
  protected altitude : number;
  protected distance : number;
  constructor(){
    super('white');
    this.distance = 0;
    this.altitude = 0;
  }

  land() : void{
    this.altitude--;
  } 
  fly() : void{
    this.distance++;
  }
  takeoff() : void{
    this.altitude++;
  }
}
