import StackImpl from './StackImpl'
import Queue from './QueueInterface'
export default class QueueBy2Stacks<T> implements Queue<T>{
  public stack1 : StackImpl<T>;
  public stack2 : StackImpl<T>;
  constructor(){        
    this.stack1 = new StackImpl<T>();
    this.stack2 = new StackImpl<T>();
  }
  empty(): boolean{
    return this.stack1.empty() && this.stack2.empty();
  }
  peek(): T{
    while(!this.stack2.empty()){
        let temp = this.stack2.pop();
        this.stack1.push(temp);
      }
      while(this.stack1.empty()){
        this.stack2.push(this.stack1.pop());
      }
  
      return this.stack1.peek(); 
  }
  add(value: T): void{
    this.stack2.push(value);
  }
  remove(): T{
    while(!this.stack2.empty()){
        let temp = this.stack2.pop();
        this.stack1.push(temp);
      }
      while(this.stack1.empty()){
        this.stack2.push(this.stack1.pop());
      }
  
      return this.stack1.pop(); 
  }
}