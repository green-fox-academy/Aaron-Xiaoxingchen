'use strict';

const s = [1,2,3,8,5,6];
const res = s.map((e) => {
    //return e;
    if(e === 8){
      return 4;  
    }
    return e;
})

console.log(res);

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test