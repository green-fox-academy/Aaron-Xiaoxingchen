'use strict';


const lineCount = 6;

for (let index = 0; index < lineCount; index++) {
    if (index === 0 || index === lineCount - 1) {
        console.log("%".repeat(lineCount));
    } else {
        console.log("%" + ' '.repeat(index - 1) + "%" + ' '.repeat(lineCount - 2 - index) + "%");
    }
}


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is