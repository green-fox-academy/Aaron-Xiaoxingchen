function max(...array){
  var max = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
  }
  return max;
}