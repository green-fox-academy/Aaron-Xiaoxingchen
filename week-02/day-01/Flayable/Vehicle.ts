export abstract class Vehicle {
  protected color : string;
  protected numOfWheels: number;
  protected typeOfVehicle: string;
  constructor(color){
    this.color  = color;
  }
}