import Queue from './QueueInterface';

export default class QueueImp implements Queue{
  protected arrays : Array<string>;
  empty(): boolean{
    return this.arrays.length === 0;
  }
  peek(): string{
    return this.arrays[0];
  }
  add(value: string): void{
    this.arrays.push(value);
  }
  remove(): string{
    return this.arrays.shift();
  }
}