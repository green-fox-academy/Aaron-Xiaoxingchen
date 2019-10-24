import TreeInterface from './TreeInterface'
import TreeNode from './TreeNode';

export default class BinarySearchTree<T> implements TreeInterface<T>{
  public root : TreeNode<T>;
  constructor(root : TreeNode<T>){
    this.root = root;
  }
  empty(): boolean{
    return this.root === null;
  }
  add(value: T): void{
    if(this.root === null){
      this.root = new TreeNode<T>(value);
    }
    let pre = null, temp = this.root;
    while(temp){
      pre = temp;
      if(temp.val > value){
          temp = temp.left;
      }else{
          temp = temp.right;
      }
    }
    
    if(pre.val > value){
      pre.left = new TreeNode<T>(value);
    }else {
      pre.right = new TreeNode<T>(value);
    }
  }
  remove(value: T): void{
    if(!this.search(value)){
      return;
    }
    

    
  }

  findMin(node: TreeNode<T>) : T{
    while(node){
      node = node.left;
    }
    return node.val;
  }

//   deleteMinHelper(node: TreeNode<T>) : T{
    
//   }

  search(value: T): boolean{
    let temp = this.root;
    while(temp){
      if(temp.val === value){
          return true;
      }
      temp = value > temp.val? temp.right :  temp.left; 
    } 
    return false;
  }
}