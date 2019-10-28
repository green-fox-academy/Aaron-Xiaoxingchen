'use strict'

export abstract class Animal{
  protected name: string;
  protected age: number;
  //protected gender: string;
  constructor(name){
    this.name = name;
    //this.age = age;
    //this.gender = gender;
  }
  public abstract getName():string;
  
  public abstract breed(): string;

  //public abstract shout(): string;
}