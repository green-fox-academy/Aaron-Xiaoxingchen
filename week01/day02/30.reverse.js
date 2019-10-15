'use strict';

var aj = [3,4,5,6,7];
var i = 0;
var j = aj.length - 1;
while(i <= j){
    var temp = aj[i];
    aj[i] = aj[j];
    aj[j] = temp;
    i++;
    j--;
}
console.log(aj);

let aj_reverse = aj.reverse();
console.log(aj_reverse);
// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

