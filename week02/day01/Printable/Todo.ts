import { Printable } from "./printable";

export class Todo implements Printable{
  protected todoList : string[];
  constructor(){
    this.todoList = this.todoList;
  }

  addList(thing): void{
      this.todoList.push(thing);
  }

  printAllField(): void{
    console.log(``);
  }
}