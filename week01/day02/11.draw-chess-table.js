'use strict';

const lineCount = 8;

for(var row = 1; row <= lineCount; row++){
    var str = '';
    for(var col = 1; col <= lineCount; col++){   
        var total = row + col;
        if(total % 2 == 0){
            str += '%';
        }else str += ' ';
    }
    console.log(str);
}
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//