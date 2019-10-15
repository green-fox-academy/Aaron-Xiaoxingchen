'use strict';

function factoris(n){
    let sum = 1;
    for(let i = 1; i <= n; i++){
        sum *= i;
    }
    return sum;
}

// - Create a function called `factorio`
//   that returns it's input's factorial