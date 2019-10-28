'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
var input = " always takes longer than "
var index = quote.indexOf('you');
var newQuote = quote.slice(0, index - 1) + input + quote.slice(index);
console.log(newQuote);