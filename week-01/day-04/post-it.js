/* # Post-it

 -  Create a `PostIt` a class that has
     -  a `backgroundColor`
     -  a `text` on it
     -  a `textColor`
 -  Create a few example post-it objects:
     -  an orange with blue text: "Idea 1"
     -  a pink with black text: "Awesome"
     -  a yellow with green text: "Superb!"
 */
class PostIt {
    constructor(backgroundColor, text, textColor){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}
const ex1 = new PostIt('orange', 'Idea1', 'blue');
//const ex2 = new PostIt('pink', 'Awesome', 'black');
//const ex2 = new PostIt('yellow', 'Superb', 'green');

console.log('an ' + ex1.backgroundColor + ' with ' + ex1.textColor + ' text: '+ ex1.text);
console.log('an ' + ex2.backgroundColor + ' with ' + ex2.textColor + ' text: '+ ex2.text);
console.log('an ' + ex3.backgroundColor + ' with ' + ex3.textColor + ' text: '+ ex3.text);