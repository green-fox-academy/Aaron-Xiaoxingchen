import Tree from './TreeInterface';
import TreeNode from './TreeNode';
import QueueImp from './QueueImpl-Arrays';

class BinaryTreeImpl<T> implements Tree<T>{
  root : TreeNode<T>;
  curr : TreeNode<T> = this.root;
  constructor(root: TreeNode<T>){
    this.root = root;
  }
  empty(): boolean{
    if(this.root === null){
      return true;
    }else return false;
  }
  add(value: T): void{
    if(this.curr === null){
      this.curr = new TreeNode<T>(value);
    }else if(this.curr.left){
      this.curr.left = new TreeNode<T>(value);
    }else if(this.curr.right){
      this.curr.right = new TreeNode<T>(value);
    }
    this.curr = this.curr.left;
  }

  addNode(){

  }

  remove(value: T): void{
    
  }
  search(value: T): boolean{
    return 
  }
}