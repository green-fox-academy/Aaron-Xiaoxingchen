function foo(...array){
  const len = array.length;
  var sum = 0;
  for(let i = 0; i < len; i++){
    sum += array[i];
  }
  return sum/len;
}