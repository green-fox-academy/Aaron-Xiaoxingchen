import Tree from './TreeInterface';
import TreeNode from './TreeNode';
import QueueImp from './QueueImpl-Arrays';

class BinaryTreeImpl implements Tree{
  root : TreeNode;
  curr : TreeNode = this.root;
  constructor(root: TreeNode){
    this.root = root;
  }
  empty(): boolean{
    if(this.root === null){
      return true;
    }else return false;
  }
  add(value: string): void{
    while(this.root != null){
      
    } 
  }

  addNode(){

  }

  remove(value: string): void{

  }
  search(value: string): boolean{
    
  }
}