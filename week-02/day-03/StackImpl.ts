import Stack from './StackInterface';
import node from './node'

export default class StackImpl<T> implements Stack<T>{
  head : node<T>;
  curr : node<T> = this.head;

  constructor(){
    
  }
  empty(): boolean{
    return this.head === null;
  }
  peek(): T{
    while(this.curr != null){
      return this.curr.val;
      this.curr = this.curr.next;
    }
  }
  push(value: T): void{
    while(this.curr != null){
      this.curr = this.curr.next;
    }
    this.curr = new node(value);
  }
  pop(): T{
    while(this.curr.next = null){
        return this.curr.val;
    }
    this.curr = this.curr.next;
  }
}