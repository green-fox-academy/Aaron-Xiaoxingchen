/* introduces numberOfStrings and
sound() method what's implementation is yet unknown
but with the help of the sound() the play() method is fully implementable
 */
import { Instrument } from "./Instruments";

export abstract class StringedInstrument extends Instrument{
  protected numberOfStrings : number;
  constructor(name: string, numberOfStrings : number){
    super(name);
      this.numberOfStrings = numberOfStrings;
  }

  public abstract sound() : string;
  public play():void{
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}