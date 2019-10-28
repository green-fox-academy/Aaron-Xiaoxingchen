import{Animal} from './Animal'

export class Reptile extends Animal{
  constructor(name){
    super(name);
      //this.age = age;
  }

  public getName():string{
      return this.name;
  }
  public breed() : string{
    return "laying eggs";
  }
}