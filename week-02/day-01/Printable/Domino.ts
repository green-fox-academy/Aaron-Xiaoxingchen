import { Printable } from "./printable";

export class Domino implements Printable{
  protected values : number[];
  constructor(valueA : number, valueB : number){
    this.values = [valueA, valueB];
  }
  printAllField(): void{
    console.log(`${this.values[0]} | ${this.values[1]}`);
  }
}