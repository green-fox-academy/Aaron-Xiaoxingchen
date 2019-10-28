function foo(coffee = false, milk = false){
  if(coffee && milk){
    return 'coffee with sugar and milk';
  }else if(sugar){
    return 'coffee with sugar';
  }else if(milk){
    return 'coffee with milk';
  }
    return coffee;
}