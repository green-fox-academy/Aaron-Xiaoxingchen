import Stack from './StackInterface';

class StackImp<T> implements Stack<T>{
  protected arrays : Array<T>;
  empty(): boolean{
    return this.arrays.length === 0;
  }
  peek(): T{
    let len = this.arrays.length;
    return this.arrays[len - 1];
  }
  push(value: T): void{
    this.arrays.push(value);
  }
  pop(): T{
    return this.arrays.pop();
  }
}