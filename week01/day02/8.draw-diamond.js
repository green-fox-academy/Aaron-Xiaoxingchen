'use strict';

const lineCount = 7;

for (let count = 1; count <= lineCount; count++) {
  if (count <= 4) {
          console.log(' '.repeat(4 - count) + "*".repeat(count * 2 - 1));
  } else {
          console.log(' '.repeat(count - 4) + "*".repeat((8 - count) * 2 - 1));
  }

}

  // Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is