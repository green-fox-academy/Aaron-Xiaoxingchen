import LinkedLists from './LinkedListInterface'
import node from './node';

class LinkedListImp<T> implements LinkedLists<T> {
  public head : node<T>;
  public current : node<T> = this.head;
  add(value: T, index?: number): void{
    if(this.current === null){
      this.current = new node(value);
    }else{
       this.current = this.current.next;
       this.current = new node(value);   
    }
  }
  get(index: number): T{
    for(let i = 0; this.current != null; i++){
      if(index === i){
        return this.current.val;
      }
      this.current = this.current.next;
    }
  }
  removeItem(value: T): void{
    while(this.current.val != value){
      this.current = this.current.next;
    }
    this.current.next = this.current.next.next;
  }
  remove(index: number): T{
    for(let i = 0; this.current != null; i++){
      if(index === i){
        return this.current.val;
      }
      this.current = this.current.next;
    }
    this.current.next = this.current.next.next;
  }
  size(): number{
    let num = 0;
    while(this.current != null){
      this.current = this.current.next;
      num ++;
    }
    return num;
  }
}
