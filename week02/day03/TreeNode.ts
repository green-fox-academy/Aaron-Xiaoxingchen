export default class TreeNode<T>{
  public val : T;
  public left : TreeNode<T>;
  public right : TreeNode<T>;

  constructor(val : T){
    this.val = val;
  }
}