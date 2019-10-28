function max(...array){
  var max = Number.MIN_SAFE_INTEGER;
  for(let p of array){
    if(p > max){
        max = p;
    }
  }
  return max;
}