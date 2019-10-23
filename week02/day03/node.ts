export default class node<T>{
    public val : T;
    public next : node<T>;

    constructor(val : T){
        this.val = val;
    }
}